import { Card, CardHeader } from "@mui/material";
import React from "react";
import ApexSimpleDonutChart from "./ApexSimpleDonutChart";

function GenderChartView({ genderChartData }) {
  return (
    <Card>
      <CardHeader title="Gender Audience" />
      <ApexSimpleDonutChart
        chartType={"donut"}
        dataArr={genderChartData.dataArray}
        categories={genderChartData.labelsArray}
      />
    </Card>
  );
}

export default GenderChartView;
