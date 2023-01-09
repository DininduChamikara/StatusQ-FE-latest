import {
  Campaign
} from "@mui/icons-material";
import {
  Button,
  Card, Link,
  Stack,
  Typography
} from "@mui/material";
import React from "react";

function CampaignViewHeader({campaignId}) {
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems:'center',
      }}
    >
      <Stack spacing={2} sx={{ p: 1, px:3 }}>
        <Stack direction="row">
          <Campaign style={{ marginRight: "10px" }} />

          <Typography variant="body1">
            <Link component="span" variant="subtitle1" color="text.primary">
              Campaign ID : &nbsp;
            </Link>
            {campaignId ? campaignId : ""}
          </Typography>
        </Stack>
      </Stack>
      <Stack spacing={2} sx={{ p: 2 }}>
        <Button variant="contained">Back to campaigns</Button>
      </Stack>
    </Card>
  );
}

export default CampaignViewHeader;
