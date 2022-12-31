import { styled, Typography } from "@mui/material";
import React from "react";
export const ButtonWithLetter = styled(Typography)(({ bgcolor }) => ({
  margin: "2px",
  boxShadow: "none",
  textTransform: "none",
  width: "30px",
  borderRadius: "50%",
  height: "30px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: bgcolor,
  color: "white",
  "&:hover": {
    boxShadow: "none",
    cursor: "pointer",
  },
}));
const LanguageButton = ({ text, languageCode, onClick, bgColor }) => {
  return (
    <div>
      <ButtonWithLetter onClick={() => onClick(languageCode)} bgcolor={bgColor}>
        {text}
      </ButtonWithLetter>
    </div>
  );
};

export default LanguageButton;