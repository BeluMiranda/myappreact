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

    const { isInCart, addToCart } = useContext(CartContext);
    const [cant, setCant] = useState(0);
  
  
    //FUNCIONES DE ITEM COUNT
    const [count, setCount] = useState(1)
  
    const sumar = () => {
      count < stock ? setCount(count + 1) : alert('supero stock')
    }
    const restar = () => {
      count > 1 ? setCount(count - 1) : alert('La cantidad no puede ser menor que 1')
    }
    const reset = () => {
      setCount(1)
    }
  
    const agregar = (count) => {
      if (count === 1) {
        alert('se agrego un producto')
      } else {	
      alert(`Se agregaron ${count} ${nombre} al carrito.`);
      }
      setCant(count);
      addToCart(itemDet, count, id);
      isInCart(id);
    }
    
	return (
        <>
        <ToastContainer />
          <div className="small-container single-product">
            <div className="row">
              <div className="col-2">
                <img src={photo1} alt={nombre}  style={{width:"100%"}}/>
                <div className="small-img-row">
                <div className="small-img-col">
                        <img src={photo2} style={{width:"100%"}} className="small-img" />
                    </div>
                    <div className="small-img-col">
                        <img src={photo3} style={{width:"100%"}} className="small-img" />
                    </div>
                    <div className="small-img-col">
                        <img src={photo4} style={{width:"100%"}} className="small-img" />
                    </div>
                </div>
                </div>
              
                <div className="col-2">
                  <h4 className="nombreDetail">{nombre}</h4>
                  <p className="parrafoDetail">{description}</p>
                  <h2>${price}</h2>
                  
                  {cant > 0 ? 
              <>
                <Link to={'/'}><button className="botonPrincipal">Seguir comprando</button></Link>
                <Link to={'/cart'}><button className="botonPrincipal">Terminar mi compra</button></Link>
                </>
                 : 
                <ItemCount stock={stock} initial={1} onAdd={agregar} sumar={sumar} restar={restar} reset={reset} count={count} />
                }
              </div>
              </div>
            </div>
          
                   {/*} <div className="small-img-col">
                        <img src={photo2} style={{width:"30%"}} className="small-img" />
                    </div>
                    <div className="small-img-col">
                        <img src={photo3} style={{width:"30%"}} className="small-img" />
                    </div>
                    <div className="small-img-col">
                        <img src={photo4} style={{width:"30%"}} className="small-img" />
                    </div>
                </div>
            
  <div className="single-pro-details">*/}
            
            
            
          
    </>	
	)

 }
export default ItemDetail