import "../../../css/index.css";
import TopAd from "../../TopAd";
import Footer from "../../Footer";
import NavigationBar from "../../NavigationBar";
import KidsContent from "../../../content/kids/KidsContent";

function Kids() {
  return (
    <>
      <TopAd />
      <NavigationBar />
      <img
        src={"https://gcsecomie.imgix.net/banners/common/commonKidsBanner.png"}
        width="1300px"
        height="357.3px"
        style={{ marginLeft: 150, marginBottom: 70, marginTop: 90 }}
        alt=""
      />
      <KidsContent />
      <Footer />
    </>
  );
}

export default Kids;
