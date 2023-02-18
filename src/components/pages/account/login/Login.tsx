import '../../../../css/index.css';
import TopAd  from '../../../TopAd';
import Footer from '../../../Footer';
import NavigationBar from '../../../NavigationBar';
import SectionA from '../../../pageComponents/Account/login/section/SectionA';






function Login () {
    return (
      <>
        <TopAd/>
        <NavigationBar/>
        <SectionA/>
        <Footer/>
      </>
    );
  }
  
  export default Login;