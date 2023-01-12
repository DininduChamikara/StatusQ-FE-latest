import React from "react";
import Chart from "react-apexcharts";

function ApexSimpleDonutChart() {
  const options = {
    series: [45, 55],
    chart: {
      width: 380,
      type: "donut",
    },
    labels: ["Male", "Female"],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  };

  return (
    <Chart options={options} series={options.series} type="donut" width="100%" />
  );
}

export default ApexSimpleDonutChart;
