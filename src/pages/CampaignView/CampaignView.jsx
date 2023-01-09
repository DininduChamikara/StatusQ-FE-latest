import { Grid, Paper, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import CampaignService from "../../api/services/CampaignService";
import CampaignAbout from "./CampaignAbout";
import CampaignCharges from "./CampaignCharges";
import CampaignPostsView from "./CampaignPostsView";
import CampaignPromotersView from "./CampaignPromotersView";
import CampaignViewHeader from "./CampaignViewHeader";

function CampaignView() {
  const [searchParams] = useSearchParams();

  const campaignId = searchParams.get("campaignId");

  const [campaign, setCampaign] = useState();

  useEffect(() => {
    const response = CampaignService.getCampaignById(campaignId);
    response.then((res) => {
      if (res) {
        if (res.data.responseCode === "00") {
            console.log(res.data);
          //   res = res.data.campaigns;
          setCampaign(res.data.campaign);
        }
      }
    });
    // let res = response.data;
  }, [campaignId]);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={12}>
        <Stack spacing={3}>
          <CampaignViewHeader campaignId={campaignId} />
        </Stack>
      </Grid>
      <Grid item xs={12} md={6}>
        <Stack spacing={3}>
          <CampaignAbout campaign={campaign} />
        </Stack>
      </Grid>
      <Grid item xs={12} md={6}>
        <Stack spacing={3}>
          <CampaignCharges campaign={campaign} />
        </Stack>
      </Grid>
      <Grid item xs={12} md={12}>
        <Stack spacing={3}>
          {campaign && (
            <CampaignPostsView
              advertisements={campaign.selectedAdvertisements}
            />
          )}
        </Stack>
      </Grid>
      <Grid item xs={12} md={12}>
        <Stack spacing={3}>
          <CampaignPromotersView campaignId={campaignId} />
        </Stack>
      </Grid>
    </Grid>
  );
}

export default CampaignView;
