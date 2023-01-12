import { Close } from "@mui/icons-material";
import { IconButton, Tooltip, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

// const DraggableCard = (props) => {
const DraggableCard = ({ task }) => {
  // const theme = useTheme()

  // console.log("draggable card props ", props);

  return (
    <Tooltip title="Drag & Drop" followCursor>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          p: 1,
          borderRadius: 1,
          bgcolor: "rgba(0,171,85,0.08)",
          my: 0.5,
          color: "primary.main",
          userSelect: "none",
        }}
      >
        <Box sx={{}}>
          <Typography sx={{ fontWeight: "bold" }}>
            {task.title}
          </Typography>
        </Box>
      </Box>
    </Tooltip>
  );
};

export default DraggableCard;
