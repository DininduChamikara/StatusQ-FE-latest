import { Grid, Stack } from "@mui/material";
import React from "react";
import EducationChartView from "./StatisticalCharts/EducationChartView";
import GenderChartView from "./StatisticalCharts/GenderChartView";

function UserStatistics() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={4.5}>
        <Stack>
          <EducationChartView />
        </Stack>
      </Grid>
      {/* <Grid item xs={12} md={4.5}>
        <Stack>
          <EducationChartView />
        </Stack>
      </Grid> */}
      <Grid item xs={12} md={3.5}>
        <Stack>
          <GenderChartView />
        </Stack>
      </Grid>
    </Grid>
  );
}

export default UserStatistics;
