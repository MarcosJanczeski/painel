import { createTheme } from "@mui/material"
import { cyan, yellow } from "@mui/material/colors";

export const dark = createTheme({
  palette: {
    primary: {
      main: cyan[400],
      dark: cyan[500],
      light: cyan[300],
      contrastText: '#fff',
    },
    secondary: {
      main: yellow[700],
      dark: yellow[800],
      light: yellow[500],
      contrastText: '#fff',
    },

    background: {
      default: '#202124',
      paper: '#303134'
    }
  }
});
