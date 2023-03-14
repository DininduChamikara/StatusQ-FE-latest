import { Box, Card } from "@mui/material";
import React from "react";
import AdCampaignsTable from "./AdCampaignsTable";
import AdminDetailsTable from "./AdminDetailsTable";
import ClientPaymentDetailsTable from "./ClientPaymentDetailsTable";
import PromoterCampaignsDetailsTable from "./PromoterCampaignsDetailsTable";
import PromoterDetailsTable from "./PromoterDetailsTable";
import SystemEarningsDetailsTable from "./SystemEarningsDetailsTable";
import UserDetailsTable from "./UserDetailsTable";

function ReportTablesView({ reportTablesArr }) {

  return (
    <Box sx={{}}>
      {reportTablesArr.map((item, index) => {
        if (item === "CAMPAIGNS") {
          return (
            <Card sx={{ mb: 2 }}>
              <AdCampaignsTable />
            </Card>
          );
        } else if (item === "USERS") {
          return (
            <Card sx={{ mb: 2 }}>
              <UserDetailsTable />
            </Card>
          );
        } else if (item === "ADMINS") {
          return (
            <Card sx={{ mb: 2 }}>
              <AdminDetailsTable />
            </Card>
          );
        } else if (item === "PROMOTERS") {
          return (
            <Card sx={{ mb: 2 }}>
              <PromoterDetailsTable />
            </Card>
          );
        } else if (item === "PROMOTER_CAMPAIGNS") {
          return (
            <Card sx={{ mb: 2 }}>
              <PromoterCampaignsDetailsTable />
            </Card>
          );
        } else if (item === "CLIENT_PAYMENT") {
          return (
            <Card sx={{ mb: 2 }}>
              <ClientPaymentDetailsTable />
            </Card>
          );
        } else if (item === "SYSTEM_EARNINGS") {
          return (
            <Card sx={{ mb: 2 }}>
              <SystemEarningsDetailsTable />
            </Card>
          );
        }
      })}
    </Box>
  );
}

export default ReportTablesView;
