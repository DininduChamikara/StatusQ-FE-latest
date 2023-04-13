import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";

function Contact() {
  return (
    <div id="Contact">
      <Box
        sx={{
          py: "3rem",
          display: { xs: "block", lg: "flex" },
          height: "80vh",
          marginTop: "4rem",
          marginBottom: { xs: "8rem", lg: "0rem" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            position: "relative",
          }}
        >
          <Typography sx={{ fontSize: "2.5rem", color: "secondary.main" }}>
            Get in touch
          </Typography>
          <Typography
            sx={{
              fontSize: "2.5rem",
              fontWeight: "bold",
              color: "primary.main",
            }}
          >
            Contact Us
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            position: "relative",
            flex: 1,
            px: { xs: "0rem", lg: "15rem" },
          }}
        >
          <Box
            sx={{
              position: "absolute",
              width: "22rem",
              height: "14rem",
              borderRadius: "50%",
              background: "#C1F5FF",
              zIndex: -9,
              top: "40%",
              left: { xs: "5%", lg: "30%" },
              filter: "blur(72px)",
            }}
          ></Box>
          <Box sx={{ p: "1rem" }}>
            <TextField
              fullWidth
              id="outlined-basic"
              label="Name"
              variant="outlined"
            />
          </Box>
          <Box sx={{ p: "1rem" }}>
            <TextField
              fullWidth
              id="outlined-basic"
              label="Email"
              variant="outlined"
            />
          </Box>
          <Box sx={{ p: "1rem" }}>
            <TextField
              id="outlined-multiline-static"
              label="Message"
              multiline
              rows={4}
              // defaultValue="Message"
              fullWidth
            />
          </Box>
          <Box
            sx={{
              p: "1rem",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              px: { xs: 5, lg: 30 },
            }}
          >
            <Button
              sx={{
                width: "100px",
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
              Send
            </Button>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default Contact;
