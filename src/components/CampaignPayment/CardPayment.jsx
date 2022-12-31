import React, { useState } from "react";
import { Grid, Segment } from "semantic-ui-react";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import { Box, Input, TextField } from "@mui/material";

function CardPayment() {
  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  const [focus, setFocus] = useState("");

  return (
    <Box sx={{ width: "100%", display: "flex", flexDirection: "row", height:'210px' }}>
      <Box sx={{ width: "30%", p: 2 }}>
        <Cards
          number={number}
          name={name}
          xpiry={expiry}
          cvc={cvc}
          focused={focus}
        />
      </Box>
      <Box sx={{ width: "35%", p: 2, mt:2 }}>
        <TextField
          sx={{ my: 1 }}
          fullWidth
          helperText="Please enter your bank card number"
          id="demo-helper-text-misaligned"
          label="Card Number"
          size="small"
          type="tel"
          name="number"
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
          name="name"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onFocus={(e) => setFocus(e.target.name)}
        />
      </Box>
      <Box sx={{ width: "35%", p: 2, mt:2 }}>
        <TextField
          sx={{ my: 1 }}
          fullWidth
          helperText="Please enter card expiry date here"
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
          fullWidth
          helperText="Please enter the cvc number here"
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
