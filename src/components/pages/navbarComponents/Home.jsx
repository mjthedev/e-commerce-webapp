import "../../../css/index.css";

import TopAd from "../../TopAd";
import Footer from "../../Footer";
import NavigationBar from "../../NavigationBar";
import HomeContent from "../../../content/home/HomeContent";

function Home() {
  return (
    <>
      <TopAd />
      <NavigationBar />
      <HomeContent />
      <Footer />
    </>
  );
}

export default Home;
