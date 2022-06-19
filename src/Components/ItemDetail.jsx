import React from "react"
import './ItemDetail.css'
import './ItemCount'
import ItemCount from "./ItemCount"
import { useContext } from "react"
import { CartContext } from "./Context/CartContext"
import { useState } from "react"



function ItemDetail({productDetail}) {
    const {id, photo1, photo2, photo3, photo4, nombre, description, price, category, stock} = productDetail

    const [count, setCount] = useState(1)
    const {isInCart, addItem} = useContext(CartContext)


    const onAdd = () => {
        /*if (count === 1) {
          alert("Se agregó 1 producto");
        } else {	
        alert(`Se agregaron ${count} productos.`);
        }*/
        isInCart(id)
        addItem(productDetail, count)
    
    }
    
	return (
        <>
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
                
                <ItemCount stock={stock} count={count} onAdd={onAdd} setCount={setCount}/>
            </div>
          </section>
    </>	
	)

}
export default ItemDetail