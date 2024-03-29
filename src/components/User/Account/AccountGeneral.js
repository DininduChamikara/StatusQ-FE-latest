import { useCallback, useState } from "react";
// form
import { useForm } from "react-hook-form";
// @mui
import {
  Box,
  Button,
  Card,
  CardHeader,
  Grid,
  Stack,
  Typography,
} from "@mui/material";

import { useDispatch, useSelector } from "react-redux";
import UserService from "../../../api/services/UserService";
import { login } from "../../../store/reducers/login.slice";
import { fData } from "../../../utils/formatNumber";
import FormProvider from "../../hook-form/FormProvider";
import RHFSelect from "../../hook-form/RHFSelect";
import RHFTextField from "../../hook-form/RHFTextField";
import { RHFUploadAvatar } from "../../hook-form/RHFUpload";

const banks = [
  "Bank of Ceylon",
  "People's Bank",
  "Commercial Bank of Ceylon",
  "Hatton National Bank",
  "Sampath Bank",
  "Seylan Bank",
  "Nations Trust Bank",
  "DFCC Bank",
  "Pan Asia Banking Corporation",
  "Union Bank of Colombo",
  "Standard Chartered Bank",
  "HSBC Sri Lanka",
  "Citibank Sri Lanka",
  "National Development Bank",
  "Regional Development Bank",
  "Sri Lanka Savings Bank",
  "Sri Lanka Postal Savings Bank",
  "Sri Lanka Export Development Bank",
];
// ----------------------------------------------------------------------

export default function AccountGeneral() {
  const {
    userId,
    userType,
    imgUrl,
    firstName,
    lastName,
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

  const [userInfo, setUserInfo] = useState({
    userId: userId,
    imgUrl: imgUrl,
    firstName: firstName,
    lastName: lastName,
    contactName: contactName,
    contactEmail: contactEmail,
    contactPhone: contactPhone,
    accountStatus: accountStatus,
    bankName: bankName,
    branchName: branchName,
    branchCode: branchCode,
    accountNumber: accountNumber,
    accountHolderName: accountHolderName,
  });

  const methods = useForm({
    // userInfo,
  });

  const {
    setValue,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const handleUserInput = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    setUserInfo({ ...userInfo, [name]: value, imgUrl: profileImage });
  };

  const dispatch = useDispatch();

  const onSubmit = async () => {
    let apiCall = UserService.saveSettings({
      ...userInfo,
      imgUrl: profileImage,
    });
    apiCall.then((response) => {
      if (response) {
        response = response.data;

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
      }
    });
  };

  const [profileImage, setProfileImage] = useState(imgUrl);

  const handleDrop = useCallback(
    (acceptedFiles) => {
      const file = acceptedFiles[0];

      const reader = new FileReader();

      reader.addEventListener("load", () => {
        setProfileImage(reader.result);
      });
      reader.readAsDataURL(file);
    },
    [setValue]
  );

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Card sx={{ py: 7, px: 3, textAlign: "center" }}>
            <RHFUploadAvatar
              name="profileImg"
              uploadedImg={profileImage}
              accept="image/*"
              maxSize={3145728}
              onDrop={handleDrop}
              helperText={
                <Typography
                  variant="caption"
                  sx={{
                    mt: 2,
                    mx: "auto",
                    display: "block",
                    textAlign: "center",
                    color: "text.secondary",
                  }}
                >
                  Allowed *.jpeg, *.jpg, *.png
                  <br /> max size of {fData(3145728)}
                </Typography>
              }
            />
          </Card>
        </Grid>

        <Grid item xs={12} md={8}>
          <Card>
            <CardHeader title="Personal Info" />
            <Box
              sx={{
                p: 3,
                display: "grid",
                rowGap: 3,
                columnGap: 2,
                gridTemplateColumns: {
                  xs: "repeat(1, 1fr)",
                  sm: "repeat(2, 1fr)",
                },
              }}
            >
              <RHFTextField
                disabled={true}
                name="firstName"
                label="First Name"
                value={userInfo.firstName}
                onChange={handleUserInput}
              />

              <RHFTextField
                disabled={true}
                name="lastName"
                label="Last Name"
                value={userInfo.lastName}
                onChange={handleUserInput}
              />

              <RHFTextField
                name="contactName"
                label="Contact Name"
                value={userInfo.contactName}
                onChange={handleUserInput}
              />
              <RHFTextField
                name="contactEmail"
                label="Email Address"
                value={userInfo.contactEmail}
                onChange={handleUserInput}
              />

              <RHFTextField
                name="contactPhone"
                label="Phone Number"
                value={userInfo.contactPhone}
                onChange={handleUserInput}
              />
            </Box>

            {userType === "ADMIN_USER" && (
              <Stack spacing={3} alignItems="flex-end" sx={{ mx: 3, mb: 3 }}>
                <Button type="submit" variant="contained">
                  Save Changes
                </Button>
              </Stack>
            )}
          </Card>
        </Grid>
      </Grid>

      {userType !== "ADMIN_USER" && (
        <Grid container sx={{ mt: 2 }}>
          <Grid item xs={12} md={12}>
            <Card sx={{ p: 0 }}>
              <CardHeader title="Bank Details" />
              <Box sx={{ p: 3 }}>
                <Box
                  sx={{
                    display: "grid",
                    rowGap: 3,
                    columnGap: 2,
                    gridTemplateColumns: {
                      xs: "repeat(1, 1fr)",
                      sm: "repeat(2, 1fr)",
                    },
                  }}
                >
                  <RHFSelect
                    onChange={handleUserInput}
                    name="bankName"
                    label="Bank Name"
                    defaultValue={userInfo.bankName}
                  >
                    {banks.map((option, index) => (
                      <option key={index} value={option}>
                        {option}
                      </option>
                    ))}
                  </RHFSelect>

                  <RHFTextField
                    name="branchName"
                    label="Branch Name"
                    value={userInfo.branchName}
                    onChange={handleUserInput}
                  />

                  <RHFTextField
                    name="branchCode"
                    label="Branch Code"
                    value={userInfo.branchCode}
                    onChange={handleUserInput}
                  />

                  <RHFTextField
                    name="accountNumber"
                    label="Account Number"
                    value={userInfo.accountNumber}
                    onChange={handleUserInput}
                  />

                  <RHFTextField
                    name="accountHolderName"
                    label="Account Holder's Name"
                    value={userInfo.accountHolderName}
                    onChange={handleUserInput}
                    // disabled
                  />
                </Box>

                <Stack spacing={3} alignItems="flex-end" sx={{ mt: 3 }}>
                  <Button type="submit" variant="contained">
                    Save Changes
                  </Button>
                </Stack>
              </Box>
            </Card>
          </Grid>
        </Grid>
      )}
    </FormProvider>
  );
}
