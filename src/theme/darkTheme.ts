import { createTheme } from "@mui/material";
import { blue, red } from "@mui/material/colors";

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: blue[800],
    },
    secondary: {
      main: blue[500],
    },
    error: {
      main: red.A400,
    },
  },
});
