import { TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

function PayOnEarnings() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "210px",
        pt:3
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
            value={"Rs. 2211.00"}
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
          <Typography sx={{ color: "secondary.dark" }}>Total Campaign Cost</Typography>
        </Box>

        <Box sx={{ width: "60%" }}>
          <TextField
            disabled
            sx={{ pl: 1, width: "96%" }}
            placeholder="Name"
            value={"Rs. 2200.00"}
            size="small"
          ></TextField>
        </Box>
      </Box>

      <Box sx={{ display: "flex", flexDirection: "row", width: "100%", mt: 1, p:2, justifyContent:'center' }}>
        <Typography color="primary.main" sx={{fontSize:'1.2rem', fontWeight:'bold'}}>Your earning balance is sufficient to pay!</Typography>
      </Box>
    </Box>
  );
}

export default PayOnEarnings;
