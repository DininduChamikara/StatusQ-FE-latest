import React from "react";
import Chart from "react-apexcharts";

function ApexColumnChart() {
  const options = {
    series: [
      {
        data: [21, 22, 10, 28, 16, 21, 13, 30],
      },
    ],
    chart: {
      height: 350,
      type: "bar",
      events: {
        click: function (chart, w, e) {
          // console.log(chart, w, e)
        },
      },
    },
    colors: [ "rgba(153, 102, 255)",
    "rgb(255,230,64)",
    "rgba(255,86,86)",
    "rgb(75,231,63)",
    "rgb(11,76,203)",],
    plotOptions: {
      bar: {
        columnWidth: "45%",
        distributed: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    xaxis: {
      categories: [
        ["John", "Doe"],
        ["Joe", "Smith"],
        ["Jake", "Williams"],
        "Amber",
        ["Peter", "Brown"],
        ["Mary", "Evans"],
        ["David", "Wilson"],
        ["Lily", "Roberts"],
      ],
      labels: {
        style: {
          colors: [ "rgba(153, 102, 255)",
          "rgb(255,230,64)",
          "rgba(255,86,86)",
          "rgb(75,231,63)",
          "rgb(11,76,203)",],
          fontSize: "12px",
        },
      },
    },
  };

  return (
    <Chart options={options} series={options.series} type="bar" width="100%" />
  );
}

export default ApexColumnChart;
