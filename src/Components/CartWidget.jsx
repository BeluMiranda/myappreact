import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import{faCartFlatbedSuitcase} from "@fortawesome/free-solid-svg-icons"

const CartWidget = ({number}) => {
    return (
        <>
        <FontAwesomeIcon icon={faCartFlatbedSuitcase} /> 
        <span className='number'>{number}</span>
        </>
    )
}
export default CartWidget