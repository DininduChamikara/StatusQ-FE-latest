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

      {icon && (
        <IconButton
          onClick={actionClickHandler}
        >
          {icon}
        </IconButton>
      )}

    </>
  );
}

export default ActionButton;
