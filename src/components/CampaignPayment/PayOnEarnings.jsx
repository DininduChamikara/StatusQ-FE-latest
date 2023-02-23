import { TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import PaymentApprovelService from "../../api/services/PaymentApprovelService";

function PayOnEarnings({totalCampaignCost}) {
  const { promoterId } = useSelector((state) => state.login);
  const LAST_WITHDRAWAL_DATE = "2022-02-22T04:34:30.000Z";

  const [earningsAfterLastWithdrawal, setEarningsAfterLastWithdrawal] =
    useState(0);

  const getEarningsRequestBody = {
    promoterId: promoterId,
    lastWithdrawalDateTime: LAST_WITHDRAWAL_DATE,
  };

  useEffect(() => {
    const promoterEarningsData =
      PaymentApprovelService.getEarningsDataByPromoterId({
        ...getEarningsRequestBody,
        promoterId: promoterId,
        lastWithdrawalDateTime: LAST_WITHDRAWAL_DATE,
      });

    promoterEarningsData.then((res) => {
      if (res.data.responseCode === "00") {
        setEarningsAfterLastWithdrawal(res.data.earningsAfterLastWitdrawal);
      }
    });
  }, [promoterId]);

  return (
    <Box
      sx={{
        width: "100%",
        height: "210px",
        pt: 3,
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "row", width: "100%", pt: 1 }}>
        <Box
          sx={{
            width: "40%",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          <Typography sx={{ color: "secondary.dark" }}>
            Your current earning balance
          </Typography>
        </Box>

        <Box sx={{ width: "60%" }}>
          <TextField
            disabled
            sx={{ pl: 1, width: "96%" }}
            placeholder="Name"
            value={`Rs. ${earningsAfterLastWithdrawal}.00`}
            size="small"
          ></TextField>
        </Box>
      </Box>

      <Box sx={{ display: "flex", flexDirection: "row", width: "100%", mt: 1 }}>
        <Box
          sx={{
            width: "40%",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          <Typography sx={{ color: "secondary.dark" }}>
            Total Campaign Cost
          </Typography>
        </Box>

        <Box sx={{ width: "60%" }}>
          <TextField
            disabled
            sx={{ pl: 1, width: "96%" }}
            placeholder="Name"
            value={`Rs. ${totalCampaignCost}.00`}
            size="small"
          ></TextField>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          mt: 1,
          p: 2,
          justifyContent: "center",
        }}
      >
        <Typography
          color={earningsAfterLastWithdrawal > totalCampaignCost ? "primary.main" : "error.main"}
          sx={{ fontSize: "1.2rem", fontWeight: "bold" }}
        >
          {earningsAfterLastWithdrawal > totalCampaignCost ? "Your earning balance is sufficient to pay!" : "Your earning balance is not sufficient to pay!"}
          
        </Typography>
      </Box>
    </Box>
  );
}

export default PayOnEarnings;
