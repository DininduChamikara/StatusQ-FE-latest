import { Box, Grid, useTheme } from "@mui/material";
import React from "react";
import EcommerceUsersCount from "../../components/AdminDashboard/EcommerceUsersCount";
import EcommerceWidgetSummary from "../../components/AdminDashboard/EcommerceWidgetSummary";
import EcommerceCampaignEarnings from "../../components/AdminDashboard/EcommerceCampaignEarnings";
import EcommerceOverview from "../../components/AdminDashboard/EcommerceOverview";
import EcommerceCurrentBalance from "../../components/AdminDashboard/EcommerceCurrentBalance";
import EcommerceBestPromoters from "../../components/AdminDashboard/EcommerceBestPromoters";

function AdminHome() {
  const theme = useTheme();
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <EcommerceWidgetSummary
            title="Ongoing Campaigns"
            percent={2.6}
            total={765}
            chartColor={theme.palette.primary.main}
            chartData={[22, 8, 35, 50, 82, 84, 77, 12, 87, 43]}
          />
        </Grid>

        <Grid item xs={12} md={4}>
          <EcommerceWidgetSummary
            title="Total Balance"
            percent={-0.1}
            total={18765}
            chartColor={theme.palette.chart.green[0]}
            chartData={[56, 47, 40, 62, 73, 30, 23, 54, 67, 68]}
          />
        </Grid>

        <Grid item xs={12} md={4}>
          <EcommerceWidgetSummary
            title="Sales Profit"
            percent={0.6}
            total={4876}
            chartColor={theme.palette.chart.red[0]}
            chartData={[40, 70, 75, 70, 50, 28, 7, 64, 38, 27]}
          />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <EcommerceUsersCount />
        </Grid>

        <Grid item xs={12} md={6} lg={8}>
          <EcommerceCampaignEarnings />
        </Grid>

        <Grid item xs={12} md={6} lg={8}>
          <EcommerceOverview />
        </Grid>

        <Grid item xs={12} md={6} lg={4}>
          <EcommerceCurrentBalance />
        </Grid>

        <Grid item xs={12} md={12} lg={12}>
          <EcommerceBestPromoters />
        </Grid>

      </Grid>
    </Box>
  );
}

export default AdminHome;
