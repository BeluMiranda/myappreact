import React, { useContext } from 'react'
import '../App.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import{faCartFlatbedSuitcase} from "@fortawesome/free-solid-svg-icons"
import { CartContext } from "../Context/CartContext"


const CartWidget = () => {
    const {getItemQuantity} = useContext(CartContext)

    return (
        <>
       
        {<FontAwesomeIcon icon={faCartFlatbedSuitcase}  style={{width:"40px", height:"20px"}}/> }
        {getItemQuantity() > 0 ?
            <span className='numberPadre'><span className='numberHijo'>{getItemQuantity()}</span></span>
          : 
          null}
        </>
    )
}
export default CartWidget