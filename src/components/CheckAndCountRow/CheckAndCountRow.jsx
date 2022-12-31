import {
  Box,
  Checkbox,
  Divider,
  FormControlLabel,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { useState } from "react";

function CheckAndCountRow({categoryLabal, categoryText, amount, setAmount, categoryName}) {
  const [checked, setChecked] = useState(amount.checked);

  const handleOnChangeCheckbox = (event) => {
    setChecked(event.target.checked);
    console.log(event.target.checked);
    if(event.target.checked === false){
      setAmount({
        categoryName:categoryName,
        checked:false,
        count: 0,
      })
    }
  };

  const handleOnChangeAmount = (event) => {
    // setAmount(event.target.value)
    if(event.target.value >= 0){
      setAmount({
        categoryName:categoryName,
        checked:true,
        count: event.target.value,
      })
    }
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        width: "100%",
        mt: 1,
        alignItems: "center",
        // height:'60px'
      }}
    >
      <Box
        sx={{
          width: "40%",
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          px: 1,
        }}
      >
        <FormControlLabel
          control={
            <Checkbox checked={amount.checked} onChange={handleOnChangeCheckbox} />
          }
          label={categoryLabal}
          labelPlacement="start"
        />
      </Box>
      {checked && (
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Divider orientation="vertical" flexItem />
          <Typography sx={{ p: 1, width: "60%", color: "secondary.dark" }}>
            Enter the number of views you can generate from this{" "}
            {categoryText}{" "}
          </Typography>

          <Box sx={{ width: "10%" }}>
            <TextField
              sx={{ pl: 1, width: "100px" }}
              inputProps={{ min: 0 }}
              type="number"
              size="small"
              value={amount.count}
              onChange={handleOnChangeAmount}
            />
          </Box>
        </Box>
      )}
    </Box>
  );
}

export default CheckAndCountRow;
