import "../../../css/index.css";
import TopAd from "../../TopAd";
import Footer from "../../Footer";
import NavigationBar from "../../NavigationBar";
import WomensContent from "../../../content/womens/WomensContent";
import WomensMenu from "../../../components/pageComponents/Menus/WomensMenu";
import { Pagination } from "@mui/material";

function Women() {
  return (
    <>
      <TopAd />
      <NavigationBar />
      <WomensMenu />
      <WomensContent />
      <Pagination count={10} variant="outlined" />
      <Footer />
    </>
  );
}

export default Women;
