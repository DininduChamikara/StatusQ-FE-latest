import { Box, Typography } from "@mui/material";
import React from "react";
import PerformanceCard from "./PerformanceCard";

function Performance() {
  return (
    <div id="Performance">
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "15rem",
          height: "30vh",
          marginBottom: "8rem",
        }}
      >
        <PerformanceCard amount={495} text1={"Total"} text2={"Promoters"} />
        <PerformanceCard amount={205} text1={"Total"} text2={"Advertisers"} />
        <PerformanceCard amount={872} text1={"Total"} text2={"Campaigns"} />
      </Box>
    </div>
  );
}

export default Performance;
