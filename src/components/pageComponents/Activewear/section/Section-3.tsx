import '../css/section.css'
import yoga from '../img/yoga.jpg';


const Section3 = () => {
  return (
    <>


<div className="section--header">PRIORITIZE YOUR DOMAIN</div>
    <div className="container">
        <div className="container--thirddiv--child"></div>
        <div className="container--thirddiv--child">
            <div className='container--thirddiv-grandchild-1'><img src={yoga} style={{width: 400, height: 575}} alt="sonnie-hiles"></img></div>
            <div className='container--thirddiv-grandchild-2'><p>find your happy place!</p></div>
        </div>
        <div className="container--thirddiv--child"></div>
    </div>
        
    </>
  )
}

export default Section3
