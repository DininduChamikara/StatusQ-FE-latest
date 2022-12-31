import PropTypes from "prop-types";
import { Grid, Stack } from "@mui/material";
import ProfileAbout from "./ProfileAbout";
import ProfilePackage from "./ProfilePackage";

// ----------------------------------------------------------------------

Profile.propTypes = {
  myProfile: PropTypes.object,
};

export default function Profile() {
  return (
    <Grid container spacing={1}>
      <Grid item xs={12} md={6}>
        <Stack spacing={3}>
          <ProfileAbout />
        </Stack>
      </Grid>
      <Grid item xs={12} md={6}>
        <Stack spacing={3}>
          <ProfilePackage />
        </Stack>
      </Grid>
    </Grid>
  );
}
