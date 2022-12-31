import { AddCircleOutline, HighlightOff } from "@mui/icons-material";
import { Box, Button, IconButton, Typography } from "@mui/material";
import React, { useState } from "react";
import LanguageTextfield from "../LanguageTextfield/LanguageTextfield";
import uploadImg from "../../images/cloud-upload-image.png";
import { useDispatch, useSelector } from "react-redux";
import {
  changeAdvertisementSavedForUpload,
  changeCampaignAdvertisements,
} from "../../store/reducers/saveCampaign";
import { useEffect } from "react";

function ImagePreview() {
  const [finalMessage, setFinalMessage] = useState();

  // const [saveClicked, setSaveClicked] = useState(false);

  const [advertisementObjArr, setAdvertisementObjArr] = useState([]);
  const [advertisements, setAdvertisements] = useState([]);

  const { selectedAdvertisements, advertisementSavedForUpload } = useSelector(
    (state) => state.saveCampaign
  );

  useEffect(() => {
    setAdvertisements(selectedAdvertisements);
  }, [selectedAdvertisements]);

  if (advertisements[1]) {
  }

  let advertisementObj = {
    id: null,
    file: null,
    description: "",
  };

  const onAddTextOnlyAdvertisement = () => {
    const imagesArray = (file, description) => {
      advertisementObj.id = "id" + Math.random().toString(16).slice(2);
      advertisementObj.file = file;
      advertisementObj.description = description;

      return advertisementObj;
    };

    setAdvertisements((previousAdvertisements) =>
      previousAdvertisements.concat(imagesArray)
    );
  };

  // const [tempImage, setTempImage] = useState();

  const onSelectFile = (event) => {
    /// new implementations
    const selectedFile = event.target.files[0];

    const reader = new FileReader();

    reader.addEventListener("load", () => {
      // setTempImage(reader.result);
      // console.log(reader.result)
      advertisementObj.id = "id" + Math.random().toString(16).slice(2);
      advertisementObj.file = reader.result;
      advertisementObj.description = "";

      setAdvertisements((previousAdvertisements) =>
        previousAdvertisements.concat(advertisementObj)
      );
    });

    reader.readAsDataURL(selectedFile);

    ///

    // const selectedFiles = event.target.files;
    // const description = event.target.description;

    // const selectedFileArray = Array.from(selectedFiles, description);

    // const imagesArray = selectedFileArray.map((file, description) => {
    //   advertisementObj.id = "id" + Math.random().toString(16).slice(2);
    //   advertisementObj.file = URL.createObjectURL(file);
    //   // advertisementObj.file = tempImage;
    //   advertisementObj.description = description;

    //   return advertisementObj;
    // });

    // setAdvertisements((previousAdvertisements) =>
    //   previousAdvertisements.concat(imagesArray)
    // );

    // // FOR BUG IN CHROME
    // event.target.value = "";
  };

  function deleteHandler(advertisement, index) {
    setAdvertisements(
      advertisements.filter((e) => e !== advertisements[index])
    );

    URL.revokeObjectURL(advertisement);
  }

  const dispatch = useDispatch();

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          alignItems: "center",
        }}
      >
        {advertisements &&
          advertisements.map((advertisement, index) => {
            return (
              <Box
                sx={{
                  m: 1,
                  border: 2,
                  borderRadius: 3,
                  borderColor: "primary.main",
                  p: 1,
                  width: 260,
                  height: 520,
                }}
                key={index}
              >
                {advertisement.file ? (
                  <Box>
                    <img
                      style={{ borderRadius: 10 }}
                      src={advertisement.file}
                      height="300"
                      width="240"
                      alt="upload"
                    />

                    <Box sx={{ border: 0, borderRadius: 2, my: 1 }}>
                      <LanguageTextfield
                        index={index}
                        rowsCount={2}
                        advertisements={advertisements}
                        setAdvertisements={setAdvertisements}
                        finalMessageText={
                          advertisements[index].description
                            ? advertisements[index].description
                            : ""
                        }
                        setFinalMessage={setFinalMessage}
                        saveClicked={advertisementSavedForUpload}
                      />
                    </Box>
                  </Box>
                ) : (
                  <Box sx={{ border: 0, borderRadius: 2, mt: 2, mb: 1 }}>
                    <LanguageTextfield
                      index={index}
                      rowsCount={15}
                      advertisements={advertisements}
                      setAdvertisements={setAdvertisements}
                      finalMessageText={
                        advertisements[index].description
                          ? advertisements[index].description
                          : ""
                      }
                      setFinalMessage={setFinalMessage}
                      saveClicked={advertisementSavedForUpload}
                    />
                  </Box>
                )}

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Typography color={"secondary.main"} sx={{ ml: 1 }}>{index + 1}</Typography>
                  <IconButton
                    disabled={advertisementSavedForUpload}
                    onClick={() => deleteHandler(advertisement, index)}
                  >
                    <HighlightOff color="error" />
                  </IconButton>
                </Box>
              </Box>
            );
          })}
        <Box
          sx={{
            position: "relative",
            border: "2px dashed #4267b2",
            borderColor:"secondary.dark",
            borderRadius: 3,
            width: 260,
            height: 520,
            backgroundColor: "#f5f8ff",
            p: 2,
            m: 1,
            textAlign: "center",
          }}
        >
          <Typography color={"secondary.dark"}>+ Add Image Advertisement</Typography>
          <Box sx={{ mt: 14 }}>
            <Box sx={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
            <img width={"100px"} src={uploadImg} alt="" />
            </Box>
            <Typography sx={{ fontWeight: 500, color:'secondary.dark' }}>Drag & Drop</Typography>
            <Typography sx={{ fontWeight: 500, color:'secondary.dark' }}>your images here</Typography>
          </Box>

          <input
            style={{
              position: "absolute",
              opacity: 0,
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              cursor: "pointer",
            }}
            type="file"
            name="images"
            onChange={onSelectFile}
            disabled={advertisementSavedForUpload}
            accept="image/png , image/jpeg, image/webp"
          />
        </Box>

        <Box
          sx={{
            position: "relative",
            border: "2px dashed #4267b2",
            borderColor:'secondary.dark',
            borderRadius: 3,
            width: 260,
            height: 520,
            backgroundColor: "#f5f8ff",
            p: 2,
            m: 1,
          }}
        >
          <Typography textAlign={"center"} color={"secondary.dark"}>+ Add Text Only Advertisement</Typography>
          <Box sx={{ textAlign: "center", mt: 24 }}>
            <Button
              color="secondary"
              variant="outlined"
              startIcon={<AddCircleOutline />}
              onClick={onAddTextOnlyAdvertisement}
              disabled={advertisementSavedForUpload}
            >
              Add New
            </Button>
          </Box>
        </Box>
      </Box>

      {advertisements.length > 0 &&
        (advertisements.length > 5 ? (
          <Box
            sx={{
              textAlign: "center",
              my: 1,
              borderTop: 2,
              borderBottom: 2,
              py: 1,
              color: "red",
            }}
          >
            <Typography>
              You can't upload more than 5 advertisements!
            </Typography>
            <Typography>
              please delete <b> {advertisements.length - 5} </b> of them
            </Typography>
          </Box>
        ) : (
          <Box
            sx={{
              textAlign: "center",
              my: 1,
              borderTop: 2,
              borderBottom: 2,
              py: 1,
              color: "primary",
            }}
          >
            <Button
              sx={{ ml: 1, width: 300 }}
              disabled={advertisementSavedForUpload}
              variant="contained"
              onClick={() => {
                console.log("button clicked", advertisements);

                // setSaveClicked(true);

                let i = 0;
                setAdvertisementObjArr([]);

                advertisements.forEach((element) => {
                  if (element.id) {
                    const advertisementObj = {
                      id: 2,
                      file: element.file,
                      description: element.description,
                    };

                    advertisementObjArr.push(advertisementObj);

                    i = i + 1;
                  } else if (element.description) {
                    const advertisementObj = {
                      id: 3,
                      file: "",
                      description: element.description,
                    };

                    advertisementObjArr.push(advertisementObj);

                    i = i + 1;
                  }
                });

                dispatch(
                  changeCampaignAdvertisements({
                    selectedAdvertisements: advertisementObjArr,
                  })
                );

                dispatch(
                  changeAdvertisementSavedForUpload({
                    advertisementSavedForUpload: true,
                  })
                );
              }}
            >
              SUBMIT ONLY {advertisements.length} ADVERTISEMENTS
              {advertisements.length === 1 ? "" : "S"}
            </Button>

            <Button
              sx={{ ml: 1, width: 300 }}
              variant="contained"
              color="secondary"
              onClick={() => {
                setAdvertisements([]);
                dispatch(
                  changeCampaignAdvertisements({
                    selectedAdvertisements: [],
                  })
                );

                // setSaveClicked(false);

                dispatch(
                  changeAdvertisementSavedForUpload({
                    advertisementSavedForUpload: false,
                  })
                );
              }}
            >
              Cancel All
            </Button>
          </Box>
        ))}

      {/* {advertisements.length > 5 && (
        <Box sx={{textAlign:'center', my:1, borderTop:2, borderBottom:2, py:1, color:'red'}}>
          <Typography>You can't upload more than 5 advertisements!</Typography>
          <Typography>
            please delete <b> {advertisements.length - 5} </b> of them
          </Typography>
        </Box>
      )} */}
    </Box>
  );
}

export default ImagePreview;
