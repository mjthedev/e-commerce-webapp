import '../../../../css/index.css';
import TopAd  from '../../../TopAd';
import Footer from '../.././../Footer';
import NavigationBar from '../../../NavigationBar';
import SectionA from '../../../pageComponents/Account/loggedin/section/SectionA.jsx';
import axios from 'axios';



// Make a request for a user with a given ID
let username = axios.get('http://localhost:9000/loggedIn')
  .then(function (response) {
    // handle success
    console.log(response);
    return response.data;
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });


function LoggedIn() {
    return (
      <>
        <TopAd/>
        <NavigationBar/>
        <SectionA />
        <Footer/>
      </>
    );
  }
  
  export default LoggedIn;
