import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../Assets/logo.png'

const Footer = () => {
    return (
        <>
            <div className='footer'>
                <div className='container'>
                    <div className='row'>
                        <div className='footer-col-1'>
                        <img src={logo} alt=''/>
                            
                        </div>
                        <div className='footer-col-2'>
                            
                            <p></p>
                        </div>
                        <div className='footer-col-3'>
                            <h3>By Belén Miranda</h3>
                            <p></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;
