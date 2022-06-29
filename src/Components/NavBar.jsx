import React from 'react'
import { useState } from "react"
import { Link } from 'react-router-dom'
import CartWidget from './CartWidget'
import logo from '../Assets/logo.png'

function NavBar({ isScrolling }) {
  const toTheTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }

  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <div className={`Navbar navbar-expand-lg menu ${isScrolling > 20 ? 'scrolling' : null}`}> 
        <Link to="/" className="nav-logo"><img src={logo} className="nav-logo" type="button" onClick={toTheTop} /></Link>
        <div className={`nav-items ${isOpen && "open"}`}>
          <Link to="/category/men">MEN</Link>
          <Link to="/category/women">WOMEN</Link>
          
          <Link to="/category/kids">KIDS</Link>
          <Link to="/cart"><CartWidget /></Link>
        </div>
        <div
          className={`nav-toggle ${isOpen && "open"}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="bar"></div>
        </div>
      </div>
    </>
  )
}
export default NavBar
