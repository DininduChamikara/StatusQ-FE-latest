import { Box } from "@mui/material";
import React from "react";
import { Line } from "react-chartjs-2";

function SimpleLineChart() {
  const data = {
    labels: ["A", "B", "C", "D", "E", "F", "G", "H"],
    datasets: [
      {
        label: "New user registrations",
        data: [10, 15, 18, 20, 25, 27, 30, 31],
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };

  const lineChartOptions = {
    responsive: false,
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          padding: 10,
          usePointStyle: true,
          pointStyle: "circle",
        },
      },
    },
  };

  return (
    <Box>
      <Line height={200} data={data} options={lineChartOptions} />
    </Box>
  );
}

export default SimpleLineChart;
