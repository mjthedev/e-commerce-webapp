import "../../../css/index.css";
import Container from "../../Container";
import { ThemeProvider } from "@mui/material";
import theme from "../../../css/material/global";

function MainHome() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <Container />
      </>
    </ThemeProvider>
  );
}

export default MainHome;
