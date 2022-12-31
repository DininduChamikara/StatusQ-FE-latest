import React from "react";
import { useState } from "react";
import Chart from "react-apexcharts";

function AppexChart({title}) {
  const [options, setOptions] = useState({
    series: [
      {
        name: "Pending Messages",
        data: [],
      },
      {
        name: "Sent Messages",
        data: [],
      },
      {
        name: "Failed Messages",
        data: [],
      },
      {
        name: "Delivered Messages",
        data: [],
      },
      {
        name: "Viewed Messages",
        data: [],
      },
    ],
    chart: {
      height: 350,
      type: "line",
      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: [5, 7, 5],
      curve: "straight",
      dashArray: [0, 8, 5],
    },
    title: {
      text: `${title}`,
      align: "left",
    },
    legend: {
      tooltipHoverFormatter: function (val, opts) {
        return (
          val +
          " - " +
          opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] +
          ""
        );
      },
    },
    markers: {
      size: 0,
      hover: {
        sizeOffset: 6,
      },
    },
    xaxis: {
      categories: [],
    },
    tooltip: {
      y: [
        {
          title: {
            formatter: function (val) {
              // return val + " (mins)";
              return val;
            },
          },
        },
        {
          title: {
            formatter: function (val) {
              // return val + " per session";
              return val;
            },
          },
        },
        {
          title: {
            formatter: function (val) {
              return val;
            },
          },
        },
      ],
    },
    grid: {
      borderColor: "#f1f1f1",
    },
  });

  return (
    <Chart options={options} series={options.series} type="line" width="100%" />
  );
}

export default AppexChart;
