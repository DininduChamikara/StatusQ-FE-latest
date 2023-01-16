import React from "react";
import Chart from "react-apexcharts";

function ApexSimpleDonutChart({ chartType, dataArr, categories }) {
  const options = {
    series: dataArr,
    chart: {
      width: 380,
      type: "donut",
    },
    labels: categories,
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
    <Chart
      options={options}
      series={options.series}
      type={chartType}
      width="100%"
    />
  );
}

export default ApexSimpleDonutChart;
