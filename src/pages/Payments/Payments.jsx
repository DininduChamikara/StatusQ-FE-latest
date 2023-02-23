import { Box, Paper, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import PaymentApprovelService from "../../api/services/PaymentApprovelService";
import PaymentReceivedTable from "../../components/DataTable/PaymentReceivedTable";
import TransactionTable from "../../components/DataTable/TransactionsTable";
import LinearProgressBar from "../../components/LinearProgressBar/LinearProgressBar";

function Payments() {
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
    <Box>
      <Paper
        elevation={3}
        sx={{
          p: 3,
          // mt: 2,
        }}
      >
        <Paper elevation={6} sx={{ width: "100%", p: 1, mb: 2 }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box>
              <Typography sx={{ fontWeight: "bold", fontSize: "1.2rem", m: 1 }}>
                Your Earnings
              </Typography>
              <Typography sx={{ m: 1 }}>
                Paid monthly if the total cost at least Rs. 10,000.00
              </Typography>
            </Box>
            <Box>
              <Typography sx={{ fontWeight: "bold", fontSize: "1.5rem", m: 1 }}>
                Rs. {earningsAfterLastWithdrawal}.00
              </Typography>
            </Box>
          </Box>
          <Box sx={{ m: 1 }}>
            <LinearProgressBar
              progressValue={(earningsAfterLastWithdrawal / 10000) * 100}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography sx={{ m: 1, color: "#A9A9A9", fontSize: "0.95rem" }}>
              You've reached {(earningsAfterLastWithdrawal / 10000) * 100}% of
              your payment threshold
            </Typography>
            <Typography sx={{ m: 1, color: "#A9A9A9", fontSize: "0.95rem" }}>
              Payment threshold: Rs. 10,000.00
            </Typography>
          </Box>
        </Paper>
        <Paper elevation={6} sx={{ width: "100%", p: 1, mb: 2 }}>
          <PaymentReceivedTable />
        </Paper>
        <Paper elevation={6} sx={{ width: "100%", p: 1, mb: 2 }}>
          <TransactionTable />
        </Paper>
      </Paper>
    </Box>
  );
}

export default Payments;
