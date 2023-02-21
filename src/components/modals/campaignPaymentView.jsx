import { Close } from "@mui/icons-material";
import {
  Box,
  Card,
  Divider,
  IconButton,
  Modal,
  Typography,
} from "@mui/material";
import React from "react";

const SYSTEM_FEE_PERCENTAGE = 0.1;

function CampaignPaymentView({
  campaignPaymentViewOpened,
  setCampaignPaymentViewOpened,
  paymentViewData,
}) {
  return (
    <Modal open={campaignPaymentViewOpened}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          height: "100vh",
          alignItems: "center",
        }}
      >
        <Card sx={{ width: { xs: "95vW", lg: "30vw" }, py: 1, px: 2 }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography
              color={"primary"}
              sx={{ fontSize: 18, fontWeight: "bold" }}
            >
              Campaign Payment View
            </Typography>
            <IconButton
              onClick={() => {
                setCampaignPaymentViewOpened(false);
              }}
            >
              <Close />
            </IconButton>
          </Box>
          <Divider />
          <Box sx={{ my: 1 }}>
            <Box
              sx={{
                my: 0.5,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Box width={"40%"}>
                <Typography color={"secondary"} pl={1} pt={1}>
                  CampaignID
                </Typography>
              </Box>
              <Box width={"60%"}>
                <Typography pl={1} pt={1}>
                  {paymentViewData ? paymentViewData.campaignId : ""}
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                my: 0.5,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Box width={"40%"}>
                <Typography color={"secondary"} pl={1} pt={1}>
                  DateTime
                </Typography>
              </Box>
              <Box width={"60%"}>
                <Typography pl={1} pt={1}>
                  {paymentViewData ? paymentViewData.dateTime : ""}
                </Typography>
              </Box>
            </Box>

            <Box
              sx={{
                my: 0.5,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Box width={"40%"}>
                <Typography color={"secondary"} pl={1} pt={1}>
                  Total Amount
                </Typography>
              </Box>
              <Box width={"60%"}>
                <Typography pl={1} pt={1}>
                  Rs. {paymentViewData ? paymentViewData.amount : ""} /-
                </Typography>
              </Box>
            </Box>

            <Box
              sx={{
                my: 0.5,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Box width={"40%"}>
                <Typography color={"secondary"} pl={1} pt={1}>
                  Cost of views
                </Typography>
              </Box>
              <Box width={"60%"}>
                <Typography pl={1} pt={1}>
                  Rs.{" "}
                  {paymentViewData
                    ? paymentViewData.amount * (1 / (1 + SYSTEM_FEE_PERCENTAGE))
                    : ""}{" "}
                  /-
                </Typography>
              </Box>
            </Box>

            <Box
              sx={{
                my: 0.5,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Box width={"40%"}>
                <Typography color={"secondary"} pl={1} pt={1}>
                  System Fee
                </Typography>
              </Box>
              <Box width={"60%"}>
                <Typography pl={1} pt={1}>
                  Rs. {paymentViewData ? paymentViewData.amount*(SYSTEM_FEE_PERCENTAGE/(1+SYSTEM_FEE_PERCENTAGE)) : ""} /-
                </Typography>
              </Box>
            </Box>
          </Box>
        </Card>
      </Box>
    </Modal>
  );
}

export default CampaignPaymentView;
