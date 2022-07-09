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
import Swal from 'sweetalert2'
import { icon } from "@fortawesome/fontawesome-svg-core"

const notify = () => {
    toast('Add to cart 😄', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        width: '10px'
        });
}
const showAlert = () => {
  Swal.fire({
    backdrop: `
    rgba(0,0,0,0.4)
    no-repeat
  `, 
          text: 'NO MORE STOCK',
          width:'20rem',
          confirmButtonColor: '#000000',
          showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          },
          position: 'top-center'
         
  })
}

function ItemDetail({itemDet}) {
    const {id, photo1, photo2, photo3, photo4, nombre, description, price, category, stock} = itemDet

    const { isInCart, addToCart } = useContext(CartContext);
    const [cant, setCant] = useState(0);
  
    //FUNCIONES DE ITEM COUNT
    const [count, setCount] = useState(1)
  
    const sumar = () => {
      count < stock ? setCount(count + 1) : showAlert()
    }
    const restar = () => {
      count > 1 ? setCount(count - 1) : console.log('dont')
    }
    const reset = () => {
      setCount(1)
    }
  
    const agregar = (count) => {
      if (count === 1) {
        notify()
      } else {	
      notify()
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
                <img src={photo1} alt={nombre}  style={{width:"100%"}} id="productImg" className=""/>
                <div className="small-img-row">
                <div className="small-img-col">
                        <img src={photo2} style={{width:"100%"}} className="small-img"/>
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
                <Link to={'/products'}><button className="botonPrincipal">Seguir comprando</button></Link>
                <Link to={'/cart'}><button className="botonPrincipal">Terminar mi compra</button></Link>
                </>
                 : 
                <ItemCount stock={stock} initial={1} onAdd={agregar} sumar={sumar} restar={restar} reset={reset} count={count} />
                }
              </div>
              </div>
            </div>
          
    </>	
    )
	

 }
export default ItemDetail