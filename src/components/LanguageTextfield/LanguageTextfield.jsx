import React from "react";
import googleTransliterate from "google-input-tool";
import { useEffect } from "react";
import { useState } from "react";
import { Box, Typography } from "@mui/material";
import LanguageButton from "./LanguageButton";
import CustomTextArea from "../CustomTextArea/CustomTextArea";
import WordCountDisplay from "../WordCountDisplay/WordCountDisplay";

//language codes refer googleTransliterate API
const SINHALA = "si-t-i0-und";
const TAMIL = "ta-t-i0-und";
const ENGLISH = "";

const LanguageTextfield = ({
  index,
  advertisements,
  setAdvertisements,
  setFinalMessage,
//   characterCount,
  resetMessageBox,
  rowsCount,
  finalMessageText,
  saveClicked,
//   setCharacterCount,
}) => {
  const [typedText, setTypedText] = useState("");
  const [translatedText, setTranslatedText] = useState([]);
  const [language, setLanguage] = useState(ENGLISH);

  const [characterCount, setCharacterCount] = useState(0);


  useEffect(()=> {
    if(finalMessageText && finalMessageText.length > 0){
      setTypedText(finalMessageText)
    }
  }, [finalMessageText])

  const handleOnChange = (event) => {
    if (event.target.value.length > 400) {
      console.log("invalid legth of description");
    }
    setTypedText(event.target.value);

    // Dinindu test
    if(index !== -1){
      let adzArray = [];
      adzArray = advertisements;
      adzArray[index].description = event.target.value;

      setAdvertisements(adzArray)
      // advertisements[index].description = event.target.value;
      
    }
   

    if (event.target.value.substr(-1) === " ") {
      let currentInput = typedText.split(" ");
      let word = currentInput[currentInput.length - 1];

      //if english is the selected language, no point of trainslitering.
      if (language !== ENGLISH) {
        //TODO:Test
        // currentInput.forEach((word, index) => getSuggestions(word, index));
        getSuggestions(word, 1);

      }
    }
  };

  useEffect(() => {
    let currentInput = typedText.split(" ");
    currentInput[currentInput.length - 2] = translatedText;
    // console.log("output:", currentInput);
    setTypedText(currentInput.join(" "));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [translatedText]);

  useEffect(() => {
    setCharacterCount(typedText.length);
    setFinalMessage(typedText);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [typedText]);

  useEffect(() => {
    //clears the initial state
    //otherwise an empty string in the text area
    // setTypedText(finalMessageText);
    setTypedText(finalMessageText + "  ");
    setTranslatedText([]);
  }, [resetMessageBox]);

  const languageOnClickHandler = (languageCode) => {
    setLanguage(languageCode);
  };

  async function getSuggestions(input, index) {
    let sourceText = input;
    let inputLanguage = language;
    let maxResult = 1;
    let request = new XMLHttpRequest();

    await googleTransliterate(
      request,
      sourceText,
      inputLanguage,
      maxResult
    ).then(function (response) {
      let text = JSON.parse(JSON.stringify(sourceText));
      //console.log(response[0][0]);
      text = response[0][0];
      setTranslatedText(text);
      // console.log(input, index, text);
      // console.log(text);
    });
  }

  return (
    <Box>
      <Box display={"flex"} justifyContent="space-between" pb={1}>
        <Typography fontWeight={"bold"} fontSize={16} lineHeight={2} color={"primary.darker"}>
          Description
        </Typography>
        <Box display={"flex"} alignItems="center">
          <LanguageButton
            text={"E"}
            bgColor={language === ENGLISH ? "#5551D9" : "#00AB55"}
            languageCode={ENGLISH}
            onClick={languageOnClickHandler}
          />
          <LanguageButton
            text={"සි"}
            bgColor={language === SINHALA ? "#5551D9" : "#00AB55"}
            languageCode={SINHALA}
            onClick={languageOnClickHandler}
          />
          <LanguageButton
            text={"த"}
            bgColor={language === TAMIL ? "#5551D9" : "#00AB55"}
            languageCode={TAMIL}
            onClick={languageOnClickHandler}
          />
        </Box>
      </Box>
      <CustomTextArea
        aria-label="Demo input"
        multiline
        placeholder="Type something…"
        // to remove unnecessary 2 space
        // value={typedText.slice(-2) === "  " ? typedText.slice(0, -2) : typedText}
        value={typedText}
        saveClicked={saveClicked}
        onChange={handleOnChange}
        rowsCount={rowsCount}
      />
      <Box display={"flex"} justifyContent="end">
        <WordCountDisplay characterCount={characterCount} />
        {/* <WordCountDisplay characterCount={10} /> */}
      </Box>
    </Box>
  );
};

export default LanguageTextfield;
