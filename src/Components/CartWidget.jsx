import React, { useContext } from 'react'
import '../App.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import{faCartFlatbedSuitcase} from "@fortawesome/free-solid-svg-icons"
import { CartContext } from "../Context/CartContext"


const CartWidget = () => {
    const {getItemQty} = useContext(CartContext)

    return (
        <>
       
        {<FontAwesomeIcon icon={faCartFlatbedSuitcase}  style={{width:"40px", height:"20px"}}/> }
          <span className='numberPadre'><span className='numberHijo'>{getItemQty()}</span></span>
        </>
    )
}
export default CartWidget