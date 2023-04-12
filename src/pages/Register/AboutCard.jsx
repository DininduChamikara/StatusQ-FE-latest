import { Box, Typography } from "@mui/material";
import React from "react";

const AboutCard = ({ icon, heading, detail, borderColor }) => {
  return (
    <Box
      sx={{
        width: "15rem",
        height: "20rem",
        position: "absolute",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        alignItems: "center",
        textAlign: "center",
        background: "rgba(255, 255, 255, 0.26)",
        border: "7px",
        borderStyle: "solid",
        borderColor: `${borderColor}`,
        borderRadius: "20px",
        p: "1.5rem",
      }}
    >
      {icon}
      <Typography sx={{ fontSize: "1.2rem", fontWeight: "bold" }}>
        {heading}
      </Typography>
      <Typography
        sx={{
          fontSize: "16px",
          fontWeight: "100",
          color: "grey.500",
        }}
      >
        {detail}
      </Typography>
    </Box>
  );
};

export default AboutCard;
