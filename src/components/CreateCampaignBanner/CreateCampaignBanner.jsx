/* eslint-disable jsx-a11y/alt-text */
import { AddCircleOutline, Campaign } from "@mui/icons-material";
import { Box, Button, Paper, Stack, Typography } from "@mui/material";
import React from "react";
import CampaignImage from "../../images/campaigns.jpg";

function CreateCampaignBanner({ setVisibleStepper }) {
  return (
    <Box data-testid="createCampaignBanner-1">
      <Paper
        elevation={3}
        sx={{
          p: 3,
          width: "100%",
          display: { xs: "block", lg: "flex" },
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <Box sx={{ width: { xs: "100%", lg: "50%" } }}>
          <img height={300} src={CampaignImage} />
        </Box>
        <Box
          sx={{ width: { xs: "100%", lg: "50%" }, alignItems: "center", p: 2 }}
        >
          <Typography
            sx={{
              fontSize: "1.8rem",
              fontWeight: "bold",
              my: 2,
              color: "primary.darker",
            }}
          >
            Promote your Products or Services on Social Media
          </Typography>
          <Typography sx={{ color: "primary.dark" }}>
            Click on Create New Campaigns to launch an advertisement campaign on
            a Social Media Platform for your product or service
          </Typography>
          <Box sx={{ my: 2 }}>
            <Stack direction="row" spacing={2}>
              <Button
                onClick={() => {
                  setVisibleStepper(true);
                }}
                variant="contained"
                color="primary"
                startIcon={<AddCircleOutline />}
              >
                Create New Campaign
              </Button>
              <Button
                onClick={() => {
                  setVisibleStepper(false);
                }}
                variant="contained"
                color="secondary"
                endIcon={<Campaign />}
              >
                Ongoing Campaigns
              </Button>
            </Stack>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
}

export default CreateCampaignBanner;
