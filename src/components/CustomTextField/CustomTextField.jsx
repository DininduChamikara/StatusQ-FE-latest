import { AutoFixHigh } from "@mui/icons-material";
import { Box, IconButton, TextField, Typography } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function CustomTextField({ title, value, setValue, editOptionVisible, savedCount }) {

    const [editEnable, setEditEnable] = useState(false);

    useEffect(() => {
        setEditEnable(false);
    }, [savedCount])

 

  const handleOnChangeText = (event) => {
    setValue(event.target.value);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        m: 1,
      }}
    >
      <Box sx={{ width: "25%" }}>
        <Typography>{title}</Typography>
      </Box>
      <Box
        sx={{
          width: "75%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <TextField
          size="small"
          fullWidth
          value={value}
          disabled={!editEnable}
          onChange={handleOnChangeText}
        />
        {editOptionVisible && (
          <IconButton
            onClick={() => {
              if (!editEnable) {
                setEditEnable(true);
              }
            }}
          >
            <AutoFixHigh />
          </IconButton>
        )}
      </Box>
    </Box>
  );
}

export default CustomTextField;
