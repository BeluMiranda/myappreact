import React from 'react';
import shoes from '../Assets/shoes.mp4'
import {Link} from 'react-router-dom'
import { motion } from "framer-motion"

const Header = () => {

    const toTheBottom = () => {
        window.scrollTo(0, 700)
    }

    return (
        <>
        
        <div className='cover-container'>
           <video src={shoes} autoPlay loop muted className='video'/>
            <h4 className='justdoit'>JUST DO IT</h4>
           <motion.main>
           <Link to="/productos">
                        <motion.button
                        initial={{scale: 1}}
                            animate={{
                                scale: [2, 1.05, 1],
                                
                                transition: {
                                    duration: 1,
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
           </div>
        </>
    );
}
export default Header;
