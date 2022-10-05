import '../css/index.css';
import TopAd  from '../components/TopAd';
import Footer from '../components/Footer';
import NavigationBar from '../components/NavigationBar';
import Header from '../components/Header';
import Container from '../components/Container';




function Designer() {
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
  
  export default Designer;