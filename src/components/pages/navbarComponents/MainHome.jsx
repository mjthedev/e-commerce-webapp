import '../../../css/index.css';
import TopAd  from '../../TopAd';
import Footer from '../../Footer';
import NavigationBar from '../../NavigationBar';
import Header from '../../Header';
import Container from '../../Container';



function MainHome() {
  return (
    <>
      <TopAd/>
      <NavigationBar/>
      <Header/>
      <Container/>
      <Footer/>
    </>
  );
}

export default MainHome;