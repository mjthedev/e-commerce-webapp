import "../../../css/index.css";
import TopAd from "../../TopAd";
import Footer from "../../Footer";
import NavigationBar from "../../NavigationBar";

import Section1 from "../../pageComponents/Activewear/section/Section-1";
import Section3 from "../../pageComponents/Activewear/section/Section-3";
import Section2 from "../../pageComponents/Activewear/section/Section-2";
import Section5 from "../../pageComponents/Activewear/section/Section-5";
import Section4 from "../../pageComponents/Activewear/section/Section-4";
import ActiveWearContent from "../../../content/activewear/ActiveWearContent";

function Activewear() {
  return (
    <>
      <TopAd />
      <NavigationBar />

      <Section1 />
      <ActiveWearContent />
      <Section3 />
      <Section2 />
      <Section5 />
      <Section4 />
      <Footer />
    </>
  );
}

export default Activewear;
