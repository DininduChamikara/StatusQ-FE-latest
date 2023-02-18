import React, { useState } from "react";
import { Grid, Segment } from "semantic-ui-react";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import { Box, Input, TextField } from "@mui/material";
import { useCreditCardValidator } from 'react-creditcard-validator';

function CardPayment() {
  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  const [focus, setFocus] = useState("");

  const {
    getCardNumberProps,
    getExpiryDateProps,
    getCVCProps,
    meta: { erroredInputs }
  } = useCreditCardValidator();

  return (
    <Box sx={{ width: "100%", display: {xs:'block', lg:'flex'}, flexDirection: "row" }}>
      <Box sx={{ width: {xs:'100%', lg:'30%'}, p: {xs:0, lg:2} }}>
        <Cards
          number={number}
          name={name}
          xpiry={expiry}
          cvc={cvc}
          focused={focus}
        />
      </Box>
      <Box sx={{ width: {xs:'100%', lg:'35%'}, p: 2, mt: {xs:0, lg:2} }}>
        <TextField
          {...getCardNumberProps()}
          sx={{ my: 1 }}
          fullWidth
          helperText={erroredInputs.cardNumber ? erroredInputs.cardNumber : "Please enter your bank card number"}
          error={erroredInputs.cardNumber}
          id="demo-helper-text-misaligned"
          label="Card Number"
          size="small"
          type="number"
          placeholder="Card Number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          onFocus={(e) => setFocus(e.target.name)}
        />

        <TextField
          sx={{ my: 1 }}
          fullWidth
          helperText="Please enter name here"
          id="demo-helper-text-misaligned"
          label="Name"
          size="small"
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onFocus={(e) => setFocus(e.target.name)}
        />
      </Box>
      <Box sx={{ width: {xs:'100%', lg:'35%'}, p: 2, mt: {xs:0, lg:2} }}>
        <TextField
          sx={{ my: 1 }}
          {...getExpiryDateProps()}
          fullWidth
          helperText={erroredInputs.expiryDate ? erroredInputs.expiryDate : "Please enter card expiry date here"}
          id="demo-helper-text-misaligned"
          label="MM/YY Expiry"
          size="small"
          type="text"
          name="expiry"
          placeholder="MM/YY Expiry"
          value={expiry}
          onChange={(e) => setExpiry(e.target.value)}
          onFocus={(e) => setFocus(e.target.name)}
        />

        <TextField
          sx={{ my: 1 }}
          {...getCVCProps()}
          fullWidth
          helperText={erroredInputs.cvc ? erroredInputs.cvc : "Please enter the cvc number here"}
          id="demo-helper-text-misaligned"
          label="CVC"
          size="small"
          type="tel"
          name="cvc"
          placeholder="CVC"
          value={cvc}
          onChange={(e) => setCvc(e.target.value)}
          onFocus={(e) => setFocus(e.target.name)}
        />
      </Box>
    </Box>
  );
}

export default CardPayment;
