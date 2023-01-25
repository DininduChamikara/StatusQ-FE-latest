import merge from "lodash/merge";
import { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
// @mui
import { Card, CardHeader, Box, TextField } from "@mui/material";
//
import { BaseOptionChart } from "../chart";

// ----------------------------------------------------------------------

// const CHART_DATA = [
//   {
//     year: 2019,
//     total: 200,
//     data: [
//       { name: 'System Earnings', data: [10, 41, 35, 151, 49, 62, 69, 91, 48] },
//       { name: 'Campaign Payments', data: [10, 34, 13, 56, 77, 88, 99, 77, 45] },
//       { name: 'Promoter Earnings', data: [5, 17, 10, 28, 35, 44, 47, 36, 26] },
//     ],
//   },
//   {
//     year: 2020,
//     total: 300,
//     data: [
//       { name: 'System Earnings', data: [148, 91, 69, 62, 49, 51, 35, 41, 10] },
//       { name: 'Campaign Payments', data: [45, 77, 99, 88, 77, 56, 13, 34, 10] },
//       { name: 'Promoter Earnings', data: [26, 27, 40, 48, 25, 54, 17, 26, 36] },
//     ],
//   },
// ];

export default function EcommerceCampaignEarnings({ chartData, chartTitle }) {
  // const [seriesData, setSeriesData] = useState(chartData && chartData[1].year);

  const currentTime = new Date();
  var currentYear = currentTime.getFullYear()

  const [seriesData, setSeriesData] = useState(currentYear);

  const [compairablePercentage, setCompairablePercentage] = useState();

  useEffect(() => {
    if (chartData) {
      let py = chartData[0].total;
      let cy = chartData[1].total;

      let cp = (cy - py)*100/py;
      // console.log((cy - py)*100/py);
      setCompairablePercentage(cp | 0);
    }
  }, [chartData]);

  // console.log(compairablePercentage)

  const handleChangeSeriesData = (event) => {
    setSeriesData(Number(event.target.value));
  };

  const chartOptions = merge(BaseOptionChart(), {
    legend: { position: "top", horizontalAlign: "right" },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
  });

  return (
    <Card>
      <CardHeader
        title={chartTitle && chartTitle}
        subheader={
          chartData &&
          chartData[1].year === seriesData &&
          `(${compairablePercentage}%) than last year`
        }
        action={
          <TextField
            select
            fullWidth
            value={seriesData}
            SelectProps={{ native: true }}
            onChange={handleChangeSeriesData}
            sx={{
              "& fieldset": { border: "0 !important" },
              "& select": {
                pl: 1,
                py: 0.5,
                pr: "24px !important",
                typography: "subtitle2",
              },
              "& .MuiOutlinedInput-root": {
                borderRadius: 0.75,
                bgcolor: "background.neutral",
              },
              "& .MuiNativeSelect-icon": {
                top: 4,
                right: 0,
                width: 20,
                height: 20,
              },
            }}
          >
            {chartData &&
              chartData.map((option) => (
                <option key={option.year} value={option.year}>
                  {option.year}
                </option>
              ))}
          </TextField>
        }
      />

      {chartData &&
        chartData.map((item) => (
          <Box key={item.year} sx={{ mt: 3, mx: 3 }} dir="ltr">
            {item.year === seriesData && (
              <ReactApexChart
                type="area"
                series={item.data}
                options={chartOptions}
                height={364}
              />
            )}
          </Box>
        ))}
    </Card>
  );
}
