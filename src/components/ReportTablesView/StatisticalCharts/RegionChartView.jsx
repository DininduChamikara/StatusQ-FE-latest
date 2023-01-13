import { Card, CardHeader } from "@mui/material";
import React from "react";
import ApexColumnChart from "./ApexColumnChart";

function RegionChartView({regionChartData}) {

  return (
    <Card  sx={{p:1}}>
      <CardHeader title="Regional Audience" />
      <ApexColumnChart dataArr={regionChartData.dataArray} categories={regionChartData.labelsArray} />
    </Card>
  );
}

export default RegionChartView;
