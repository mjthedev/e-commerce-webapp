import '../../../../css/index.css';
import SectionA from '../../../pageComponents/Account/loggedin/section/Dashboard';
import { useSelector } from 'react-redux';





function LoggedIn() {
    // extract username from state
    const user = useSelector((state: any) => state);
    
    console.log('LoggedIn Component: ', user.values)

    const username: any = user.values.username;

    return (
      <>
        <SectionA username={username}/>
      </>
    );
  }
  
  export default LoggedIn;
