import {
  AccountBox,
  AdminPanelSettings,
  Campaign,
  CreditScore,
  ShoppingCartCheckout
} from "@mui/icons-material";
import { Card, CardHeader, Link, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import PaymentApprovelService from "../../../api/services/PaymentApprovelService";
import PaymentService from "../../../api/services/PaymentService";

const ProfilePackage = () => {
  const { userId, promoterId, accountStatus, userType } = useSelector(
    (state) => state.login
  );

  const [totalEarnings, setTotalEarnings] = useState(0);
  const [totalExpenditure, setTotalExpenditure] = useState(0);

  const getEarningsRequestBody = {
    promoterId: promoterId ? promoterId : "",
    lastWithdrawalDateTime: "2020-01-01",
  }

  useEffect(() => {
    const paymentApprovelsResponse = PaymentApprovelService.getEarningsDataByPromoterId({
      ...getEarningsRequestBody,
      promoterId: promoterId,
    })
    paymentApprovelsResponse.then(res => {
      if(res.data.responseCode === "00"){
        setTotalEarnings(res.data.totalEarnings);
      }
    })  
  }, [promoterId])

  useEffect(() => {
    const totalExpenditureResponse = PaymentService.getTotalExpenditureByUserId(userId);
    totalExpenditureResponse.then(res => {
      if(res.data.responseCode === "00"){
        setTotalExpenditure(res.data.totalExpenditure);
      }
    })
  }, [userId]);

  return (
    <Card sx={{ height: "100%", paddingBottom: 0 }}>
      <CardHeader title="Account Details" />

      <Stack spacing={2} sx={{ p: 3 }}>
        {userType !== "ADMIN_USER" ? (
          <Stack direction="row">
            <Campaign style={{ marginRight: "10px" }} />
            <Typography variant="body2">
              <Link component="span" variant="subtitle2" color="text.primary">
                Promoter ID : &nbsp;
              </Link>
              {promoterId ? promoterId : ""}
            </Typography>
          </Stack>
        ) : (
          <Stack direction="row">
            <Campaign style={{ marginRight: "10px" }} />
            <Typography variant="body2">
              <Link component="span" variant="subtitle2" color="text.primary">
                Admin ID : &nbsp;
              </Link>
              {userId ? userId : ""}
            </Typography>
          </Stack>
        )}

        {userType !== "ADMIN_USER" && (
          <Stack direction="row">
            <AccountBox style={{ marginRight: "10px" }} />
            <Typography variant="body2">
              <Link component="span" variant="subtitle2" color="text.primary">
                Client ID : &nbsp;
              </Link>
              {userId ? userId : ""}
            </Typography>
          </Stack>
        )}

        <Stack direction="row">
          <AdminPanelSettings style={{ marginRight: "10px" }} />
          <Typography variant="body2">
            <Link component="span" variant="subtitle2" color="text.primary">
              Account Status : &nbsp;
            </Link>
            {accountStatus ? accountStatus : ""}
          </Typography>
        </Stack>

        {userType !== "ADMIN_USER" && (
          <Stack spacing={2}>
            <Stack direction="row">
              <ShoppingCartCheckout style={{ marginRight: "10px" }} />
              <Typography variant="body2">
                <Link component="span" variant="subtitle2" color="text.primary">
                  Total expenditure for campaigns : &nbsp;
                </Link>
                Rs. {totalExpenditure}.00
              </Typography>
            </Stack>

            <Stack direction="row">
              <CreditScore style={{ marginRight: "10px" }} />
              <Typography variant="body2">
                <Link component="span" variant="subtitle2" color="text.primary">
                  Total earnings form campaigns : &nbsp;
                </Link>
                Rs. {totalEarnings}.00
              </Typography>
            </Stack>
          </Stack>
        )}

        {userType === "ADMIN_USER" && (
          <Stack direction="row">
            <AccountBox style={{ marginRight: "10px" }} />
            <Typography variant="body2">
              <Link component="span" variant="subtitle2" color="text.primary">
                User Role : &nbsp;
              </Link>
              ADMIN
            </Typography>
          </Stack>
        )}
      </Stack>
    </Card>
  );
};

export default ProfilePackage;
