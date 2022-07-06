import React from 'react';
import shoes from '../Assets/shoes.mp4'
import {Link} from 'react-router-dom'
import { motion} from "framer-motion/dist/framer-motion"
import peg from '../Assets/peg39'
const Header = () => {

    const toTheBottom = () => {
        window.scrollTo(0, 700)
    }

    return (
        <>
        
        <div className='cover-container'>
           <video src={shoes} autoPlay loop muted playsInline className='video' />
            <h4 className='justdoit'>JUST DO IT</h4>
            <motion.main>
           <Link to="/products">
                        <motion.button
                        initial={{scale: 1}}
                            animate={{
                                scale: [2, 1.05, 1],

                                transition: {
                                    duration: 0.5,
                                    repeatDelay: 1,
                                    repeat: Infinity,
                                },

                            }}

                            className="text-xl [background-color:#4a3933] [color:#ebecee] w-max my-4 rounded-lg font-bold p-2 btnHeader" onClick={toTheBottom}>
                            SHOP
                        </motion.button>
                    </Link>
                </motion.main>
           </div>
           <div className='containerIntro'>
           <h4 className="intro">INTRODUCING PEG 39</h4>
           <p className="runTxt">Runnin's most legendary name returns, even than before</p>
           <Link to='/products'><button>SHOP</button></Link>
           <div className='peg39'>
                            <img className='imgPeg39' src={peg}/>
           </div>
           </div>
        </>
    );
}
export default Header;
