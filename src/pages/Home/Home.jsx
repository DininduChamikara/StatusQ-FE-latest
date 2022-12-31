import { Box, Paper, Typography } from "@mui/material";
import React from "react";
import Reviews from "../../components/Reviews/Reviews";
import ThemeImage from "../../images/statusq-main-image.png";

function Home() {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          flexDirection: "row",
          justifyContent:'space-between',
          gap: 1,
          mt: 0,
        }}
      >
        <Paper sx={{ width: "65%" }} elevation={3}>
          <Typography>Image Slider</Typography>
        </Paper>
        <Paper sx={{ width: "35%", height: "25vw", p: 2 }} elevation={3}>
          <Box
            sx={{
              backgroundColor: "#E59393",
              borderRadius: "50%",
              width: "100%",
              height: "100%",
            }}
          >
            <img src={ThemeImage} width={"100%"} alt="ThemeImage" />
          </Box>
        </Paper>
      </Box>
      <Box sx={{ width: "100%", my:1 }}>
        <Reviews/>
      </Box>
    </Box>
  );
}

export default Home;
