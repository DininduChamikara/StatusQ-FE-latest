import { Box, Typography } from "@mui/material";
import React from "react";
import Wave from "../../images/landingPage/wave.png";
import {
  Facebook,
  Instagram,
  Subscriptions,
  Twitter,
  WhatsApp,
  YouTube,
} from "@mui/icons-material";

function Footer() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        margin: {xs:'-1rem', lg:'-3.5rem'},
        position: "relative",
        marginTop: { xs: "-3rem", lg: "-7rem" },
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
          marginTop: {xs:'4rem', lg:'8rem'},
          gap: {xs:'1rem', lg:'2rem'},
          color: "white",
        }}
      >
        <Typography
          sx={{
            fontSize: "1.2rem",
            fontWeight: "bold",
            display: { xs: "none", lg: "block" },
          }}
        >
          STATUSQ.COM
        </Typography>
        <Typography sx={{ fontSize: "1.2rem", fontWeight: "bold" }}>
          Get Social. Follow Us On:
        </Typography>
        <Box
          sx={{
            display: "flex",
            gap: { xs: "1rem", lg: "2rem" },
          }}
        >
          <Facebook
            sx={{
              width: { xs: 35, lg: 70 },
              height: { xs: 35, lg: 70 },
              color: "white",
            }}
          />
          <Instagram
            sx={{
              width: { xs: 35, lg: 70 },
              height: { xs: 35, lg: 70 },
              color: "white",
            }}
          />
          <WhatsApp
            sx={{
              width: { xs: 35, lg: 70 },
              height: { xs: 35, lg: 70 },
              color: "white",
            }}
          />
          <Subscriptions
            sx={{
              width: { xs: 35, lg: 70 },
              height: { xs: 35, lg: 70 },
              color: "white",
            }}
          />
          <Twitter
            sx={{
              width: { xs: 35, lg: 70 },
              height: { xs: 35, lg: 70 },
              color: "white",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;
