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
    const {id, photo1, photo2, photo3, photo4, nombre, description, price, category, stock} = itemDet

    const {isInCart, addItem} = useContext(CartContext)


    const [cantidad, setCantidad] = useState(1)
    const [stockArticulos, setStock] = useState(stock)
    const [articulosAgregados, setArtAdd] = useState(0)


    function onAdd(){
        if (stockArticulos - cantidad >= 0) {
            setArtAdd(cantidad)
            addItem(itemDet, cantidad)
      
            //controlamos la cantidad de articulos agregados
            setStock(stockArticulos - cantidad)
        }else{
            alert("No hay stock, quedan "+ stock +" unidades")
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
          <div id="prodetails" className="section-p1">
            <div className="single-pro-imagen">
                <img className="ft" src={photo1} alt={nombre} id="mainImage" style={{width:"500px"}}/>
                <div className="small-image-group">
                    <div className="small-img-col">
                        <img src={photo2} style={{width:"30%"}} className="small-img" />
                    </div>
                    <div className="small-img-col">
                        <img src={photo3} style={{width:"30%"}} className="small-img" />
                    </div>
                    <div className="small-img-col">
                        <img src={photo4} style={{width:"30%"}} className="small-img" />
                    </div>
                </div>
            </div>
            <div className="single-pro-details">
            
            <h4>{nombre}</h4><div className="bar"></div>
            <h2>${price}</h2>
            <span>{description}</span>
        

        {articulosAgregados === 0 &&
          <ItemCount stock={stock} initial={1} onAdd={onAdd} restar={restar} sumar={sumar} cantSelect={cantidad} />}

        {articulosAgregados > 0 && <Link className='btnAddCar' to={`/cart`}>FINALIZAR COMPRA</Link>}
            </div>
          </div>
    </>	
	)

}
export default ItemDetail