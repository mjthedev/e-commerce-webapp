import React from 'react'
import '../css/container.css'


const container = () => {
  return (
    <>
         <div className="container">
        <div className="container--div">one</div>
        <div className="container--main-div">
            <div className="container--div-nested">
                <div className="container-div-nested-content">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis doloribus cumque tempora velit fuga qui odio odit magnam quaerat voluptatem et, quibusdam facere, veniam expedita laborum voluptas debitis! Ad, nesciunt.</p>
                </div>
                <div className="container-div-nested-image"></div>
            </div>
        </div>
        <div className="container--div">three</div>
    </div>
    
        <div className="container--two">
            <div className="container--second--div"><image style={{width: 250, height:300}} src="../img/girl.png" alt=""/></div>
            <div className="container--second--div"><img style={{width: 250, height:300}} src="../img/guy.png" alt=""/></div>
            <div className="container--second--div"><img style={{width: 250, height:300}} src="../img/kid.png" alt=""/></div>
            <div className="container--second--div"><img style={{width: 250, height:300}} src="../img/teen.png" alt=""/></div>
            <div className="container--second--div"><img style={{width: 250, height:300}} src="../img/gift.png" alt=""/></div>
        </div>
    
    <div className="container-two-textcontent">
        <h1 className="container-two-textcontent-item">For Her</h1>
        <h1 className="container-two-textcontent-item">For Him</h1>
        <h1 className="container-two-textcontent-item">For Kids</h1>
        <h1 className="container-two-textcontent-item">For Teens</h1>
        <h1 className="container-two-textcontent-item">All Gifts</h1>
    </div>
        
    <div className="container">
        <div className="container--third--div">one</div>
        <div className="container--third--div">two</div>
        <div className="container--third--div">three</div>
    </div>

    <div className="container">
        <div className="container--fourth--div">one</div>
        <div className="container--fourth--div">two</div>
        <div className="container--fourth--div">three</div>
    </div>

    </>
  )
}

export default container
