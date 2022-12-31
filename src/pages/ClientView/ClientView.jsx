import { Box } from "@mui/material";
import React from "react";
import CreateCampaignBanner from "../../components/CreateCampaignBanner/CreateCampaignBanner";
import CreateCampaignStepper from "../../components/CreateCampaignStepper/CreateCampaignStepper";

function ClientView() {
  return (
    <Box>
      <CreateCampaignBanner />
      <CreateCampaignStepper />
    </Box>
  );
}

export default ClientView;
