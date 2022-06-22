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
           <button className='btnHeader' onClick={toTheBottom}>SHOP</button>
           </div>
        </>
    );
}
export default Header;
