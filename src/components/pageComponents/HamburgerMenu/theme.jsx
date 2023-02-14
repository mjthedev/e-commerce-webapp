import { createTheme } from "@mui/system";

let theme = createTheme({
  palette: {
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
