import { createTheme } from "@mui/system";
import BrandonTextRegular from "../fonts/HVDFonts-BrandonText-Regular.otf";

let theme = createTheme({
  palette: {
    primary: {
      main: "#0052cc",
    },
    secondary: {
      main: "#edf2ff",
    },
  },
  typography: {
    poster: {
      color: "red",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Brandon';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: local('Brandon'), local('Brandon'), url(${BrandonTextRegular}) format('otf');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
      `,
    },
  },
});

theme = createTheme(theme, {
  palette: {
    info: {
      main: theme.palette.secondary.main,
    },
  },
});
export default theme;
