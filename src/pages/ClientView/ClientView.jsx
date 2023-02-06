import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import CreateCampaignBanner from "../../components/CreateCampaignBanner/CreateCampaignBanner";
import CreateCampaignStepper from "../../components/CreateCampaignStepper/CreateCampaignStepper";
import MyCampaignsView from "../../components/MyCampaignsView/MyCampaignsView";

function ClientView() {
  const [visibleStepper, setVisibleStepper] = useState(false);
  const [ongoingStep, setOngoingStep] = useState(0);

  const [searchParams] = useSearchParams();

  const backFrom = searchParams.get("back_from");

  useEffect(() => {
    if(backFrom === "explore"){
      setVisibleStepper(true);
      setOngoingStep(2);
    }
  },[backFrom])

  return (
    <Box>
      <CreateCampaignBanner setVisibleStepper={setVisibleStepper} />
      {visibleStepper ? <CreateCampaignStepper ongoingStep={ongoingStep} setOngoingStep={setOngoingStep} /> : <MyCampaignsView />}
    </Box>
  );
}

export default ClientView;
