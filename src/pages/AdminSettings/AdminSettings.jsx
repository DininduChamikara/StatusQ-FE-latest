import { AddCircleOutline } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardHeader,
  FormControl,
  FormHelperText,
  Grid,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import dayjs from "dayjs";
import React, { useState } from "react";
import PasswordStrengthBar from "react-password-strength-bar";
import { useDispatch } from "react-redux";
import validator from "validator";
import AdminSettingsService from "../../api/services/AdminSettingsService";
import UserService from "../../api/services/UserService";
import { showAlert } from "../../store/reducers/alert.slice";

function AdminSettings() {
  const currentTime = dayjs();

  const dispatch = useDispatch();

  const [minimumThreshold, setMinimumThreshold] = useState(10000);

  let date = new Date().toISOString().split("T")[0];

  const [timeSettings, setTimeSettings] = useState({
    acceptationTimeDuration: 12,
    completionTimeDuration: 12,
  });

  const [campaignSettings, setCampaignSettings] = useState({
    maxNumOfAdPost: 5,
    costPerView: 2,
    systemFee: 0.1,
  });

  const handleOnChangeMinimumThreshold = (event) => {
    setMinimumThreshold(event.target.value);
  };

  const handleOnChangeAcceptationTimeDuration = (event) => {
    setTimeSettings({
      ...timeSettings,
      acceptationTimeDuration: event.target.value,
    });
  };

  const handleOnChangeCompletionTimeDuration = (event) => {
    setTimeSettings({
      ...timeSettings,
      completionTimeDuration: event.target.value,
    });
  };

  const handleOnChangeMaxNumOfAdPost = (event) => {
    setCampaignSettings({
      ...campaignSettings,
      maxNumOfAdPost: event.target.value,
    });
  };

  const handleOnChangeCostPerView = (event) => {
    setCampaignSettings({
      ...campaignSettings,
      costPerView: event.target.value,
    });
  };

  const handleOnChangeSystemFee = (event) => {
    setCampaignSettings({
      ...campaignSettings,
      systemFee: event.target.value,
    });
  };

  const saveSettingsRequestBody = {
    maxAdPostsForCampaign: campaignSettings.maxNumOfAdPost,
    costPerView: campaignSettings.costPerView,
    systemFee: campaignSettings.systemFee,
    minimumThreshold: minimumThreshold,
    acceptTimeDuration: timeSettings.acceptationTimeDuration,
    completeTimeDuration: timeSettings.completionTimeDuration,
    updatedDate: date,
  };

  const saveSettings = () => {
    const response = AdminSettingsService.saveSettings({
      ...saveSettingsRequestBody,
      maxAdPostsForCampaign: campaignSettings.maxNumOfAdPost,
      costPerView: campaignSettings.costPerView,
      systemFee: campaignSettings.systemFee,
      minimumThreshold: minimumThreshold,
      acceptTimeDuration: timeSettings.acceptationTimeDuration,
      completeTimeDuration: timeSettings.completionTimeDuration,
      updatedDate: date,
    });
    response.then((res) => {
      if(res.data.responseCode === "00"){
        console.log("settings saved")
      }
    })
  };

  const [userInfo, setUserInfo] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirm_password: "",
    userType: "ADMIN_USER",
    createdTime: currentTime.format(),
    state: "ACTIVE",
  });

  const [errorInfo, setErrorInfo] = useState({
    firstnameError: "",
    lastnameError: "",
    emailError: "",
    confirm_passwordError: "",
  });

  const handleOnChangeFirstName = (event) => {
    if (!event.target.value) {
      setErrorInfo({
        ...errorInfo,
        firstnameError: "First name cannot be empty",
      });
    } else if (!event.target.value.match(/^[a-zA-Z]+$/)) {
      setErrorInfo({
        ...errorInfo,
        firstnameError: "Allowed only letters",
      });
    } else {
      setErrorInfo({
        ...errorInfo,
        firstnameError: "",
      });
      setUserInfo({
        ...userInfo,
        firstname: event.target.value,
      });
    }
  };

  const handleOnChangeLastName = (event) => {
    if (!event.target.value) {
      setErrorInfo({
        ...errorInfo,
        lastnameError: "Last name cannot be empty",
      });
    } else if (!event.target.value.match(/^[a-zA-Z]+$/)) {
      setErrorInfo({
        ...errorInfo,
        lastnameError: "Allowed only letters",
      });
    } else {
      setErrorInfo({
        ...errorInfo,
        lastnameError: "",
      });
      setUserInfo({
        ...userInfo,
        lastname: event.target.value,
      });
    }
  };

  const handleOnChangeEmail = (event) => {
    if (!event.target.value) {
      setErrorInfo({
        ...errorInfo,
        emailError: "Email cannot be empty",
      });
    } else if (validator.isEmail(event.target.value)) {
      setErrorInfo({
        ...errorInfo,
        emailError: "",
      });
    } else {
      setErrorInfo({
        ...errorInfo,
        emailError: "Invalid Email",
      });
    }
    setUserInfo({
      ...userInfo,
      email: event.target.value,
    });
  };

  const handleOnChangePassword = (event) => {
    setUserInfo({
      ...userInfo,
      password: event.target.value,
    });
    if (event.target.value !== userInfo.confirm_password) {
      setErrorInfo({
        ...errorInfo,
        confirm_passwordError: "Not match with entered password",
      });
    } else {
      setErrorInfo({
        ...errorInfo,
        confirm_passwordError: "",
      });
    }
  };

  const handleOnChangeConfirmPassword = (event) => {
    setUserInfo({
      ...userInfo,
      confirm_password: event.target.value,
    });
    if (event.target.value !== userInfo.password) {
      setErrorInfo({
        ...errorInfo,
        confirm_passwordError: "Not match with entered password",
      });
    } else {
      setErrorInfo({
        ...errorInfo,
        confirm_passwordError: "",
      });
    }
  };

  const saveUser = () => {
    if (
      errorInfo.firstnameError === "" &&
      errorInfo.lastnameError === "" &&
      errorInfo.emailError === "" &&
      errorInfo.confirm_passwordError === ""
    ) {
      if (userInfo.firstname === "") {
        setErrorInfo({
          ...errorInfo,
          firstnameError: "first name cannot be empty",
        });
      } else if (userInfo.lastname === "") {
        setErrorInfo({
          ...errorInfo,
          lastnameError: "Last name cannot be empty",
        });
      } else if (userInfo.email === "") {
        setErrorInfo({
          ...errorInfo,
          emailError: "Email cannot be empty",
        });
      } else if (userInfo.password === "") {
        setErrorInfo({
          ...errorInfo,
          confirm_passwordError: "Password cannot be empty",
        });
      } else {
        let apiCall = UserService.saveUser(userInfo);
        apiCall.then((response) => {
          if (response) {
            // response = response.data;
            if (response.responseCode === "00") {
              console.log("navigate to login");
            }
          }
        });
      }
    } else {
      // console.log("Invalid Details");
      dispatch(
        showAlert({
          message: "Please enter valid information",
          isVisible: true,
          severity: "warning",
        })
      );
    }
  };

  return (
    <Grid container spacing={1}>
      <Grid item xs={12} md={6} lg={6}>
        <Card sx={{ mb: 1, pb: 1 }}>
          <CardHeader title="Payment Settings" />
          <Box
            sx={{
              display: { xs: "block", lg: "flex" },
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
              pl: 2,
              pr: 1,
              pb: 1,
            }}
          >
            <Typography sx={{ color: "secondary.dark" }}>
              Minimum threshold
            </Typography>

            <FormControl sx={{ mx: 1 }} size="small">
              <Select
                sx={{
                  paddingLeft: "0px",
                  backgroundColor: "",
                  width: 220,
                }}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                defaultValue={10000}
                onChange={handleOnChangeMinimumThreshold}
                value={minimumThreshold}
              >
                <MenuItem value={10000}>Rs. 10,000.00</MenuItem>
                <MenuItem value={15000}>Rs. 15,000.00</MenuItem>
                <MenuItem value={20000}>Rs. 20,000.00</MenuItem>
                <MenuItem value={25000}>Rs. 25,000.00</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Card>
        <Card sx={{ pb: 1 }}>
          <CardHeader title="Time Settings" />
          <Box
            sx={{
              display: { xs: "block", lg: "flex" },
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
              pl: 2,
              pr: 1,
              pb: 1,
            }}
          >
            <Typography sx={{ color: "secondary.dark" }}>
              Job acceptation time duration
            </Typography>

            <FormControl sx={{ mx: 1 }} size="small">
              <Select
                sx={{
                  paddingLeft: "0px",
                  backgroundColor: "",
                  width: 220,
                }}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                defaultValue={12}
                onChange={handleOnChangeAcceptationTimeDuration}
                value={timeSettings.acceptationTimeDuration}
              >
                <MenuItem value={6}>6 hours</MenuItem>
                <MenuItem value={12}>12 hours</MenuItem>
                <MenuItem value={18}>18 hours</MenuItem>
                <MenuItem value={24}>24 hours</MenuItem>
              </Select>
            </FormControl>
          </Box>

          <Box
            sx={{
              display: { xs: "block", lg: "flex" },
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
              pl: 2,
              pr: 1,
              pb: 1,
            }}
          >
            <Typography sx={{ color: "secondary.dark" }}>
              Job completion time duration
            </Typography>

            <FormControl sx={{ mx: 1 }} size="small">
              <Select
                sx={{
                  paddingLeft: "0px",
                  backgroundColor: "",
                  width: 220,
                }}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                defaultValue={12}
                onChange={handleOnChangeCompletionTimeDuration}
                value={timeSettings.completionTimeDuration}
              >
                <MenuItem value={6}>6 hours</MenuItem>
                <MenuItem value={12}>12 hours</MenuItem>
                <MenuItem value={18}>18 hours</MenuItem>
                <MenuItem value={24}>24 hours</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Card>
      </Grid>
      <Grid item xs={12} md={6}>
        <Card sx={{ pb: 2 }}>
          <CardHeader title="Campaign Settings" />
          <Box
            sx={{
              display: { xs: "block", lg: "flex" },
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
              pl: 2,
              pr: 1,
              py: 1,
            }}
          >
            <Typography sx={{ color: "secondary.dark" }}>
              Maximum number of Ad-post for each campaign
            </Typography>

            <FormControl sx={{ mx: 1 }} size="small">
              <Select
                sx={{
                  paddingLeft: "0px",
                  backgroundColor: "",
                  width: 220,
                }}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                defaultValue={1}
                onChange={handleOnChangeMaxNumOfAdPost}
                value={campaignSettings.maxNumOfAdPost}
              >
                <MenuItem value={1}>1 post for each campaign</MenuItem>
                <MenuItem value={2}>2 post for each campaign</MenuItem>
                <MenuItem value={3}>3 post for each campaign</MenuItem>
                <MenuItem value={4}>4 post for each campaign</MenuItem>
                <MenuItem value={5}>5 post for each campaign</MenuItem>
              </Select>
            </FormControl>
          </Box>

          <Box
            sx={{
              display: { xs: "block", lg: "flex" },
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
              pl: 2,
              pr: 1,
              pb: 1,
            }}
          >
            <Typography sx={{ color: "secondary.dark" }}>
              Cost per view
            </Typography>

            <FormControl sx={{ mx: 1 }} size="small">
              <Select
                sx={{
                  paddingLeft: "0px",
                  backgroundColor: "",
                  width: 220,
                }}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                defaultValue={2}
                onChange={handleOnChangeCostPerView}
                value={campaignSettings.costPerView}
              >
                <MenuItem value={1}>Rs. 1.00 per view</MenuItem>
                <MenuItem value={2}>Rs. 2.00 per view</MenuItem>
                <MenuItem value={3}>Rs. 3.00 per view</MenuItem>
                <MenuItem value={4}>Rs. 4.00 per view</MenuItem>
                <MenuItem value={5}>Rs. 5.00 per view</MenuItem>
              </Select>
            </FormControl>
          </Box>

          <Box
            sx={{
              display: { xs: "block", lg: "flex" },
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
              pl: 2,
              pr: 1,
              pb: 1,
            }}
          >
            <Typography sx={{ color: "secondary.dark" }}>System Fee</Typography>

            <FormControl sx={{ mx: 1 }} size="small">
              <Select
                sx={{
                  paddingLeft: "0px",
                  backgroundColor: "",
                  width: 220,
                }}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                defaultValue={0.1}
                onChange={handleOnChangeSystemFee}
                value={campaignSettings.systemFee}
              >
                <MenuItem value={0.1}>10%</MenuItem>
                <MenuItem value={0.2}>20%</MenuItem>
                <MenuItem value={0.5}>50%</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-end",
            }}
          >
            <Button
              sx={{ mx: 2, mt: 2 }}
              variant="contained"
              onClick={saveSettings}
            >
              Save Settings
            </Button>
          </Box>
        </Card>
      </Grid>
      <Grid item xs={12} md={12}>
        <Card sx={{ pb: 1 }}>
          <CardHeader title="Add New Admin" />

          <Box sx={{ p: 2 }}>
            <Box sx={{ width: "100%", display: "flex", flexDirection: "row" }}>
              <Box sx={{ width: "50%", pr: 0.5 }}>
                <TextField
                  sx={{ mt: 2 }}
                  fullWidth
                  id="demo-helper-text-misaligned"
                  label="First Name"
                  size="small"
                  type="text"
                  name="fname"
                  placeholder="First Name"
                  // error={errorInfo.firstnameError !== ""}
                  onChange={handleOnChangeFirstName}
                  value={userInfo.fname}
                />
                {errorInfo.firstnameError !== "" && (
                  <FormHelperText
                    sx={{ mb: 1, color: "red", fontStyle: "italic" }}
                  >
                    - {errorInfo.firstnameError}
                  </FormHelperText>
                )}
              </Box>
              <Box sx={{ width: "50%", pl: 0.5 }}>
                <TextField
                  sx={{ mt: 2 }}
                  fullWidth
                  id="demo-helper-text-misaligned"
                  label="Last Name"
                  size="small"
                  type="text"
                  name="lname"
                  placeholder="Last Name"
                  onChange={handleOnChangeLastName}
                  value={userInfo.lname}
                />
                {errorInfo.lastnameError !== "" && (
                  <FormHelperText
                    sx={{ mb: 1, color: "red", fontStyle: "italic" }}
                  >
                    - {errorInfo.lastnameError}
                  </FormHelperText>
                )}
              </Box>
            </Box>

            <Box sx={{ width: "100%" }}>
              <TextField
                sx={{ mt: 2 }}
                fullWidth
                id="demo-helper-text-misaligned"
                label="Email"
                size="small"
                type="email"
                name="name"
                placeholder="Email"
                onChange={handleOnChangeEmail}
                value={userInfo.email}
              />
              {errorInfo.emailError !== "" && (
                <FormHelperText
                  sx={{ mb: 1, color: "red", fontStyle: "italic" }}
                >
                  - {errorInfo.emailError}
                </FormHelperText>
              )}
            </Box>

            <Box sx={{ width: "100%", display: "flex", flexDirection: "row" }}>
              <Box sx={{ width: "50%", pr: 0.5 }}>
                <TextField
                  sx={{ mt: 2 }}
                  fullWidth
                  id="demo-helper-text-misaligned"
                  label="Password"
                  size="small"
                  type="password"
                  name="password"
                  onChange={handleOnChangePassword}
                  value={userInfo.password}
                />
                <Box sx={{ px: 1 }}>
                  <PasswordStrengthBar password={userInfo.password} />
                </Box>
              </Box>
              <Box sx={{ width: "50%", pl: 0.5 }}>
                <TextField
                  sx={{ mt: 2 }}
                  fullWidth
                  id="demo-helper-text-misaligned"
                  label="Confirm Password"
                  size="small"
                  type="password"
                  name="confirm_password"
                  onChange={handleOnChangeConfirmPassword}
                  value={userInfo.confirm_password}
                />
                {errorInfo.confirm_passwordError !== "" && (
                  <FormHelperText
                    sx={{ mb: 1, color: "red", fontStyle: "italic" }}
                  >
                    - {errorInfo.confirm_passwordError}
                  </FormHelperText>
                )}
              </Box>
            </Box>

            <Button
              onClick={saveUser}
              sx={{ mt: 2 }}
              variant="contained"
              fullWidth
              startIcon={<AddCircleOutline />}
            >
              Add Admin
            </Button>
          </Box>
        </Card>
      </Grid>
    </Grid>
  );
}

export default AdminSettings;
