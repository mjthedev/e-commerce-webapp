
import menstops from '../img/menswear-tops.jpg';
import mensbottoms from '../img/menswear-bottoms.jpg';
import menssneakers from '../img/menswear-sneakers.jpg';
import mensaccessories from '../img/menswear-accessories.jpg';


const Section4 = () => {
  return (
    <>
    <div className="section--header">MENSWEAR</div>
        <div className="container--two">
            <div className="container--second--div"><img style={{width: 250, height:350}} src={menstops} alt='by gordon-cowie`'/><h1 className="container-second-textitem">Tops</h1></div>
            <div className="container--second--div"><img style={{width: 250, height:350}} src={mensbottoms} alt='by patrick-kool'/><h1 className="container-second-textitem">Bottoms</h1></div>
            <div className="container--second--div"><img style={{width: 250, height:350}} src={menssneakers} alt='by patrick-Mueller'/><h1 className="container-second-textitem">Sneakers</h1></div>
            <div className="container--second--div"><img style={{width: 250, height:350}} src={mensaccessories} alt='by corina-rainer'/> <h1 className="container-second-textitem">Accessories</h1></div>
        </div>

    </>
  )
}

export default Section4