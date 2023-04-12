import { Box, Typography } from "@mui/material";
import React from "react";

function PerformanceCard({amount, text1, text2}) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: "6.5rem",
          height: "6.5rem",
          backgroundImage:
            "linear-gradient(to bottom, #87e6fb 0%, #ffc05c 100%)",
          borderRadius: "100%",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "1.5rem",
          fontWeight: "bold",
          marginBottom: "2rem",
          color: "black",
        }}
      >
        <Box
          sx={{
            width: "5.5rem",
            height: "5.5rem",
            background: "white",
            borderRadius: "100%",
            position: "absolute",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "1.7rem",
            fontWeight: "bold",
            color: "black",
          }}
        >
          {amount}
        </Box>
      </Box>
      <Typography sx={{ fontSize: "1.2rem", color: "secondary.main" }}>
        {text1}
      </Typography>
      <Typography
        sx={{ fontSize: "1.2rem", fontWeight: "bold", color: "primary.main" }}
      >
        {text2}
      </Typography>
    </Box>
  );
}

export default PerformanceCard;
