import { Card, CardHeader, Grid } from "@mui/material";
import React from "react";

const UserProfileRatings = () => {
  return (
    <Card sx={{ height: "100%", paddingBottom: 0 }}>
      <CardHeader title="Reviews & Ratings" />
      <Grid item xs={12} md={6} lg={6}>
        {/* <ReviewCountChart/> */}
      </Grid>
    </Card>
  );
};

export default UserProfileRatings;
