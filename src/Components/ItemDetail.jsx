import React from "react"
import './ItemDetail.css'
function ItemDetail({productDetail}) {
    const {nombre, photo, description, price, category} = productDetail
    
	return (
        <>
          <div className="item-detail-contenedor">
            <div className="item-detail-featured-img">
                <img className="item-detail-img grow" src={photo} alt={nombre}/>
            </div>
        <div className="item-detail-info">
            <h2>{nombre}</h2>
            <h6>{category}</h6>
            <p>{description}</p>
            <h4>${price}</h4>
            <button className="buttonCardDetail">Add to cart</button>
        </div>
        </div>
    </>	
	)

}
export default ItemDetail