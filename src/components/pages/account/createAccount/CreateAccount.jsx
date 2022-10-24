import '../../../../css/index.css';
import TopAd  from '../../../TopAd';
import Footer from '../../../Footer';
import NavigationBar from '../../../NavigationBar';
import SectionA from '../../../pageComponents/Account/createAccount/section/sectionA';






function CreateAccount () {
    return (
      <>
        <TopAd/>
        <NavigationBar/>
        <SectionA/>
        <Footer/>
      </>
    );
  }
  
  export default CreateAccount;