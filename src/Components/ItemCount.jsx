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


const ItemCount = ({stock, sumar, restar, onAdd, initial, cantSelect}) => {
    
    
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
            <button className='buttonAdd' onClick={onAdd} style={{marginTop: '1em', position: "left"}} >Add to cart</button>
            </div> 
            
        
      
        <ToastContainer />
        
        </>
    );
}

export default ItemCount;
