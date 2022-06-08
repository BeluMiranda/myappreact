import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
        
        <div className='card cardd' style={{width: "18rem", background:"grey", border:"2px solid black"}}>
            <img src={require('../Assets/zapanike1.png')} className="card-img-top" alt="..."/>
            <div className="card-body">
            <h5 className="card-title parrafoCard">Card title</h5>
            <p className="card-text parrafoCard">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <h2 style={{textAlign:'center'}}>{count}</h2> 
            <br/>
            <button style={{width: "100px", height: "50px", marginRight:'2rem' }} onClick={subtract}> -
        </button>
        <button style={{width: "100px", height: "50px", }} onClick={add}
        > +
        </button>
        <button onClick={()=> {onAdd(count); addToCart(); notify()}} style={{marginTop: '1em', objectPosition: 'center'}} >Add to cart</button>
            </div>
        </div>
        <ToastContainer />
        </>
    );
}

export default ItemCount;
