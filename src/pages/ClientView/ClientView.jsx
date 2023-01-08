import { Box } from "@mui/material";
import React from "react";
import CreateCampaignBanner from "../../components/CreateCampaignBanner/CreateCampaignBanner";
import CreateCampaignStepper from "../../components/CreateCampaignStepper/CreateCampaignStepper";
import MyCampaignsView from "../../components/MyCampaignsView/MyCampaignsView";

function ClientView() {
  return (
    <Box>
      <CreateCampaignBanner />
      <CreateCampaignStepper />
      <MyCampaignsView/>
    </Box>
  );
}

export default ClientView;
