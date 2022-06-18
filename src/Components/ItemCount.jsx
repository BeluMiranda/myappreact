import { faL } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';

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


const ItemCount = ({stock, initial, onAdd}) => {
    const [count, setCount] = useState(initial)
    const [show, setShow] = useState(true)
   
    const add = () => {
        (count<stock)? (setCount(count + 1)) : alert('no se puede agregar mas productos') 
    }
    const subtract = () => {
        (count>initial)? (setCount(count - 1)) : alert ('no se pueden sacar mas productos')   
    }
    const addToCart = () => {
        setCount(initial)
    }
 
    return (
        <>
        
         
        <div className='groupBottons'>
        <button className="button" style={{width: "100px", height: "50px" }} onClick={subtract}> -
        </button>
        <h2 className='h2'>{count}</h2> 
        <button className="button" style={{width: "100px", height: "50px", }} onClick={add}
        > +
        </button>
        
        </div> 
        <div className="add">
        
        </div>
        {
            show ? <button className='buttonAdd' onClick={()=> {onAdd(count); addToCart(); notify(); setShow(false)}} style={{marginTop: '1em', position: "left"}} >Add to cart</button> :
            (<Link to={'/Cart'}><button>Go to cart</button></Link>)
        }
      
        <ToastContainer />
        
        </>
    );
}

export default ItemCount;
