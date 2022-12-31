import { useCallback, useEffect, useState } from "react";
// form
import { useForm } from "react-hook-form";
// @mui
import { Box, Button, Card, Grid, Stack, Typography } from "@mui/material";

import TimezoneSelect, { allTimezones } from "react-timezone-select";
import { fData } from "../../../utils/formatNumber";
import FormProvider from "../../hook-form/FormProvider";
import RHFTextField from "../../hook-form/RHFTextField";
import { RHFUploadAvatar } from "../../hook-form/RHFUpload";
import CountrySelector from "./CountrySelector";


// ----------------------------------------------------------------------

export default function AccountGeneral() {

  const [timeZone, setTimeZone] = useState(
    Intl.DateTimeFormat().resolvedOptions().timeZone
  );

  const [country, setCountry] = useState("");

  // useEffect(() => {
  //   setTimeZone(profile.timeZone);
  //   let value = profile.country.split("_")[0];
  //   let label = profile.country.split("_")[1];
  //   setCountry({ value: value, label: label });
  // }, [profile.country, profile.timeZone]);

  const [userInfo, setUserInfo] = useState({
    // userId: profile?.userId,
    // userRoleId: profile?.userRole.userRoleId,
    // name: profile?.name || "",
    // email: profile?.email || "",
    // companyName: profile?.companyName || "",
    // photoURL: profile?.profileImg || null,
    // mobileNo: profile?.mobileNo || "",
    // country: profile?.country || country,
    // address: profile?.address || "",
    // timeZone: profile?.timeZone || timeZone,
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

    setUserInfo({ ...userInfo, [name]: value });
  };

  const onSubmit = async () => {
    // let userUpdate = UserService.updateUser({
    //   ...userInfo,
    //   country: country.value + "_" + country.label,
    //   timeZone: timeZone.value,
    // });
    // userUpdate.then((res) => {
    //   if (res) {
    //     if (res.data.responseCode === "00") {
    //       getUserDetails();
    //       store.dispatch(
    //         showAlert({
    //           message: "User updated successfully!",
    //           isVisible: true,
    //           severity: ALERT_tYPES.success,
    //           title: "Success",
    //         })
    //       );
    //     } else {
    //       store.dispatch(
    //         showAlert({
    //           message: `Something went wrong`,
    //           isVisible: true,
    //           severity: ALERT_tYPES.error,
    //         })
    //       );
    //     }
    //   }
    // });
  };

  const handleDrop = useCallback(
  //   (acceptedFiles) => {
  //     const file = acceptedFiles[0];

  //     if (file) {
  //       setValue(
  //         "photoURL",
  //         Object.assign(file, {
  //           preview: URL.createObjectURL(file),
  //         })
  //       );
  //     }
  //   },
  //   [setValue]
  );

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Card sx={{ py: 7, px: 3, textAlign: "center" }}>
            <RHFUploadAvatar
              name="profileImg"
              // accept={[]}

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
                  Allowed *.jpeg, *.jpg, *.png, *.gif
                  <br /> max size of {fData(3145728)}
                </Typography>
              }
            />
          </Card>
        </Grid>

        <Grid item xs={12} md={8}>
          <Card sx={{ p: 3 }}>
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
              <RHFTextField
                name="name"
                label="Name"
                value={userInfo.name}
                onChange={handleUserInput}
              />
              <RHFTextField
                name="email"
                label="Email Address"
                value={userInfo.email}
                disabled
              />

              <RHFTextField
                name="companyName"
                label="Company Nmae"
                value={userInfo.companyName}
                onChange={handleUserInput}
              />

              <RHFTextField
                name="mobileNo"
                label="Phone Number"
                value={userInfo.mobileNo}
                onChange={handleUserInput}
              />
              <RHFTextField
                name="address"
                label="Address"
                value={userInfo.address}
                onChange={handleUserInput}
              />
              <Box></Box>

              <Box>
                <Typography>Country</Typography>
                <CountrySelector value={country} setValue={setCountry} />
              </Box>

              <Box>
                <Typography>Timezone</Typography>
                <TimezoneSelect
                  fullWidth
                  size="small"
                  name="timeZone"
                  value={timeZone}
                  onChange={setTimeZone}
                  timezones={{
                    ...allTimezones,
                    "America/Lima": "Pittsburgh",
                    "Europe/Berlin": "Frankfurt",
                  }}
                />
              </Box>

              {/* <RHFTextField name="timeZone" label="TimeZone" /> */}
            </Box>

            <Stack spacing={3} alignItems="flex-end" sx={{ mt: 3 }}>
              <Button type="submit" variant="contained">
                Save Changes
              </Button>
            </Stack>
          </Card>
        </Grid>
      </Grid>
    </FormProvider>
  );
}
