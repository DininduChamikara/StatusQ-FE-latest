import { Box, Typography, useTheme } from "@mui/material";
import React, { useEffect } from "react";

const WordCountDisplay = ({
  align = "end",
  characterCount,
}) => {
  const theme = useTheme()

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: align,
      }}
    >
      <Box>
        <Typography textAlign={align} variant="body2" sx={{
          [theme.breakpoints.down("sm")]: {
            fontSize: theme.typography.caption
          }

        }}>
            {characterCount}/400
        </Typography>
      </Box>
    </Box>
  );
};

export default WordCountDisplay;
