import { faL } from '@fortawesome/free-solid-svg-icons';
import React, { useContext, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Link} from 'react-router-dom';
import { CartContext } from "../Context/CartContext"


const deleted = () => {
    toast('Deteled 😭', {
        position: "bottom-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
}


const ItemCount = ({stock, sumar, restar, onAdd, count, initial, reset}) => {
    const {cart, addToCart} = useContext(CartContext);
    
    return (
        <>
            <div>
            <div className='groupBottons'>
            <button className="button" style={{width: "100px", height: "50px" }} onClick={ ()=> {restar(); deleted()}} > -
            </button>
            <h2 className='h2'>{count}</h2> 
            <button className="button" style={{width: "100px", height: "50px", }} onClick={sumar}
            > +
            </button>
            </div> 
            <div className="add">
            <button className="botonPrincipal" onClick={() => {onAdd(count); reset()}}>Agregar</button>
            </div>
            </div> 
            
        
        </>
    );
}

export default ItemCount;
