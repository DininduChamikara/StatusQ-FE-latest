import { Card, CardHeader } from "@mui/material";
import React from "react";
import ApexColumnChart from "./ApexColumnChart";

function EducationChartView() {
  return (
    <Card>
      <CardHeader title="Educational Audience" />
      <ApexColumnChart/>
    </Card>
  );
}

export default EducationChartView;
