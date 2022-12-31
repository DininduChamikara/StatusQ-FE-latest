import { AddCircleOutline, Campaign, Poll } from "@mui/icons-material";
import { Box, Button, Paper, Stack, Typography } from "@mui/material";
import React from "react";
import PromotersImage from "../../images/promoter.jpg";

function BecomePromoterBanner() {
  return (
    <Paper
      elevation={3}
      sx={{
        p: 3,
        width: "100%",
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "center",
        mt: 2,
      }}
    >
      <Box sx={{ width: "50%" }}>
        <img width={500} height={300} src={PromotersImage} alt={""} />
      </Box>
      <Box sx={{ width: "50%", alignItems: "center", p: 2 }}>
        <Typography sx={{ fontSize: "1.8rem", fontWeight: "bold", mt: 2, color:'primary.darker' }}>
          Become a promoter
        </Typography>
        <Typography sx={{ fontSize: "1.8rem", fontWeight: "bold", mb: 2, color:'primary.darker' }}>
          & earn money
        </Typography>
        <Typography sx={{color:'primary.dark'}}>
          If you want to become a promoter, first you need to complete the promoter survey...! 
        </Typography>
        <Box sx={{ my: 2 }}>
          <Stack direction="row" spacing={2}>
            <Button
              variant="contained"
              color="primary"
              startIcon={<Poll />}
            >
              Take the Survay
            </Button>
          </Stack>
        </Box>
      </Box>
    </Paper>
  );
}

export default BecomePromoterBanner;
