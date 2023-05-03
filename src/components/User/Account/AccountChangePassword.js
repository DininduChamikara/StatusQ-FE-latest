import { useForm } from "react-hook-form";
// @mui
import { Box, Button, Card, Stack } from "@mui/material";
import { useState } from "react";
import FormProvider from "../../hook-form/FormProvider";
import RHFTextField from "../../hook-form/RHFTextField";
import UserService from "../../../api/services/UserService";
import { useSelector } from "react-redux";

// ----------------------------------------------------------------------

export default function AccountChangePassword() {
  const { userId } = useSelector((state) => state.login);

  const [password, setPassword] = useState({
    userId: userId,
    currentPassword: "",
    password: "",
    confirmPassword: "",
  });

  console.log(password);

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

    if (password.password.length === 0) {
      passwordErrors = {
        ...passwordErrors,
        newPasswordErrorMsg: {
          message: "Please enter your password",
          isVisible: true,
        },
      };
    } else if (password.password.length < 8) {
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

      if (password.confirmPassword.length === 0) {
        passwordErrors = {
          ...passwordErrors,
          rePasswordErrorMsg: {
            message: "Please enter your confirm password",
            isVisible: true,
          },
        };
      } else if (password.confirmPassword.length < 8) {
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

  const methods = useForm({
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
      let passwordUpdate = UserService.changePassword(password);
      passwordUpdate.then((res) => {
        console.log(res);
      });
    }
  };

  return (
    <Box>
      <Card sx={{ p: 4 }}>
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing={3} alignItems="flex-end">
            <RHFTextField
              name="currentPassword"
              type="password"
              label="Old Password"
              onChange={handlePassword}
            />
            <RHFTextField
              name="password"
              type="password"
              label="New Password"
              onChange={handlePassword}
            />

            <RHFTextField
              name="confirmPassword"
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
