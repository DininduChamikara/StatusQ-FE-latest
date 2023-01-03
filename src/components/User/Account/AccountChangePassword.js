// import * as Yup from "yup";
// import { useSnackbar } from "notistack";
// form
// import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
// @mui
import { Box, Button, Card, Stack } from "@mui/material";
import { useState } from "react";
import FormProvider from "../../hook-form/FormProvider";
import RHFTextField from "../../hook-form/RHFTextField";
// import { store } from "../../../app/store";
// import { showAlert } from "../../../reducers/alertSlice";
import UserService from "../../../api/services/UserService";

// ----------------------------------------------------------------------

export default function AccountChangePassword() {
 
  const [password, setPassword] = useState({
    oldPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });

  const handlePassword = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    setPassword({ ...password, [name]: value });
  };

  //validations
  const [passwordError, setPasswordError] = useState({
    newPasswordErrorMsg: {
      message: "",
      isVisible: false,
    },
    rePasswordErrorMsg: {
      message: "",
      isVisible: false,
    },
  });

  const validatePasswordInput = () => {
    let passwordErrors = passwordError;

    if (password.newPassword.length === 0) {
      passwordErrors = {
        ...passwordErrors,
        newPasswordErrorMsg: {
          message: "Please enter your password",
          isVisible: true,
        },
      };
    } else if (password.newPassword.length < 8) {
      passwordErrors = {
        ...passwordErrors,
        newPasswordErrorMsg: {
          message: "Password should contain atleast 8 characters",
          isVisible: true,
        },
      };
    } else {
      passwordErrors = {
        ...passwordErrors,
        newPasswordErrorMsg: {
          message: "",
          isVisible: false,
        },
      };

      if (password.confirmNewPassword.length === 0) {
        passwordErrors = {
          ...passwordErrors,
          rePasswordErrorMsg: {
            message: "Please enter your confirm password",
            isVisible: true,
          },
        };
      } else if (password.confirmNewPassword.length < 8) {
        passwordErrors = {
          ...passwordErrors,
          rePasswordErrorMsg: {
            message: "Password should contain atleast 8 characters",
            isVisible: true,
          },
        };
      } else {
        passwordErrors = {
          ...passwordErrors,
          rePasswordErrorMsg: {
            message: "",
            isVisible: false,
          },
        };
      }

      setPasswordError(passwordErrors);
      return (
        passwordErrors.newPasswordErrorMsg.isVisible ||
        passwordErrors.rePasswordErrorMsg.isVisible
      );
    }
  };

  const requestBody = {
    // userId: profile?.userId || "",
    // curpassword: password.oldPassword,
    // password: password.newPassword,
    // repassword: password.confirmNewPassword,
  };

  const methods = useForm({
    // resolver: yupResolver(ChangePassWordSchema),
    password,
  });

  const {
    reset,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = async () => {
    let isInValid = validatePasswordInput();

    if (!isInValid) {
      if (password.newPassword !== password.confirmNewPassword) {
        // store.dispatch(
        //   showAlert({
        //     message: `new password does not match confirm password`,
        //     isVisible: true,
        //     severity: ALERT_tYPES.error,
        //   })
        // );
      } else {
        let passwordUpdate = UserService.updateUserPassword(requestBody);
        passwordUpdate.then((res) => {
          if (res) {
            if (res.data.responseCode === "00") {
              // store.dispatch(
              //   showAlert({
              //     message: "Password updated successfully!",
              //     isVisible: true,
              //     severity: ALERT_tYPES.success,
              //     title: "Success",
              //   })
              // );
            } else {
              // store.dispatch(
              //   showAlert({
              //     message: `Something went wrong`,
              //     isVisible: true,
              //     severity: ALERT_tYPES.error,
              //   })
              // );
            }
          }
        });
      }
    }

  };

  return (
    <Box>
      <Card sx={{ p: 4 }}>
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing={3} alignItems="flex-end">
            <RHFTextField
              name="oldPassword"
              type="password"
              label="Old Password"
              onChange={handlePassword}
            />
            <RHFTextField
              name="newPassword"
              type="password"
              label="New Password"
              onChange={handlePassword}
            />

            <RHFTextField
              name="confirmNewPassword"
              type="password"
              label="Confirm New Password"
              onChange={handlePassword}
            />
            <Button type="submit" variant="contained" loading={isSubmitting}>
              Save Changes
            </Button>
          </Stack>
        </FormProvider>
      </Card>
    </Box>
  );
}
