import "../../../css/index.css";
import TopAd from "../../TopAd";
import Footer from "../../Footer";
import NavigationBar from "../../NavigationBar";
import MensContent from "../../../content/mens/MensContent";
import banner from "../../../img/commonbanner.png";

function Men() {
  return (
    <>
      <TopAd />
      <NavigationBar />
      <img
        src={banner}
        width="1143px"
        height="357.3px"
        style={{ marginLeft: 200, marginBottom: 70, marginTop: 90 }}
        alt=""
      />
      <MensContent />
      <Footer />
    </>
  );
}

export default Men;
