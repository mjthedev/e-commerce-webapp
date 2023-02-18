import '../../../../css/index.css';
import TopAd  from '../../../TopAd';
import Footer from '../../../Footer';
import NavigationBar from '../../../NavigationBar';
import Header from '../../../Header';
import ComingSoon from '../../comingSoon/ComingSoon';






function GetOurApp() {
    return (
      <>
        <TopAd/>
        <NavigationBar/>
        <Header/>
        <ComingSoon/>
        <Footer/>
      </>
    );
  }
  
  export default GetOurApp;