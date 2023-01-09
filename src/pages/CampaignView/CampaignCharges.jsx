import { CreditScore, MonetizationOn, NetworkPing, Payments, QueryStats } from "@mui/icons-material";
import { Card, CardHeader, Link, Stack, Typography } from "@mui/material";
import React, { useState } from "react";

function CampaignCharges({campaign}) {

  const [costPerView, setCostPerView] = useState(2);
  const [systemFeePercentage, setSystemFeePercentage] = useState(0.1);

  return (
    <Card>
      <CardHeader title="Campaign Charges" />

      <Stack spacing={2} sx={{ p: 3 }}>
        <Stack direction="row">
          <MonetizationOn style={{ marginRight: "10px" }} />

          <Typography variant="body2">
            <Link component="span" variant="subtitle2" color="text.primary">
              Cost per view : &nbsp;
            </Link>
            {/* {email ? email : ""} */}
            Rs. {costPerView}.00
          </Typography>
        </Stack>

        <Stack direction="row">
          <QueryStats style={{ marginRight: "10px" }} />
          <Typography variant="body2">
            <Link component="span" variant="subtitle2" color="text.primary">
              Expected views amount : &nbsp;
            </Link>
            {campaign ? campaign.finalizedExpectedViewsAmount : 0}
          </Typography>
        </Stack>

        <Stack direction="row">
          <Payments style={{ marginRight: "10px" }} />
          <Typography variant="body2">
            <Link component="span" variant="subtitle2" color="text.primary">
              Cost on views : &nbsp;
            </Link>
            {campaign ? campaign.finalizedExpectedViewsAmount*costPerView : 0}
          </Typography>
        </Stack>

        <Stack direction="row">
          <NetworkPing style={{ marginRight: "10px" }} />
          <Typography variant="body2">
            <Link component="span" variant="subtitle2" color="text.primary">
              System Fee (10%) : &nbsp;
            </Link>
            {campaign ? campaign.finalizedExpectedViewsAmount*costPerView*systemFeePercentage : 0}
          </Typography>
        </Stack>

        <Stack direction="row">
          <Payments style={{ marginRight: "10px" }} />
          <Typography variant="body2">
            <Link component="span" variant="subtitle2" color="text.primary">
              Total campaign cost : &nbsp;
            </Link>
            {campaign ? (campaign.finalizedExpectedViewsAmount*costPerView*systemFeePercentage + campaign.finalizedExpectedViewsAmount*costPerView) : 0}
          </Typography>
        </Stack>

        <Stack direction="row">
          <CreditScore style={{ marginRight: "10px" }} />
          <Typography variant="body2">
            <Link component="span" variant="subtitle2" color="text.primary">
              Payment Status : &nbsp;
            </Link>
            PAID
          </Typography>
        </Stack>

      </Stack>
    </Card>
  );
}

export default CampaignCharges;
