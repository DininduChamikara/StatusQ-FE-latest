import {
  AccessTime,
  Campaign,
  ConnectWithoutContact,
  MilitaryTech,
  QueryStats,
  Visibility,
} from "@mui/icons-material";
import { Card, CardHeader, Link, Stack, Typography } from "@mui/material";
import React from "react";

function AboutJob({ promoterCampaign }) {
  return (
    <Card>
      <CardHeader title="Job Details" />

      <Stack spacing={2} sx={{ p: 3 }}>
        <Stack direction="row">
          <Campaign style={{ marginRight: "10px" }} />

          <Typography variant="body2">
            <Link component="span" variant="subtitle2" color="text.primary">
              Job ID : &nbsp;
            </Link>
            {promoterCampaign ? promoterCampaign._id : ""}
          </Typography>
        </Stack>

        <Stack direction="row">
          <AccessTime style={{ marginRight: "10px" }} />
          <Typography variant="body2">
            <Link component="span" variant="subtitle2" color="text.primary">
              Promoter ID : &nbsp;
            </Link>
            {promoterCampaign ? promoterCampaign.promoterId : ""}
          </Typography>
        </Stack>

        <Stack direction="row">
          <ConnectWithoutContact style={{ marginRight: "10px" }} />
          <Typography variant="body2">
            <Link component="span" variant="subtitle2" color="text.primary">
              Client ID : &nbsp;
            </Link>
            {promoterCampaign ? promoterCampaign.clientId : ""}
          </Typography>
        </Stack>

        <Stack direction="row">
          <QueryStats style={{ marginRight: "10px" }} />
          <Typography variant="body2">
            <Link component="span" variant="subtitle2" color="text.primary">
              Job Status : &nbsp;
            </Link>
            {promoterCampaign ? promoterCampaign.state : ""}
          </Typography>
        </Stack>

        <Stack direction="row">
          <Visibility style={{ marginRight: "10px" }} />
          <Typography variant="body2">
            <Link component="span" variant="subtitle2" color="text.primary">
              Job Accepted Date : &nbsp;
            </Link>
            {promoterCampaign && promoterCampaign.acceptedTime ? promoterCampaign.acceptedTime : "Not accepted yet"}
          </Typography>
        </Stack>

        <Stack direction="row">
          <Visibility style={{ marginRight: "10px" }} />
          <Typography variant="body2">
            <Link component="span" variant="subtitle2" color="text.primary">
              Job Completed Date : &nbsp;
            </Link>
            {promoterCampaign && promoterCampaign.completedTime ? promoterCampaign.completedTime : "Not completed yet"}
          </Typography>
        </Stack>

        <Stack direction="row">
          <MilitaryTech style={{ marginRight: "10px" }} />
          <Typography variant="body2">
            <Link component="span" variant="subtitle2" color="text.primary">
              Payment Status : &nbsp;
            </Link>
            {promoterCampaign && promoterCampaign.paymentApproved ? "Approved" : "Not Approved yet"}
          </Typography>
        </Stack>
      </Stack>
    </Card>
  );
}

export default AboutJob;
