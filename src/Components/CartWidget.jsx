import React from 'react'
import '../App.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import{faCartFlatbedSuitcase} from "@fortawesome/free-solid-svg-icons"
import { useContext } from 'react'
import { CartContext } from './Context/CartContext'

const CartWidget = ({number}) => {
    
    return (
        <>

        <FontAwesomeIcon icon={faCartFlatbedSuitcase}  style={{width:"40px", height:"20px", backgroud: "red"}}/> 
        <span className='numberPadre'><span className='numberHijo'>{number}</span></span>
        </>
    )
}
export default CartWidget