import React from 'react'
import CartWidget from "./CartWidget"
import { Link } from 'react-router-dom'
const NavBar = ({isScrolling}) => {

    const toTheTop = () => {
        window.scrollTo({top:0, left:0, behavior:'smooth'})
    }

    return (
    <nav className={`navbar navbar-expand-lg menu ${isScrolling > 20 ? 'scrolling' : null}`}>
        <div className="container-fluid">
        <Link to="/" className="navbar-brand"><button onClick={toTheTop}>logo</button></Link>
            <button className="navbar-toggler"  type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation" style={{color:'white'}}>
            <span className="navbar-toggler-icon" style={{color:'white'}}></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav mx-auto">
                <li className="nav-item">
                <Link to="/category/men" className="nav-link linkk">MEN</Link>
                </li>
                <li className="nav-item">
                <Link to="/category/women" className="nav-link linkk">WOMEN</Link>
                </li>
                <li className="nav-item">
                <Link to="/category/kids" className="nav-link linkk" >KIDS</Link>
                </li>
               
                <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    COLECTION 
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <li><Link to="/colection/news" className="dropdown-item" >News Arrivals</Link></li>
                    <li><Link to="/colection/lastyear" className="dropdown-item" >Season 2021</Link></li>
                </ul>
               
                </li>
                <li className="nav-item">
                <Link to="/category/kids" className="nav-link linkk" >CONTACTO</Link>
                </li>
                <li className="nav-item cart">
                <a className="nav-link" href="#"><CartWidget number= {4} /></a>
                </li>
                
            </ul>
            </div>
        </div>
    </nav>)
}
export default NavBar