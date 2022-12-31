import { Box } from "@mui/material";
import React from "react";
import { Doughnut} from "react-chartjs-2";
import 'chart.js/auto';


function DoughnutChart() {

  const data = {
    labels: ["Promoters", "Non-Promoters"],
    datasets: [
      {
        label: "# of Votes",
        data: [150, 50],
        backgroundColor: [
          "rgba(153, 102, 255)",
          "rgba(255, 159, 64)",
        ],
        borderColor: [
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const doughnutChartOptions = {
    responsive: false,
    plugins: {
      legend: {
        position: "right",
        labels: {
          padding: 15,
          usePointStyle: true,
          pointStyle: "circle",
        },
      },
    },
  };

  return (
    <Box>
      <Doughnut height={250} data={data} options={doughnutChartOptions} />
    </Box>
  );
}

export default DoughnutChart;
