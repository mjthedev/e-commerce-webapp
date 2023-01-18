import '../../../../css/index.css';
import SectionA from '../../../pageComponents/Account/loggedin/section/Dashboard.jsx';
import { useSelector } from 'react-redux';




function LoggedIn() {
    // extract username from state
    const user = useSelector((state) => state.user);
    
    console.log('LoggedIn Component: ', user.values)

    const username = user.values.username;

    return (
      <>
        <SectionA username={username}/>
      </>
    );
  }
  
  export default LoggedIn;
