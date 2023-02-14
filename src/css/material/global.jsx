import { createTheme } from "@mui/system";
import BrandonTextRegular from "../fonts/HVDFonts-BrandonText-Regular.otf";

let theme = createTheme({
  palette: {
    grey: {
      100: "#CCDBDC",
    },
    primary: {
      main: "#CCDBDC",
      // main: "#0052cc",
      test1: "#393939",
      test2: "#CCDBDC",
      test3: "#FFFFFF ",
      test4: "#F0F4F4 ",
      test5: "#9CB9BB ",
      test6: "#689395 ",
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
      MuiAppBarRoot: {
        styleOverrides: {
          backgroundColor: "transparent",
        },
      },
    },
  },
  shape: {
    borderRadius: 5,
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
