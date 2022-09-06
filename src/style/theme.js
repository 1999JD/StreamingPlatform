import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      light: '#e4c9aa',
      main: '#DEBC95',
      dark: '#9b8368'
    },
    red: {
      light: '#e26046',
      main: '#DB3918',
      dark: '#992710'
    },
    yellow: {
      light: '#f0a55b',
      main: '#ED8F32',
      dark: '#a56423'
    },
    green: {
      light: '#4d9b8c',
      main: '#218270',
      dark: '#175b4e'
    },
    black: {
      main: '#6C574A',
    },
    linen: {
      main: '#faf0e6'
    }
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 768,
      lg: 1200,
    },
  },
})


export default theme