import { Campaign, PersonSearch } from "@mui/icons-material";
import FormatAlignJustifyIcon from "@mui/icons-material/FormatAlignJustify";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import Box from "@mui/material/Box";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import * as React from "react";

export default function ToggleButtonSmall({alignment, setAlignment}) {

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  const children = [
    <ToggleButton value="Campaign" key="campaign">
      <Campaign />
    </ToggleButton>,
    <ToggleButton value="Client" key="client">
      <PersonSearch />
    </ToggleButton>,
  ];

  const control = {
    value: alignment,
    onChange: handleChange,
    exclusive: true,
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        // TODO Replace with Stack
        "& > :not(style) + :not(style)": { mt: 2 },
      }}
    >
      <ToggleButtonGroup size="small" {...control} aria-label="Small sizes">
        {children}
      </ToggleButtonGroup>
    </Box>
  );
}
