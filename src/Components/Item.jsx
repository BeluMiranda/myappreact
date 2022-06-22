import React from 'react';
import './Item.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import{faStar} from "@fortawesome/free-solid-svg-icons"
import { Link } from 'react-router-dom';

const Item = ({shoee}) => {
   const {nombre, photo, price, id} = shoee
    return (
        <>
      
        {<div className="body">
          <div className="producto">
            <img src={photo} alt=""/>
            <div className="informacion">
                <span className="tipoenvio">Envio con normalidad</span>
                <span className="precio">${price}</span>
                <span className='costo-envio'>Envio gratis</span>
                <span className="description">{nombre}</span>
                <div className="calificacion">
                    <span>
                    <br></br>
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    </span>
                   
                </div>
                <Link to={`/item/${id}`}><button className="shop">Shop</button></Link>
            </div>
          </div>
    </div>}
    
        </>
    );
}

export default Item;
