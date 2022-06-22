import React from "react"
import './ItemDetail.css'
import './ItemCount'
import ItemCount from "./ItemCount"
import { useContext } from "react"
import {Link} from 'react-router-dom';
import { useState } from "react"
import { CartContext } from "../Context/CartContext"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const notify = () => {
    toast('Add to cart 😄', {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
}

function ItemDetail({itemDet}) {
    const [{id, photo1, photo2, photo3, photo4, nombre, description, price, category, stock}] = itemDet

    const {isInCart, addItem} = useContext(CartContext)


    const [cantidad, setCantidad] = useState(1)
    const [stockArticulos, setStock] = useState(stock)
    const [articulosAgregados, setArtAdd] = useState(0)

    function onAdd(){
        if (stockArticulos - cantidad >= 0){
            addItem(itemDet, cantidad)
    
            //controlamos la cantidad de articulos agregados
            setArtAdd(cantidad)
            setStock(stockArticulos - cantidad)
        }else{
            alert("No hay stock, quedan "+ stockArticulos +" unidades")
        }
    }
    
    function restar(){
      {cantidad > 1 && setCantidad(cantidad - 1)}
    }
    
    function sumar(){
      {cantidad < stock && setCantidad(cantidad + 1)}
    }
    
    
	return (
        <>
        <ToastContainer />
          <section id="prodetails" className="section-p1">
            <div className="single-pro-imagen">
                <img className="ft" src={photo1} alt={nombre} style={{with:"100%"}} id="mainImage"/>
                <div className="small-image-group">
                    <div className="small-img-col">
                        <img src={photo2} style={{with:"70%"}} className="small-img" />
                    </div>
                    <div className="small-img-col">
                        <img src={photo3} style={{with:"70%"}} className="small-img" />
                    </div>
                    <div className="small-img-col">
                        <img src={photo4} style={{with:"70%"}} className="small-img" />
                    </div>
                </div>
            </div>
            <div className="single-pro-details">
            
            <h4>{nombre}</h4>
            <h2>${price}</h2>
            <h4 className="descr">Description</h4>
            <span>{description}</span>

            {articulosAgregados === 0 && <b>Precio: ${price}</b>}

            {articulosAgregados === 0 && 
            <ItemCount stock={stock} initial={1} onAdd={onAdd} restar={restar} sumar={sumar} cantSelect={cantidad} />}

            {articulosAgregados > 0 &&<div className="cajaBtn"><Link to="/cart"><button className='btnGoToCart' onClick={notify()}>GO TO CART</button></Link></div>}
            </div>
          </section>
    </>	
	)

}
export default ItemDetail