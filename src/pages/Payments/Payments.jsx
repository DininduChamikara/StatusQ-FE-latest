import {
  Box,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";
import TransactionTable from "../../components/DataTable/TransactionsTable";
import LinearProgressBar from "../../components/LinearProgressBar/LinearProgressBar";

function Payments() {
  return (
    <Paper
      sx={{
        p: 3,
        mt: 2,
      }}
    >
      <Paper variant="outlined" sx={{ width: "75vw", p: 1, mb: 2 }}>
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
              Rs. 2211.00
            </Typography>
          </Box>
        </Box>
        <Box sx={{ m: 1 }}>
          <LinearProgressBar progressValue={25} />
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
            You've reached 22.11% of your payment threshold
          </Typography>
          <Typography sx={{ m: 1, color: "#A9A9A9", fontSize: "0.95rem" }}>
            Payment threshold: Rs. 10,000.00
          </Typography>
        </Box>
      </Paper>
      <Paper variant="outlined" sx={{ width: "75vw", p: 1, mb: 2 }}>
        <Typography sx={{ fontWeight: "bold", fontSize: "1.2rem", m: 1 }}>
          Transactions
        </Typography>
        <TransactionTable/>
      </Paper>
    </Paper>
  );
}

export default Payments;
