import { Backdrop, CircularProgress } from "@mui/material";
import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";

function CustomAPILoader() {
  const [open, setOpen] = useState(false);

  const loaderState = useSelector(state => state.Custom_API_Loader.isVisible)
  // const loaderState = true;

  useEffect(() => {
    setOpen(loaderState)
  }, [loaderState])

  return (
    <Backdrop open={open} sx={{
      color: "#fff", zIndex: 999999
    }}>
      <CircularProgress color="primary" />
    </Backdrop>
  );
}

export default CustomAPILoader;
