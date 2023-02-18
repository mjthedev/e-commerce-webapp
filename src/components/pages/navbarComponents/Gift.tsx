import "../../../css/index.css";
import TopAd from "../../TopAd";
import Footer from "../../Footer";
import NavigationBar from "../../NavigationBar";
import GiftContent from "../../../content/gift/GiftContent";
import { Pagination } from "@mui/material";

function Gift() {
  return (
    <>
      <TopAd />
      <NavigationBar />
      <GiftContent />
      <Pagination count={10} variant="outlined" />
      <Footer />
    </>
  );
}

export default Gift;
