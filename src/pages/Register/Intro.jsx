import { Facebook, Instagram, WhatsApp } from "@mui/icons-material";
import { Box, Button, IconButton, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-scroll";
import Vector1 from "../../images/landingPage/Vector1.png";
import Vector2 from "../../images/landingPage/Vector2.png";
import girl from "../../images/landingPage/girl.png";
import glassesimoji from "../../images/landingPage/glassesimoji.png";
import crown from "../../images/landingPage/crown.png";
import thumbup from "../../images/landingPage/thumbup.png";
import { motion } from "framer-motion";
import FloatingDiv from "./FloatingDiv";

function Intro() {
  const transition = { duration: 2, type: "spring" };

  return (
    <Box
      sx={{
        display: "flex",
        height: "77vh",
        marginTop: "6rem",
      }}
    >
      <Box
        sx={{
          display: "flex",
          position: "relative",
          flex: 1,
          flexDirection: "column",
          gap: "2rem",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography sx={{ fontSize: "4rem", fontWeight: "bold" }}>
            StatusQ
          </Typography>
          <Typography
            sx={{ fontSize: "2rem", fontWeight: "bold", color: "primary.main" }}
          >
            Promotional Services Provider
          </Typography>
          <Typography
            sx={{
              fontSize: "16px",
              fontWeight: "100",
              color: "grey.500",
              mb: 3,
            }}
          >
            A web-based promotional services providing system that enables you
            to run social media advertisement <br /> campaigns and earn money by
            participating others promotional campaigns
          </Typography>
          <Typography
            sx={{
              fontSize: "1.5rem",
              fontWeight: "bold",
              color: "primary.main",
            }}
          >
            Our Purpose,
          </Typography>
          <Typography
            sx={{
              fontSize: "16px",
              fontWeight: "100",
              color: "grey.500",
              mb: 4,
            }}
          >
            "Empowering normal social media users with the capability to
            participate in promotional campaigns, <br />
            while providing a better promotional service experience to our
            customers..."
          </Typography>
          <Link spy={true} to="Register" smooth={true}>
            <Button
              sx={{
                flex: 2,
                borderRadius: "34px",
                border: "none",
                fontSize: "16px",
                py: "5px",
                px: "20px",
                backgroundColor: "primary.main",
                color: "white",
                "&:hover": {
                  background: "white",
                  cursor: "pointer",
                  color: "primary.main",
                  border: 1,
                  borderColor: "primary.main",
                },
              }}
            >
              Get Started
            </Button>
          </Link>
          <Box sx={{ marginTop: "3rem", display: "flex", gap: 2 }}>
            <Facebook sx={{width:70, height:70, color:'secondary.main'}} />
            <Instagram sx={{width:70, height:70, color:'orange'}} />
            <WhatsApp sx={{width:70, height:70, color:'primary.main'}} />
          </Box>
        </Box>
      </Box>
      <Box sx={{ position: "relative", flex: 1 }}>
        <Box sx={{ position: "absolute", zIndex: 1, left: "7%", top: "0%" }}>
          <img src={Vector1} alt="" width={500} height={380} />
        </Box>
        <Box sx={{ position: "absolute", zIndex: 1, left: "14%", top: "0%" }}>
          <img src={Vector2} alt="" width={500} height={440} />
        </Box>
        <Box sx={{ position: "absolute", zIndex: 1, left: "5%", top: "-5%" }}>
          <img src={girl} alt="" width={2000} height={500} />
        </Box>
        <Box sx={{ position: "absolute", zIndex: 1, top: "-5%" }}>
          <motion.img
            initial={{ left: "-24%" }}
            whileInView={{ left: "-12%" }}
            transition={transition}
            src={glassesimoji}
            alt=""
            width={160}
          />
        </Box>
        <Box
          sx={{
            position: "absolute",
            zIndex: 1,
            left: "65%",
            top: "5%",
          }}
        >
          <motion.div
            initial={{ top: "-20%", left: "64%" }}
            whileInView={{ left: "68%" }}
            transition={transition}
            className="floating-div"
          >
            <FloatingDiv image={crown} txt1="Social Media" txt2="Promotions" />
          </motion.div>
        </Box>
        <Box
          sx={{
            position: "absolute",
            zIndex: 1,
            left: "5rem",
            top: "22rem",
          }}
        >
          <motion.div
            initial={{ left: "7.5rem", top: "18.4rem" }}
            whileInView={{ left: "2rem" }}
            transition={transition}
            className="floating-div"
          >
            <FloatingDiv image={thumbup} txt1="Earn $$" txt2="Money" />
          </motion.div>
        </Box>
        <Box
          sx={{
            position: "absolute",
            width: "22rem",
            height: "14rem",
            borderRadius: "50%",
            background: "#edd0ff",
            zIndex: -9,
            top: "-18%",
            left: "56%",
            filter: "blur(72px)",
          }}
        ></Box>

        <Box
          sx={{
            position: "absolute",
            width: "22rem",
            height: "14rem",
            borderRadius: "50%",
            background: "#C1F5FF",
            zIndex: -9,
            top: "55%",
            left: "-20%",
            filter: "blur(72px)",
          }}
        ></Box>
      </Box>
    </Box>
  );
}

export default Intro;
