import { Box, Card } from "@mui/material";
import React from "react";
import AdCampaignsTable from "./AdCampaignsTable";
import UserDetailsTable from "./UserDetailsTable";

function ReportTablesView({ reportTablesArr }) {
  return (
    <Box sx={{ }}>
      {reportTablesArr.map((item, index) => {
        if (item === "CAMPAIGNS") {
          return (
            <Card sx={{mb:2}}>
              <AdCampaignsTable />
            </Card>
          );
        } else if (item === "USERS") {
          return (
            <Card sx={{mb:2}}>
              <UserDetailsTable />
            </Card>
          );
        }
      })}
    </Box>
  );
}

export default ReportTablesView;
