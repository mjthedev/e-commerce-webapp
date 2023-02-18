import "../../../css/index.css";
import TopAd from "../../TopAd";
import Footer from "../../Footer";
import NavigationBar from "../../NavigationBar";
import DesignerContent from "../../../content/designer/DesignerContent";
import { Pagination } from "@mui/material";

function Designer() {
  return (
    <>
      <TopAd />
      <NavigationBar />
      <DesignerContent />
      <Pagination count={10} variant="outlined" />
      <Footer />
    </>
  );
}

export default Designer;
