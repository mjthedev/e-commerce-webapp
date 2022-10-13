// import '../css/section.css'
import mountainclimb from '../img/mountain-climbing.jpg';



const Section1 = () => {
  return (
    <>
    <div className="container">
        <div className="container--div"></div>
            <div className="container--main-div">
                <div className="container--div-nested">
                    <div className="container-div-nested-content">
                        <p>Get The Gear That Doesn't Lose It's Grip!</p>
                    </div>
                    <div className="container-div-nested-image"><img src={mountainclimb} style={{width: 400, height: 500}} alt='josh-withers sophie-grieve-williams'></img></div>
                </div>
            </div>
        <div className="container--div"></div>
    </div>

     
    </>
  )
}

export default Section1
