import merge from "lodash/merge";
import ReactApexChart from "react-apexcharts";
// @mui
import { Card, CardHeader } from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
// utils
import { fNumber } from "../../utils/formatNumber";
//
import { BaseOptionChart } from "../chart";
import { useEffect } from "react";
import PromoterService from "../../api/services/PromoterService";
import { useState } from "react";
import UserService from "../../api/services/UserService";

// ----------------------------------------------------------------------

const CHART_HEIGHT = 392;
const LEGEND_HEIGHT = 72;

const ChartWrapperStyle = styled("div")(({ theme }) => ({
  height: CHART_HEIGHT,
  marginTop: theme.spacing(2),
  "& .apexcharts-canvas svg": { height: CHART_HEIGHT },
  "& .apexcharts-canvas svg,.apexcharts-canvas foreignObject": {
    overflow: "visible",
  },
  "& .apexcharts-legend": {
    height: LEGEND_HEIGHT,
    alignContent: "center",
    position: "relative !important",
    borderTop: `solid 1px ${theme.palette.divider}`,
    top: `calc(${CHART_HEIGHT - LEGEND_HEIGHT}px) !important`,
  },
}));

// ----------------------------------------------------------------------


export default function EcommerceUsersCount() {
  const [promotersCount, setPromotersCount] = useState(0);
  const [advertisersCount, setAdvertisersCount] = useState(0);
  const [usersTotalCount, setUsersTotalCount] = useState(0);

  useEffect(() => {
    const response = PromoterService.getAllPromoters();
    response.then((res) => {
      if (res.data.responseCode === "00") {
        setPromotersCount(res.data.promoters.length);
      }
    });
  }, []);

  useEffect(() => {
    const response = UserService.getAllUsers();
    response.then((res) => {
      if (res.data.responseCode === "00") {
        res = res.data.users;
        setUsersTotalCount(res.length);

        let filteredUsers = res.filter((user) => user.accountNumber);
        setAdvertisersCount(filteredUsers.length);
      }
    });
  }, []);

  let CHART_DATA = [
    parseInt((advertisersCount / usersTotalCount) * 100),
    parseInt((promotersCount / usersTotalCount) * 100),
  ];

  const theme = useTheme();

  const chartOptions = merge(BaseOptionChart(), {
    labels: ["Advertisers", "Promoters"],
    legend: { floating: true, horizontalAlign: "center" },
    fill: {
      type: "gradient",
      gradient: {
        colorStops: [
          [
            {
              offset: 0,
              color: theme.palette.primary.light,
            },
            {
              offset: 100,
              color: theme.palette.primary.main,
            },
          ],
          [
            {
              offset: 0,
              color: theme.palette.warning.light,
            },
            {
              offset: 100,
              color: theme.palette.warning.main,
            },
          ],
        ],
      },
    },
    plotOptions: {
      radialBar: {
        hollow: { size: "68%" },
        dataLabels: {
          value: { offsetY: 16 },
          total: {
            formatter: () => fNumber(usersTotalCount),
          },
        },
      },
    },
  });

  return (
    <Card>
      <CardHeader title="System Users" />
      <ChartWrapperStyle dir="ltr">
        {usersTotalCount !== 0 && (
          <ReactApexChart
            type="radialBar"
            series={CHART_DATA}
            options={chartOptions}
            height={310}
          />
        )}
      </ChartWrapperStyle>
    </Card>
  );
}
