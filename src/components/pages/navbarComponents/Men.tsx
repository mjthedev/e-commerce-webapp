import "../../../css/index.css";
import TopAd from "../../TopAd";
import Footer from "../../Footer";
import NavigationBar from "../../NavigationBar";
import MensContent from "../../../content/mens/MensContent";

function Men() {
  return (
    <>
      <TopAd />
      <NavigationBar />
      <img
        src={"https://gcsecomie.imgix.net/banners/common/commonbanner.png"}
        width="1143px"
        height="357.3px"
        style={{ marginLeft: 200, marginBottom: 70, marginTop: 90 }}
        alt=""
      />
      <img
        src={
          "https://gcsecomie.imgix.net/banners/seasonal/ValentinesDaySeasonalBanner.png"
        }
        width="1380px"
        height="600px"
        style={{ marginLeft: 100, marginBottom: 70, marginTop: 90 }}
        alt=""
      />
      <MensContent />
      <Footer />
    </>
  );
}

export default Men;
