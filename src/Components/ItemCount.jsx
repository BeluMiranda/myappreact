import { faL } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Link} from 'react-router-dom';

const notify = () => {
    toast('Add to cart 😄', {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
}


const ItemCount = ({stock, sumar, restar, onAdd, cantSelect, initial}) => {
    
    
    return (
        <>
            <div>
            <div className='groupBottons'>
            <button className="button" style={{width: "100px", height: "50px" }} onClick={restar}> -
            </button>
            <h2 className='h2'>{cantSelect}</h2> 
            <button className="button" style={{width: "100px", height: "50px", }} onClick={sumar}
            > +
            </button>
            
            </div> 
            <div className="add">
            
            </div>
            <button type='button' className='btnAddCar' onClick={onAdd}><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
            </svg> AGREGAR AL CARRITO</button>

            </div> 
            
        
      
      
        
        </>
    );
}

export default ItemCount;
