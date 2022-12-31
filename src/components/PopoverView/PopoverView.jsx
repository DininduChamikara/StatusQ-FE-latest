import { KeyboardArrowDown } from "@mui/icons-material";
import { Box, List } from "@mui/material";
import Popover from "@mui/material/Popover";
import React from "react";
import ProfilePopListItems from "../../lib/ProfilePopListItems";
import ProfileAvatar from "../ProfileAvatar/ProfileAvatar";

function PopoverView({ name }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <Box sx={{pl:2}}>
      <Box
        sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}
        aria-describedby={id}
        variant="contained"
        onClick={handleClick}
      >
        <ProfileAvatar />

        {/* <Box sx={{ m:0.5 }}>
          <KeyboardArrowDown />
        </Box> */}
      </Box>

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        sx={{
          p:0,
          m:0,
          mt: 1,
          ml: -6,
        }}
      >
        <Box sx={{ p: 0 }}>
          <List component="nav">
            <ProfilePopListItems />
          </List>
        </Box>
      </Popover>
    </Box>
  );
}

export default PopoverView;
