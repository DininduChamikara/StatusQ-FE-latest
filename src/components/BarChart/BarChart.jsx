import { Box } from "@mui/material";
import React from "react";
import { Bar } from "react-chartjs-2";

// Do not remove this => import Chart from 'chart.js/auto'; 
// it will gives error "category" is not a registered scale
// eslint-disable-next-line no-unused-vars
import Chart from 'chart.js/auto';
// import Chart from 'chart.js/auto';

function BarChart({barChartData}) {

  const data = {
    // labels: ["O/L", "A/L", "Undergraduates", "Postgraduates"],
    labels: barChartData.labelsArray,
    datasets: [
      {
        label: "Audience Count",
        data: barChartData.dataArray,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 205, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(201, 203, 207, 0.2)",
        ],
        borderColor: [
          "rgb(255, 99, 132)",
          "rgb(255, 159, 64)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
          "rgb(54, 162, 235)",
          "rgb(153, 102, 255)",
          "rgb(201, 203, 207)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    scales: {
      xAxes: [
        {
          stacked: true,
          barPercentage: 0.2,
        },
      ],
      yAxes: [
        {
          stacked: true,
          barPercentage: 0.2,
        },
      ],
    },
  };

  return (
    <Box data-testid="barChart">
      <Bar data={data} options={chartOptions} />
    </Box>
  );
}

export default BarChart;
