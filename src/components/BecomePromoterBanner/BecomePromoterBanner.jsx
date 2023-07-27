import { Poll, WorkHistory } from "@mui/icons-material";
import { Box, Button, Paper, Stack, Typography } from "@mui/material";
import React from "react";
import PromotersImage from "../../images/promoter.jpg";

function BecomePromoterBanner({ setVisibleStepper }) {
  return (
    <Paper
      data-testid="becomePromoterBanner"
      elevation={3}
      sx={{
        p: 3,
        width: "100%",
        display: { xs: "block", lg: "flex" },
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          width: { xs: "100%", lg: "50%" },
        }}
      >
        <img height={300} src={PromotersImage} alt={""} />
      </Box>
      <Box
        sx={{ width: { xs: "100%", lg: "50%" }, alignItems: "center", p: 2 }}
      >
        <Typography
          sx={{
            fontSize: "1.8rem",
            fontWeight: "bold",
            mt: 2,
            color: "primary.darker",
          }}
        >
          Become a promoter
        </Typography>
        <Typography
          sx={{
            fontSize: "1.8rem",
            fontWeight: "bold",
            mb: 2,
            color: "primary.darker",
          }}
        >
          & earn money
        </Typography>
        <Typography sx={{ color: "primary.dark" }}>
          If you want to become a promoter, first you need to complete the
          promoter survey...!
        </Typography>
        <Box sx={{ my: 2 }}>
          <Stack direction="row" spacing={2}>
            <Button
              data-testid="becomePromoterBanner-btn-1"
              sx={{ width: 180 }}
              variant="contained"
              color="primary"
              startIcon={<Poll />}
              onClick={() => {
                setVisibleStepper(true);
              }}
            >
              Take the Survay
            </Button>
            <Button
              data-testid="becomePromoterBanner-btn-2"
              sx={{ width: 180 }}
              variant="contained"
              color="secondary"
              startIcon={<WorkHistory />}
              onClick={() => {
                setVisibleStepper(false);
              }}
            >
              View Jobs
            </Button>
          </Stack>
        </Box>
      </Box>
    </Paper>
  );
}

export default BecomePromoterBanner;
