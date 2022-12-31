import { Button, IconButton } from "@mui/material";
import React from "react";

function ActionButton({ text, actionClickHandler, icon }) {
  return (
    <>
      {text !== "" && (
        <Button
          style={{
            cursor: "pointer",
          }}
          onClick={actionClickHandler}
        >
          {text}
        </Button>
      )}

      {/* Test Adding by Dinindu */}
      {icon && (
        <IconButton
          onClick={actionClickHandler}
        >
          {icon}
          {/* <Close/> */}
        </IconButton>
      )}

    </>
  );
}

export default ActionButton;
