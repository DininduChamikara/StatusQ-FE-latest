import { Card, CardHeader } from "@mui/material";
import React from "react";
import ApexColumnChart from "./ApexColumnChart";

function EducationChartView({educationChartData}) {

  return (
    <Card>
      <CardHeader title="Educational Audience" />
      <ApexColumnChart dataArr={educationChartData.dataArray} categories={educationChartData.labelsArray}/>
    </Card>
  );
}

export default EducationChartView;
