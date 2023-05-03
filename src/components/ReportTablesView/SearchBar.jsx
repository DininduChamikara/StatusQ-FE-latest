import { ExpandMore } from "@mui/icons-material";
import { Box, TextField } from "@mui/material";
import { InputAdornment } from "@material-ui/core";
import React from "react";

function SearchBar({setSearchStr, placeholder}) {
  const handleOnChangeSearchStr = (event) => {
    setSearchStr(event.target.value)
  };

  return (
    <Box sx={{mr:2}}>
      <TextField
        sx={{ mx:1 }}
        size="small"
        id="standard-basic"
        label={placeholder}
        variant="outlined"
        inputProps={{
          style: {
            height: "25px",
          },
          endAdornment: (
            <InputAdornment position="end">
              <ExpandMore />
            </InputAdornment>
          ),
        }}
        onChange={handleOnChangeSearchStr}
        fullWidth
      />
    </Box>
  );
}

export default SearchBar;
