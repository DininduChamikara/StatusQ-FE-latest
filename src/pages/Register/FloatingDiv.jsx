import { Box, Typography } from "@mui/material";
import React from "react";

const FloatingDiv = ({ image, txt1, txt2 }) => {
  return (
    <Box
      sx={{
        justifyContent: "space-around",
        display: "flex",
        background: "white",
        borderRadius: "17px",
        alignItems: "center",
        padding: "28px",
        height: "5rem",
        gap:2
      }}
    >
      <img src={image} alt="" width={50} />
      <Typography>
        {txt1}
        <br />
        {txt2}
      </Typography>
    </Box>
  );
};

export default FloatingDiv;
