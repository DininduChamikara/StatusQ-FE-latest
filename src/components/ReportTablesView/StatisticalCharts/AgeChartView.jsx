import { Card, CardHeader } from "@mui/material";
import React from "react";
import ApexColumnChart from "./ApexColumnChart";

function AgeChartView({ageChartData}) {

  return (
    <Card>
      <CardHeader title="Age Audience" />
      <ApexColumnChart dataArr={ageChartData.dataArray} categories={ageChartData.labelsArray} />
    </Card>
  );
}

export default AgeChartView;
