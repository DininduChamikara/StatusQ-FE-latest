import { Box, Grid } from "@mui/material";
import React from "react";
import Reviews from "../../components/Reviews/Reviews";
import ThemeImage from "../../images/statusq-main-image.png";
import AppFeatured from "./AppFeatured";

function Home() {
  return (
    <Box>
      <Box
        sx={{
          display: { xs: "block", lg: "flex" },
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-between",
          gap: 1,
          mt: 0,
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} md={8}>
            <AppFeatured />
          </Grid>

          <Grid item xs={12} md={4}>
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
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ width: "100%", my: 1 }}>
        <Reviews />
      </Box>
    </Box>
  );
}

export default Home;
