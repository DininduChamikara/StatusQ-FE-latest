import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    error: {
      main: "#fa3c3a",
      validation: "#fa3c3a",
    },
    neutral: {
      main: "#64748B",
      contrastText: "#fff",
    },
    lightGreen: {
      main: "#c8facd",
    },
  },
  typography: {
    fontFamily: [
      '"Poppins"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    fontSize: 12,
  },
});

export default theme;
