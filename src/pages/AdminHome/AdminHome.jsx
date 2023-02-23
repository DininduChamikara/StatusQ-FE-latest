import { Box, Grid, useTheme } from "@mui/material";
import React, { useEffect } from "react";
import EcommerceUsersCount from "../../components/AdminDashboard/EcommerceUsersCount";
import EcommerceWidgetSummary from "../../components/AdminDashboard/EcommerceWidgetSummary";
import EcommerceCampaignEarnings from "../../components/AdminDashboard/EcommerceCampaignEarnings";
import EcommerceOverview from "../../components/AdminDashboard/EcommerceOverview";
import EcommerceCurrentBalance from "../../components/AdminDashboard/EcommerceCurrentBalance";
import EcommerceBestPromoters from "../../components/AdminDashboard/EcommerceBestPromoters";
import CampaignService from "../../api/services/CampaignService";
import { useState } from "react";
import PaymentService from "../../api/services/PaymentService";

function AdminHome() {
  const theme = useTheme();

  const [chartDataOngoingCampaign, setChartDataOngoingCampaign] = useState();
  const [chartDataSystemProfit, setChartDataSystemProfit] = useState();
  const [chartDataTotalEarnings, setChartDataTotalEarnings] = useState();

  const [chartDataCampaigns, setChartDataCampaigns] = useState();
  const [chartTitleCampaigns, setChartitleCampaigns] = useState();

  useEffect(() => {
    const response = CampaignService.getCampaignsForDashboard();
    response.then((res) => {
      if (res) {
        if (res.data.responseCode === "00") {
          setChartDataOngoingCampaign(res.data.chartData);
        }
      }
    });
  }, []);

  useEffect(() => {
    const response = CampaignService.getSystemEarningsForDashboard();
    response.then((res) => {
      if (res) {
        if (res.data.responseCode === "00") {
          setChartDataSystemProfit(res.data.chartData);
        }
      }
    });
  }, []);

  useEffect(() => {
    const response = PaymentService.getPaymentsForDashboard();
    response.then((res) => {
      if (res) {
        if (res.data.responseCode === "00") {
          setChartDataTotalEarnings(res.data.chartData);
        }
      }
    });
  }, []);

  useEffect(() => {
    const response = CampaignService.getChartData();
    response.then((res) => {
      if (res.data.responseCode === "00") {
        res = res.data.chartData;
        // console.log(res)
        setChartDataCampaigns(res);
      }
    });
  }, []);

  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          {chartDataOngoingCampaign && (
            <EcommerceWidgetSummary
              title={"Ongoing Campaigns for " + chartDataOngoingCampaign.year}
              percent={chartDataOngoingCampaign.percentage}
              total={chartDataOngoingCampaign.total}
              chartColor={theme.palette.primary.main}
              chartData={chartDataOngoingCampaign.data.data}
            />
          )}
        </Grid>

        <Grid item xs={12} md={4}>
          {chartDataTotalEarnings && (
            <EcommerceWidgetSummary
              title="Total Earnings Rs."
              percent={chartDataTotalEarnings.percentage}
              total={chartDataTotalEarnings.totalEarnings}
              chartColor={theme.palette.chart.green[0]}
              chartData={chartDataTotalEarnings.data.data}
            />
          )}
        </Grid>

        <Grid item xs={12} md={4}>
          {chartDataSystemProfit && (
            <EcommerceWidgetSummary
              title="Syatem Profit Rs."
              percent={chartDataSystemProfit.percentage}
              total={chartDataSystemProfit.total}
              chartColor={theme.palette.chart.red[0]}
              chartData={chartDataSystemProfit.data.data}
            />
          )}
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <EcommerceUsersCount />
        </Grid>

        <Grid item xs={12} md={6} lg={8}>
          <EcommerceCampaignEarnings
            chartData={chartDataCampaigns}
            chartTitle={"Campaigns Creations"}
          />
        </Grid>

        {/* <Grid item xs={12} md={6} lg={8}>
          <EcommerceOverview />
        </Grid>

        <Grid item xs={12} md={6} lg={4}>
          <EcommerceCurrentBalance />
        </Grid> */}

        {/* <Grid item xs={12} md={12} lg={12}>
          <EcommerceBestPromoters />
        </Grid> */}
      </Grid>
    </Box>
  );
}

export default AdminHome;
