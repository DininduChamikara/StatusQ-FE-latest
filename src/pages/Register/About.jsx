import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import AboutCard from "./AboutCard";
import { Facebook, Instagram, WhatsApp } from "@mui/icons-material";

function About() {
  const transition = { duration: 1, type: "spring" };
  return (
    <div id="About">
      <Box
        sx={{
          display: "flex",
          height: "90vh",
          marginBottom: "13rem",
          marginTop: { xs: "12rem", lg: "9rem" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            position: "relative",
          }}
        >
          <Typography sx={{ fontSize: "2.5rem", fontWeight: "bold" }}>
            About StatusQ
          </Typography>
          <Typography
            sx={{
              display: { xs: "none", lg: "block" },
              fontSize: "16px",
              fontWeight: "100",
              color: "grey.500",
              mb: 4,
            }}
          >
            StatusQ is a user-friendly website that allows individuals to launch{" "}
            <br />
            and manage their social media advertisement campaigns. Users can{" "}
            <br />
            easily create campaigns for WhatsApp status, Facebook stories, or{" "}
            <br />
            Instagram stories, and reach a wider audience with their products or{" "}
            <br />
            services. Additionally, StatusQ also provides an opportunity for{" "}
            <br />
            users to earn money by participating in other users' advertisement{" "}
            <br />
            campaigns. Users can choose to participate in campaigns that are{" "}
            <br />
            relevant to their interests and earn money for posting these <br />
            advertisements on their social media accounts. The website's <br />
            interface is easy to navigate, and users can track the performance{" "}
            <br />
            of their campaigns in real-time. With StatusQ, individuals can{" "}
            <br />
            easily create and promote their business, while also earning money{" "}
            <br />
            by participating in other advertisement campaigns. <br />
          </Typography>

          <Typography
            sx={{
              display: { xs: "block", lg: "none" },
              fontSize: "16px",
              fontWeight: "100",
              color: "grey.500",
              mb: 4,
            }}
          >
            StatusQ is a user-friendly website that allows individuals to launch
            and manage their social media advertisement campaigns. Users can
            easily create campaigns for WhatsApp status, Facebook stories, or
            Instagram stories, and reach a wider audience with their products or
            services. Additionally, StatusQ also provides an opportunity for
            users to earn money by participating in other users' advertisement
            campaigns. Users can choose to participate in campaigns that are
            relevant to their interests and earn money for posting these
            advertisements on their social media accounts. The website's
            interface is easy to navigate, and users can track the performance
            of their campaigns in real-time. With StatusQ, individuals can
            easily create and promote their business, while also earning money
            by participating in other advertisement campaigns. <br />
          </Typography>

          <Link spy={true} to="" smooth={true}>
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
              Learn More
            </Button>
          </Link>
          <Box
            sx={{
              position: "absolute",
              width: "22rem",
              height: "14rem",
              borderRadius: "50%",
              background: "#edd0ff",
              zIndex: -9,
              top: "80%",
              left: { xs: "5%", lg: "35%" },
              filter: "blur(100px)",
            }}
          ></Box>
        </Box>
        <Box
          sx={{ position: "relative", display: { xs: "none", lg: "block" } }}
        >
          <Box sx={{ position: "absolute", left: "34rem", top: "-5%" }}>
            <motion.div
              initial={{ left: "25rem" }}
              whileInView={{ left: "14rem" }}
              transition={transition}
            >
              <AboutCard
                icon={
                  <WhatsApp
                    sx={{ width: 70, height: 70, color: "primary.main" }}
                  />
                }
                heading={"WhatsApp Promotions"}
                detail={
                  "Allows you to run advertisement campaigns through WhatsApp Status"
                }
                borderColor={"primary.main"}
              />
            </motion.div>
          </Box>

          <Box sx={{ position: "absolute", left: "12rem", top: "15%" }}>
            <motion.div
              initial={{ left: "25rem" }}
              whileInView={{ left: "14rem" }}
              transition={transition}
            >
              <AboutCard
                icon={
                  <Facebook
                    sx={{ width: 70, height: 70, color: "secondary.main" }}
                  />
                }
                heading={"Facebook Promotions"}
                detail={
                  "Allows you to run advertisement campaigns through FB Stories"
                }
                borderColor={"secondary.main"}
              />
            </motion.div>
          </Box>

          <Box sx={{ position: "absolute", left: "30rem", top: "55%" }}>
            <motion.div
              initial={{ left: "25rem" }}
              whileInView={{ left: "14rem" }}
              transition={transition}
            >
              <AboutCard
                icon={
                  <Instagram sx={{ width: 70, height: 70, color: "orange" }} />
                }
                heading={"Instagram Promotions"}
                detail={
                  "Allows you to run advertisement campaigns through Instagram Stories"
                }
                borderColor={"orange"}
              />
            </motion.div>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default About;
