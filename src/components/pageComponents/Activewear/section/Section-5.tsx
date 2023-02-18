import '../css/section.css';
import menswearmain from '../img/menswear-main.jpg';


const Section5 = () => {
  return (
    <>


<div className="section--header">NO EXCUSES</div>
    <div className="container">
        <div className="container--thirddiv--child"></div>
        <div className="container--thirddiv--child">
            <div className='container--thirddiv-grandchild-1'><img src={menswearmain} style={{width: 400, height: 575}} alt="sonnie-hiles"></img></div>
            <div className='container--thirddiv-grandchild-2'><p>Go Hard or Go Home!</p></div>
        </div>
        <div className="container--thirddiv--child"></div>
    </div>
        
    </>
  )
}

export default Section5
