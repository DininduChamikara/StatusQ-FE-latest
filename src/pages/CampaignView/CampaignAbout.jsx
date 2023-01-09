import { AccessTime, Campaign, ConnectWithoutContact, MilitaryTech, QueryStats, Visibility } from "@mui/icons-material";
import { Card, CardHeader, Link, Stack, Typography } from "@mui/material";
import React from "react";

function CampaignAbout({campaign}) {
  return (
    <Card>
      <CardHeader title="Campaign Details" />

      <Stack spacing={2} sx={{ p: 3 }}>
        <Stack direction="row">
          <Campaign style={{ marginRight: "10px" }} />

          <Typography variant="body2">
            <Link component="span" variant="subtitle2" color="text.primary">
              Campaign ID : &nbsp;
            </Link>
            {campaign ? campaign._id : ""}
          </Typography>
        </Stack>

        <Stack direction="row">
          <AccessTime style={{ marginRight: "10px" }} />
          <Typography variant="body2">
            <Link component="span" variant="subtitle2" color="text.primary">
              Created Time : &nbsp;
            </Link>
            {campaign ? campaign.createdTime : ""}
          </Typography>
        </Stack>

        <Stack direction="row">
          <ConnectWithoutContact style={{ marginRight: "10px" }} />
          <Typography variant="body2">
            <Link component="span" variant="subtitle2" color="text.primary">
              Platform : &nbsp;
            </Link>
            {campaign ? campaign.platform : ""}
          </Typography>
        </Stack>

        <Stack direction="row">
          <QueryStats style={{ marginRight: "10px" }} />
          <Typography variant="body2">
            <Link component="span" variant="subtitle2" color="text.primary">
              Finalized expected views : &nbsp;
            </Link>
            {campaign ? campaign.finalizedExpectedViewsAmount : ""}
          </Typography>
        </Stack>

        <Stack direction="row">
          <Visibility style={{ marginRight: "10px" }} />
          <Typography variant="body2">
            <Link component="span" variant="subtitle2" color="text.primary">
              Views from each : &nbsp;
            </Link>
            {campaign ? campaign.viewsFromEach : ""}
          </Typography>
        </Stack>

        <Stack direction="row">
          <MilitaryTech style={{ marginRight: "10px" }} />
          <Typography variant="body2">
            <Link component="span" variant="subtitle2" color="text.primary">
              State : &nbsp;
            </Link>
            {campaign ? campaign.state : ""}
          </Typography>
        </Stack>

      </Stack>
    </Card>
  );
}

export default CampaignAbout;
