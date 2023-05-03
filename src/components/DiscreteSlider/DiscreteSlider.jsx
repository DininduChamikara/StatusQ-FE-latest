import { Box, Slider } from "@mui/material";
import React from "react";

function DiscreteSlider({views, setViews}) {
  function valuetext(value) {
    setViews(value);
    return value;
  }

  let defaultValue = 0;

  if(views === 0){
    defaultValue = 50;
  }else{
    defaultValue = views;
  }

  return (
    <Box sx={{ width: 300 }}>
      <Slider
        aria-label="Temperature"
        defaultValue={defaultValue}
        getAriaValueText={valuetext}
        valueLabelDisplay="auto"
        step={10}
        marks
        min={0}
        max={100}
      />
    </Box>
  );
}

export default DiscreteSlider;
