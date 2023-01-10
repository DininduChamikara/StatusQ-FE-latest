import { Box, Card, CardHeader, Grid } from "@mui/material";
import React from "react";
import EcommerceCampaignEarnings from "../../components/AdminDashboard/EcommerceCampaignEarnings";
import ReportTablesView from "../../components/ReportTablesView/ReportTablesView";

function Reports() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={4}>
        <Card>
          <CardHeader title="Select Reports" />
          <Box>Hello</Box>
        </Card>
      </Grid>

      <Grid item xs={12} md={6} lg={8}>
        <EcommerceCampaignEarnings />
      </Grid>

      <Grid item xs={12} md={12}>
        {/* <Card> */}
          {/* <CardHeader title="Reports" /> */}
          <ReportTablesView reportTablesArr={["CAMPAIGNS", "USERS"]} />
        {/* </Card> */}
      </Grid>
    </Grid>
  );
}

export default Reports;
