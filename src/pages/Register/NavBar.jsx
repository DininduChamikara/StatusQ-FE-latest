import { Box, Button, List, ListItem, Stack, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-scroll";

function NavBar() {
  return (
    <Box
      sx={{ height: "10vh", display: "flex", justifyContent: "space-between" }}
    >
      <Box sx={{ flex: 1, alignItems: "center", display: "flex", gap: "2rem" }}>
        <Typography
          sx={{ fontSize: 22, fontWeight: "bold", color: "secondary.darker" }}
        >
          Hi, Everyone!
        </Typography>
      </Box>
      <Box
        sx={{
          display: { xs: "none", lg: "flex" },
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          fontWeight: 400,
        }}
      >
        <Box flex={10}>
          <List
            component={Stack}
            direction="row"
            sx={{
              display: "flex",
              gap: "2rem",
              marginRight: "4rem",
              cursor: "pointer",
              fontSize: 18,
            }}
          >
            <Link
              spy={true}
              to="Navbar"
              smooth={true}
              activeClass="activeClass"
            >
              <ListItem
                sx={{
                  color: "primary.main",
                  "&:hover": {
                    color: "secondary.main",
                  },
                }}
              >
                Home
              </ListItem>
            </Link>

            <Link spy={true} to="About" smooth={true} activeClass="activeClass">
              <ListItem
                sx={{
                  color: "primary.main",
                  "&:hover": {
                    color: "secondary.main",
                  },
                }}
              >
                About
              </ListItem>
            </Link>

            <Link
              spy={true}
              to="Performance"
              smooth={true}
              activeClass="activeClass"
            >
              <ListItem
                sx={{
                  color: "primary.main",
                  "&:hover": {
                    color: "secondary.main",
                  },
                }}
              >
                Performance
              </ListItem>
            </Link>

            <Link
              spy={true}
              to="Register"
              smooth={true}
              activeClass="activeClass"
            >
              <ListItem
                sx={{
                  color: "primary.main",
                  "&:hover": {
                    color: "secondary.main",
                  },
                }}
              >
                Register Now
              </ListItem>
            </Link>
          </List>
        </Box>
        <Link spy={true} to="Contact" smooth={true}>
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
            Contact
          </Button>
        </Link>
      </Box>
    </Box>
  );
}

export default NavBar;
