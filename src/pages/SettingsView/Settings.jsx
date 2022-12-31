import { Box, Button, Divider, Paper, Typography } from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import UserService from "../../api/services/UserService";
import CustomTextField from "../../components/CustomTextField/CustomTextField";
import uploadImg from "../../images/cloud-upload-image.png";

function Settings() {
  const {
    userId,
    email,
    imgUrl,
    promoterId,
    contactName,
    contactEmail,
    contactPhone,
    accountStatus,
    bankName,
    branchName,
    branchCode,
    accountNumber,
    accountHolderName,
  } = useSelector((state) => state.login);

  const [signInEmail, setSignInEmail] = useState(email);
  const [name, setName] = useState(contactName);
  const [conEmail, setConEmail] = useState(contactEmail);
  const [phone, setPhone] = useState(contactPhone);

  const [promoterIdU, setPromoterIdU] = useState(promoterId);
  const [clientId, setClientId] = useState(userId);
  const [accStatus, setAccStatus] = useState(accountStatus);

  const [bankNameU, setBankNameU] = useState(bankName);
  const [branchNameU, setBranchNameU] = useState(branchName);
  const [branchCodeU, setBranchCodeU] = useState(branchCode);
  const [accountNumberU, setAccountNumberU] = useState(accountNumber);
  const [accountHolderNameU, setAccountHolderNameU] = useState(accountHolderName);

  // const [profileImg, setProfileImage] = useState(imgUrl ? imgUrl : uploadImg);
  const [profileImage, setProfileImage] = useState(imgUrl);

  const onSelectFile = (event) => {
    const selectedFile = event.target.files[0];

    const reader = new FileReader();

    reader.addEventListener("load", () => {
      // console.log(reader.result)
      setProfileImage(reader.result);
    });

    reader.readAsDataURL(selectedFile);
  };

  // to identify save changes
  const [savedCount, setSavedCount] = useState(0);

  const handleOnClickSave = () => {
    let settingsInfo = {
      userId: userId,
      imgUrl: profileImage,
      contactName: name,
      contactEmail: conEmail,
      contactPhone: phone,
      accountStatus: accStatus,
      bankName: bankNameU,
      branchName: branchNameU,
      branchCode: branchCodeU,
      accountNumber: accountNumberU,
      accountHolderName: accountHolderNameU,
    };

    setSavedCount(savedCount + 1);
    console.log(settingsInfo);
    let apiCall = UserService.saveSettings(settingsInfo);
    apiCall.then((response) => {
      if (response) {
        response = response.data;

        console.log("response is ", response);
      }
    });
  };

  return (
    <Paper
      sx={{
        p: 3,
        mt: 2,
      }}
    >
      <Paper variant="outlined" sx={{ width: "75vw", p: 1, mb: 2 }}>
        <Typography sx={{ fontWeight: "bold", fontSize: "1.2rem", m: 1 }}>
          Personal Settings
        </Typography>
        <Box
          sx={{
            p: 1,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ width: "20%" }}>
            <Box
              sx={{
                position: "relative",
                border: "2px dashed #4267b2",
                borderRadius: 5,
                width: 200,
                height: 235,
                backgroundColor: "#f5f8ff",
                p: 1,
                m: 1,
                textAlign: "center",
              }}
            >
              <Box>
                {/* <img width={"100px"} src={uploadImg} alt="" /> */}
                <img width={"100%"} src={profileImage} alt="" />
                {profileImage === uploadImg ? (
                  <Typography sx={{ fontWeight: 500 }}>
                    Upload your image here
                  </Typography>
                ) : (
                  <Typography sx={{ fontWeight: 500 }}>
                    Edit your image
                  </Typography>
                )}
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
                accept="image/png , image/jpeg, image/webp"
              />
            </Box>
          </Box>
          <Box sx={{ width: "80%", p: 1, border: 1, borderRadius: 5, m: 1 }}>
            <CustomTextField
              title={"Sign-in email"}
              value={signInEmail}
              setValue={setSignInEmail}
              editOptionVisible={false}
            />
            <Divider />
            <CustomTextField
              title={"Contact Name"}
              value={name}
              setValue={setName}
              editOptionVisible={true}
              savedCount={savedCount}
            />
            <CustomTextField
              title={"Contact Email"}
              value={conEmail}
              setValue={setConEmail}
              editOptionVisible={true}
              savedCount={savedCount}
            />
            <CustomTextField
              title={"Contact Phone"}
              value={phone}
              setValue={setPhone}
              editOptionVisible={true}
              savedCount={savedCount}
            />
          </Box>
        </Box>
      </Paper>

      <Paper variant="outlined" sx={{ width: "75vw", p: 1, mb: 2 }}>
        <Typography
          sx={{ fontWeight: "bold", fontSize: "1.2rem", m: 1, mb: 3 }}
        >
          Account Settings
        </Typography>

        <Box sx={{ p: 1, border: 1, borderRadius: 5, m: 1 }}>
          <CustomTextField
            title={"Promoter ID"}
            value={promoterIdU}
            setValue={setPromoterIdU}
            editOptionVisible={false}
          />
          <CustomTextField
            title={"Client ID"}
            value={clientId}
            setValue={setClientId}
            editOptionVisible={false}
          />
          <CustomTextField
            title={"Account Status"}
            value={accStatus}
            setValue={setAccStatus}
            editOptionVisible={false}
          />
        </Box>
      </Paper>

      <Paper variant="outlined" sx={{ width: "75vw", p: 1, mb: 2 }}>
        <Typography
          sx={{ fontWeight: "bold", fontSize: "1.2rem", m: 1, mb: 3 }}
        >
          Bank Account Details
        </Typography>

        <Box sx={{ p: 1, border: 1, borderRadius: 5, m: 1 }}>
          <CustomTextField
            title={"Bank Name"}
            value={bankNameU}
            setValue={setBankNameU}
            editOptionVisible={true}
            savedCount={savedCount}
          />
          <CustomTextField
            title={"Branch Name"}
            value={branchNameU}
            setValue={setBranchNameU}
            editOptionVisible={true}
            savedCount={savedCount}
          />
          <CustomTextField
            title={"Branch Code"}
            value={branchCodeU}
            setValue={setBranchCodeU}
            editOptionVisible={true}
            savedCount={savedCount}
          />
          <CustomTextField
            title={"Account Number"}
            value={accountNumberU}
            setValue={setAccountNumberU}
            editOptionVisible={true}
            savedCount={savedCount}
          />
          <CustomTextField
            title={"Account Holder's Name"}
            value={accountHolderNameU}
            setValue={setAccountHolderNameU}
            editOptionVisible={true}
            savedCount={savedCount}
          />
        </Box>
      </Paper>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "right",
        }}
      >
        <Button
          variant="contained"
          // onClick={() => {
          //   setSavedCount(savedCount + 1);
          // }}
          onClick={handleOnClickSave}
        >
          Save Changes
        </Button>
      </Box>
    </Paper>
  );
}

export default Settings;
