import "../../../css/index.css";
import TopAd from "../../TopAd";
import Footer from "../../Footer";
import NavigationBar from "../../NavigationBar";
import Header from "../../Header";
import ComingSoon from "../comingSoon/ComingSoon";
import { Pagination } from "@mui/material";

function Threads() {
  return (
    <>
      <TopAd />
      <NavigationBar />
      <Header />
      <ComingSoon />
      <Pagination count={10} variant="outlined" />
      <Footer />
    </>
  );
}

export default Threads;
