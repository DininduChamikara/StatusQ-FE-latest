import { Grid, Stack } from "@mui/material";
import React from "react";
import IndividualReviews from "../Reviews/IndividualReviews";
import Reviews from "../Reviews/Reviews";
import UserProfileAbout from "../User/Profile/UserProfileAbout";
import UserReviewsCount from "./UserReviewsCount";

export default function UserViewProfile({userId}) {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={8.5}>
        <Stack>
          <UserProfileAbout userId={userId} />
        </Stack>
      </Grid>
      <Grid item xs={12} md={3.5}>
        <UserReviewsCount userId={userId} />
      </Grid>
      <Grid item xs={12} md={12} lg={12}>
        <IndividualReviews userId={userId} />
      </Grid>
    </Grid>
  );
}
