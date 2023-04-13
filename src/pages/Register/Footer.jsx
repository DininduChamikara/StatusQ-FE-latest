import { Box, Typography } from "@mui/material";
import React from "react";
import Wave from "../../images/landingPage/wave.png";
import { Facebook, Instagram, Subscriptions, Twitter, WhatsApp, YouTube } from "@mui/icons-material";

function Footer() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        margin: "-3.5rem",
        position: "relative",
        marginTop: "-7rem",
      }}
    >
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <Box
        sx={{
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          width: "100%",
          marginTop: "8rem",
          gap: "2rem",
          color: "white",
        }}
      >
        <Typography sx={{ fontSize: "1.2rem", fontWeight: "bold" }}>
          STATUSQ.COM
        </Typography>
        <Typography sx={{ fontSize: "1.2rem", fontWeight: "bold" }}>
          Get Social. Follow Us On:
        </Typography>
        <Box
          sx={{
            display: "flex",
            gap: "2rem",
          }}
        >
          <Facebook sx={{ width: 70, height: 70, color: "white" }} />
          <Instagram sx={{ width: 70, height: 70, color: "white" }} />
          <WhatsApp sx={{ width: 70, height: 70, color: "white" }} />
          <Subscriptions sx={{ width: 70, height: 70, color: "white" }} />
          <Twitter sx={{ width: 70, height: 70, color: "white" }} />
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;
