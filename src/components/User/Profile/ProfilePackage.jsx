import { AccountBox, AdminPanelSettings, Campaign, CreditScore, MailOutline, Payments, RecentActors, ShoppingCartCheckout } from "@mui/icons-material";
import { Card, CardHeader, Link, Stack, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

const ProfilePackage = () => {

  const {
    userId,
    promoterId,
    accountStatus,
  } = useSelector((state) => state.login);

  return (
    <Card sx={{ height: "100%", paddingBottom: 0 }}>
      <CardHeader title="Account Details" />

      <Stack spacing={2} sx={{ p: 3 }}>

        <Stack direction="row">
          <Campaign style={{ marginRight: "10px" }} />
          <Typography variant="body2">
            <Link component="span" variant="subtitle2" color="text.primary">
              Promoter ID : &nbsp;
            </Link>
            {promoterId ? promoterId : ""}
          </Typography>
        </Stack>

        <Stack direction="row">
          <AccountBox style={{ marginRight: "10px" }} />
          <Typography variant="body2">
            <Link component="span" variant="subtitle2" color="text.primary">
              Client ID : &nbsp;
            </Link>
            {userId ? userId : ""}
          </Typography>
        </Stack>

        <Stack direction="row">
          <AdminPanelSettings style={{ marginRight: "10px" }} />
          <Typography variant="body2">
            <Link component="span" variant="subtitle2" color="text.primary">
              Account Status : &nbsp;
            </Link>
            {accountStatus ? accountStatus : ""}
          </Typography>
        </Stack>

        <Stack direction="row">
          <Payments style={{ marginRight: "10px" }} />
          <Typography variant="body2">
            <Link component="span" variant="subtitle2" color="text.primary">
              Balance : &nbsp;
            </Link>
            Rs. 1100.00 (still dummy)
          </Typography>
        </Stack>

        <Stack direction="row">
          <ShoppingCartCheckout style={{ marginRight: "10px" }} />
          <Typography variant="body2">
            <Link component="span" variant="subtitle2" color="text.primary">
              Total expenditure for campaigns : &nbsp;
            </Link>
            Rs. 10000.00 (still dummy)
          </Typography>
        </Stack>

        <Stack direction="row">
          <CreditScore style={{ marginRight: "10px" }} />
          <Typography variant="body2">
            <Link component="span" variant="subtitle2" color="text.primary">
              Total earnings form campaigns : &nbsp;
            </Link>
            Rs. 20000.00 (still dummy)
          </Typography>
        </Stack>

      </Stack>
    </Card>
  );
};

export default ProfilePackage;
