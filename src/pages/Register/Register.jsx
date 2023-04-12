import { Dangerous } from "@mui/icons-material";
import {
  Box,
  Button,
  FormHelperText,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserService from "../../api/services/UserService";
import ThemeImage from "../../images/statusq-main-image.png";
import validator from "validator";
import PasswordStrengthBar from "react-password-strength-bar";
import { useDispatch } from "react-redux";
import { showAlert } from "../../store/reducers/alert.slice";
import dayjs from "dayjs";
import NavBar from "./NavBar";
import Intro from "./Intro";
import About from "./About";
import Performance from "./Performance";
import Contact from "./Contact";

function Register() {
  const currentTime = dayjs();

  let navigate = useNavigate();

  const dispatch = useDispatch();

  const [userInfo, setUserInfo] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirm_password: "",
    userType: "NORMAL_USER",
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
            response = response.data;

            console.log("response is ", response);

            if (response.responseCode === "00") {
              console.log("navigate to login");
              navigate("/login");
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
    <Box sx={{ px: "60px" }}>
      <NavBar />
      <Intro />
      <About />
      <Performance />
      <div id="Register">
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            height: "100vh",
            alignItems: "center",
          }}
        >
          <Paper
            elevation={3}
            sx={{ p: 2, width: "1000px", backgroundColor: "#18345E" }}
          >
            <Box sx={{ flexDirection: "row", width: "100%", display: "flex" }}>
              <Box sx={{ width: "50%" }}>
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
                  width: "50%",
                  backgroundColor: "white",
                  borderRadius: 2,
                  p: 3,
                }}
              >
                <Typography
                  sx={{ fontSize: "2rem", fontWeight: "bold", my: 5 }}
                >
                  Create Account
                </Typography>
                <Box
                  sx={{ width: "100%", display: "flex", flexDirection: "row" }}
                >
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

                <Box
                  sx={{ width: "100%", display: "flex", flexDirection: "row" }}
                >
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
                  sx={{ mt: 5 }}
                  variant="contained"
                  fullWidth
                >
                  Sign Up
                </Button>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    my: 1,
                  }}
                >
                  <Typography>Already a member?</Typography>
                  <Typography
                    sx={{ mx: 1, fontWeight: "bold", cursor: "pointer" }}
                  >
                    <Link
                      to={"/login"}
                      style={{ textDecoration: "none", color: "secondary" }}
                    >
                      Sign In
                    </Link>
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Paper>
          {/* <DialogBox title={title} description={description} dialogOpen={dialogOpen} setDialogOpen={setDialogOpen} navigateLink={"/"}/> */}
        </Box>
      </div>
      <Contact/>
    </Box>
  );
}

export default Register;
