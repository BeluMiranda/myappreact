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
                        <Link to='/'><img src={logo} alt=''/></Link>
                            
                        </div>
                        <div className='footer-col-2'>
                            
                            <p></p>
                        </div>
                        <div className='footer-col-3'>
                            <h3><a href='https://www.linkedin.com/in/belen--miranda/'>By Belén Miranda</a></h3>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;
