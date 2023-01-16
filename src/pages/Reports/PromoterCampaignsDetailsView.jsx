import { Box, Card, CardHeader, Grid, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import PromoterCampaignService from "../../api/services/PromoterCampaignService";
import ImagePreviewUploadSS from "../../components/ImagePreview/ImagePreviewUploadSS";
import CampaignAbout from "../CampaignView/CampaignAbout";
import CampaignPostsView from "../CampaignView/CampaignPostsView";
import AboutJob from "./AboutJob";
import PromoterCampaignViewHeader from "./PromoterCampaignViewHeader";

function PromoterCampaignsDetailsView() {
  const [searchParams] = useSearchParams();
  const jobId = searchParams.get("jobId");

  const [promoterCampaign, setPromoterCampaign] = useState();
  const [campaign, setCampaign] = useState();
  const [uploadedSS, setUploadedSS] = useState();

  useEffect(() => {
    const response = PromoterCampaignService.getJobDetails(jobId);
    response.then((res) => {
      if (res) {
        if (res.data.responseCode === "00") {
          // console.log(res.data);
          //   res = res.data.campaigns;
          setPromoterCampaign(res.data.promoterCampaign);
          setCampaign(res.data.campaign);
          setUploadedSS(res.data.promoterCampaign.screenshots);
        }
      }
    });
    // let res = response.data;
  }, [jobId]);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={12}>
        <Stack spacing={3}>
          <PromoterCampaignViewHeader
            jobId={promoterCampaign ? promoterCampaign._id : ""}
          />
        </Stack>
      </Grid>
      <Grid item xs={12} md={6}>
        <Stack spacing={3}>
          <AboutJob promoterCampaign={promoterCampaign} />
        </Stack>
      </Grid>
      <Grid item xs={12} md={6}>
        <Stack spacing={3}>
          <CampaignAbout campaign={campaign} />
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
          <Card>
            <CardHeader title="Uploaded Screenshots by Promoter" />
            <Box height={10}></Box>
            <ImagePreviewUploadSS imagesArr={uploadedSS} disableAction={true} />
            <Box height={20}></Box>
          </Card>
        </Stack>
      </Grid>
    </Grid>
  );
}

export default PromoterCampaignsDetailsView;
