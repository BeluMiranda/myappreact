import React from 'react';
import shoes from '../Assets/shoes.mp4'
import {Link} from 'react-router-dom'

const Header = () => {

    const toTheBottom = () => {
        window.scrollTo(0, 700)
    }

    return (
        <>
        
        <div className='cover-container'>
           <video src={shoes} autoPlay loop muted className='video'/>
            <h4 className='justdoit'>JUST DO IT</h4>
          
           </div>
           <div className='containerIntro'>
           <h4 className="intro">INTRODUCING PEG 39</h4>
           <p className="runTxt">Runnin's most legendary name returns, even than before</p>
           </div>
        </>
    );
}
export default Header;
