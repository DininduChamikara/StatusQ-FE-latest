import {
  Box,
  Button,
  FormHelperText,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import AdminSettingsService from "../../api/services/AdminSettingsService";
import PromoterService from "../../api/services/PromoterService";
import UserService from "../../api/services/UserService";
import ThemeImage from "../../images/statusq-main-image.png";
import { changePromoterId, login } from "../../store/reducers/login.slice";
import { adminSettings } from "../../store/reducers/settings.slice";

function Login({ setUserInfo }) {
  let navigate = useNavigate();

  const [errorInfo, setErrorInfo] = useState({
    emailError: "",
    passwordError: "",
  });

  const [loginCredentials, setLoginCredentials] = useState({
    email: "",
    password: "",
  });

  const handleOnChangeEmail = (event) => {
    if (!event.target.value) {
      setErrorInfo({
        ...errorInfo,
        emailError: "Email is empty",
      });
    } else {
      setErrorInfo({
        ...errorInfo,
        emailError: "",
      });
    }
    setLoginCredentials({
      ...loginCredentials,
      email: event.target.value,
    });
  };

  const handleOnChangePassword = (event) => {
    if (!event.target.value) {
      setErrorInfo({
        ...errorInfo,
        passwordError: "Password is empty",
      });
    } else {
      setErrorInfo({
        ...errorInfo,
        passwordError: "",
      });
    }
    setLoginCredentials({
      ...loginCredentials,
      password: event.target.value,
    });
  };

  const loginUser = () => {
    if (errorInfo.emailError === "" && errorInfo.passwordError === "") {
      if (loginCredentials.email === "") {
        setErrorInfo({
          ...errorInfo,
          emailError: "Email is empty",
        });
      } else if (loginCredentials.password === "") {
        setErrorInfo({
          ...errorInfo,
          passwordError: "Password is empty",
        });
      } else {
        const apiCall = UserService.login(loginCredentials);
        apiCall.then((response) => {
          if (response) {
            response = response.data;
            if (response.responseCode === "00") {
              // dispatch the logged users info using login reducer
              dispatch(
                login({
                  isLoggedIn: true,
                  userId: response.user._id,
                  firstName: response.user.firstname,
                  lastName: response.user.lastname,
                  email: response.user.email,
                  userType: response.user.userType,
                  profileImageurl: response.user.profileImageurl,
                  imgUrl: response.user.imgUrl,
                  contactName: response.user.contactName,
                  contactEmail: response.user.contactEmail,
                  contactPhone: response.user.contactPhone,
                  accountStatus: response.user.accountStatus,
                  bankName: response.user.bankName,
                  branchName: response.user.branchName,
                  branchCode: response.user.branchCode,
                  accountNumber: response.user.accountNumber,
                  accountHolderName: response.user.accountHolderName,
                })
              );

              // get settings details from DB to redux store
              let settingsResponse = AdminSettingsService.getSettings();
              settingsResponse.then((res) => {
                if (res.data.responseCode === "00") {
                  dispatch(
                    adminSettings({
                      maxAdPostsForCampaign:
                        res.data.adminSettings.maxAdPostsForCampaign,
                      costPerView: res.data.adminSettings.costPerView,
                      systemFee: res.data.adminSettings.systemFee,
                      minimumThreshold: res.data.adminSettings.minimumThreshold,
                      acceptTimeDuration:
                        res.data.adminSettings.acceptTimeDuration,
                      completeTimeDuration:
                        res.data.adminSettings.completeTimeDuration,
                    })
                  );
                }
              });

              // navigate base on the user type
              if (response.user.userType === "NORMAL_USER") {
                navigate("/home");
              } else if (response.user.userType === "ADMIN_USER") {
                navigate("/admin_home");
              }
            }

            // get promoter ID if user is a promoter
            let apiCallSecondary = PromoterService.getPromoter(
              response.user._id
            );

            // set promoter ID in redux
            apiCallSecondary.then((res) => {
              dispatch(
                changePromoterId({
                  promoterId: res.data._id,
                })
              );
            });
          }
        });
      }
    }
  };

  const dispatch = useDispatch();

  return (
    <Box
      sx={{
        display: { xs: "block", lg: "flex" },
        justifyContent: "center",
        height: "100vh",
        alignItems: "center",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          p: { xs: 1, lg: 2 },
          width: { xs: "100%", lg: "1000px" },
          backgroundColor: "#18345E",
        }}
      >
        <Box
          sx={{
            flexDirection: { xs: "column", lg: "row" },
            width: "100%",
            display: "flex",
          }}
        >
          <Box sx={{ width: { xs: "100%", lg: "50%" } }}>
            <Typography
              sx={{ fontSize: "2rem", fontWeight: "bold", color: "white" }}
            >
              StatusQ
            </Typography>

            <Typography
              sx={{ fontSize: "2rem", fontWeight: "bold", color: "bisque" }}
            >
              Welcome!!!
            </Typography>
            <Box sx={{ p: 5, pb: 7 }}>
              <img src={ThemeImage} width={"100%"} alt="ThemeImage" />
            </Box>
          </Box>
          <Box
            sx={{
              width: { xs: "100%", lg: "50%" },
              backgroundColor: "white",
              borderRadius: 2,
              p: 3,
            }}
          >
            <Typography sx={{ fontSize: "2rem", fontWeight: "bold", my: 5 }}>
              Sign In
            </Typography>
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
                value={loginCredentials.email}
              />
              {errorInfo.emailError !== "" && (
                <FormHelperText
                  sx={{ mb: 1, color: "red", fontStyle: "italic" }}
                >
                  - {errorInfo.emailError}
                </FormHelperText>
              )}

              <TextField
                sx={{ mt: 2 }}
                fullWidth
                id="demo-helper-text-misaligned"
                label="Password"
                size="small"
                type="password"
                name="password"
                placeholder=""
                onChange={handleOnChangePassword}
                value={loginCredentials.password}
              />
              {errorInfo.passwordError !== "" && (
                <FormHelperText
                  sx={{ mb: 1, color: "red", fontStyle: "italic" }}
                >
                  - {errorInfo.passwordError}
                </FormHelperText>
              )}
            </Box>
            <Button
              color="primary"
              onClick={loginUser}
              sx={{ mt: 5 }}
              variant="contained"
              fullWidth
            >
              Sign In
            </Button>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                my: 1,
              }}
            >
              <Typography>Don't have an account?</Typography>
              <Typography sx={{ mx: 1, fontWeight: "bold", cursor: "pointer" }}>
                <Link
                  to={"/register"}
                  style={{ textDecoration: "none", color: "secondary" }}
                >
                  Sign Up
                </Link>
              </Typography>
            </Box>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
}

export default Login;
