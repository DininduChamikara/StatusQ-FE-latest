import { Box, Typography } from "@mui/material";
import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import { ImageConfig } from "../../config/ImageConfig";
import uploadImg from "../../images/cloud-upload-image.png";

function DropFileInput(props) {
  const wrapperRef = useRef(null);

  const [fileList, setFileList] = useState([]);

  const onDragEnter = () => wrapperRef.current.classlist.add("dragover");
  const onDragLeave = () => wrapperRef.current.classlist.remove("dragover");
  const onDrop = () => wrapperRef.current.classlist.remove("dragover");

  const onFileDrop = (e) => {
    const newFile = e.target.files[0];
    if (newFile) {
      const updatedList = [...fileList, newFile];
      setFileList(updatedList);
      props.onFileChange(updatedList);
    }
  };

  const fileRemove = (file) => {
    const updatedList = [...fileList];
    updatedList.splice(fileList.indexOf(file), 1);
    setFileList(updatedList);
    props.onFileChange(updatedList);
  };

  return (
    <Box>
      <Box
        ref={wrapperRef}
        sx={{
          position: "relative",
          width: "100%",
          height: "150px",
          border: "2px dashed #4267b2",
          borderRadius: "20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#f5f8ff",
        }}
        onDragEndCapture={onDragEnter}
        onDragLeave={onDragLeave}
        onDrop={onDrop}
      >
        <Box
          sx={{
            textAlign: "center",
            color: "#ccc",
            fontWeight: 600,
            p: "10px",
          }}
        >
          <img width={"100px"} src={uploadImg} alt="" />
          <Typography sx={{ fontWeight: 500 }}>
            Drag & Drop your files here
          </Typography>
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
          value=""
          onChange={onFileDrop}
        />

      </Box>
      {fileList.length > 0 ? (
        <Box sx={{ mt: "30px" }}>
          <Typography sx={{ fontWeight: 500, mb: "20px" }}>
            Ready to upload
          </Typography>
          {fileList.map((item, index) => (
            <Box
              key={index}
              sx={{
                position: "relative",
                display: "flex",
                mb: "10px",
                backgroundColor: "#f5f8ff",
                p: "15px",
                borderRadius: "20px",
              }}
            >
              <img
                style={{ marginRight: "20px", width: "50px" }}
                src={
                  ImageConfig[item.type.split("/")[1]] || ImageConfig["default"]
                }
                alt=""
              />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <Typography>{item.name}</Typography>
                <Typography>{item.size}B</Typography>
              </Box>

              <Box
                sx={{
                  backgroundColor: "#fff",
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "absolute",
                  right: "10px",
                  top: "25%",
                  boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                  cursor: "pointer",
                  opacity: 1,
                }}
                onClick={() => fileRemove(item)}
              >
                x
              </Box>
            </Box>
          ))}
        </Box>
      ) : null}
    </Box>
  );
}

DropFileInput.propTypes = {
  onFileChange: PropTypes.func,
};

export default DropFileInput;
