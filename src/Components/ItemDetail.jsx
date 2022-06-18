import React from "react"
import './ItemDetail.css'
import './ItemCount'
import ItemCount from "./ItemCount"

const add = (count) => {
    if (count === 1) {
      alert("Se agregó 1 producto");
    } else {	
    alert(`Se agregaron ${count} productos.`);
    }
    
}

function ItemDetail({productDetail}) {
    const {id, photo1, photo2, photo3, photo4, nombre, description, price, category, stock} = productDetail
    
    
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
                
                <ItemCount stock={stock} initial={1} onAdd={add}/>
            </div>
          </section>
    </>	
	)

}
export default ItemDetail