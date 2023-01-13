import { Card, CardHeader } from "@mui/material";
import React from "react";
import ApexSimpleDonutChart from "./ApexSimpleDonutChart";

function LanguageChartView({ languageChartData }) {
  return (
    <Card>
      <CardHeader title="Language Audience" />
      <ApexSimpleDonutChart
        chartType={"pie"}
        dataArr={languageChartData.dataArray}
        categories={languageChartData.labelsArray}
      />
    </Card>
  );
}

export default LanguageChartView;
