import "../../../css/index.css";
import TopAd from "../../TopAd";
import Footer from "../../Footer";
import NavigationBar from "../../NavigationBar";
import WomensContent from "../../../content/womens/WomensContent";
import banner from "../../../img/commonWomensbanner.png";

function Women() {
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
      <WomensContent />
      <Footer />
    </>
  );
}

export default Women;
