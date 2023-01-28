import "../../../css/index.css";
import TopAd from "../../TopAd";
import Footer from "../../Footer";
import NavigationBar from "../../NavigationBar";
import YoungAdultsContent from "../../../content/youngadults/YoungAdultsContent";
import { Pagination } from "@mui/material";

function YoungAdults() {
  return (
    <>
      <TopAd />
      <NavigationBar />
      <YoungAdultsContent />
      <Pagination count={10} variant="outlined" />
      <Footer />
    </>
  );
}

export default YoungAdults;
