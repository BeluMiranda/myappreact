import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { CartContext } from "../Context/CartContext"



const Cart = () => {
    const {cart, removeFromCart, getItemQty, getItemPrice, emptyCart} = useContext(CartContext)
    const carritoVacio = cart.length === 0;
    return (
        <>
        <h2 class="section-header">CART</h2>
        <h2 className="carttitle">Mi Carrito</h2>
    
        {(carritoVacio &&
            <div className='emptyCart'>
                <h4>EMPTY CART</h4>
            <Link to="/"><button className='btnGo'>GO TO SHOP</button></Link> 
            </div>
        ) || 
        <div className="cartt">
        <table>
      <thead>
        <tr>
          <th>Product</th>
          <th>Name</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Total</th>
          <th>Delete</th>
        </tr>
      </thead> 
      <tbody>{
        cart.map(product => (
          <tr className="cart-item" key={product.id}>
            <td className="cart-item-img">
              <img src={product.photo1} alt={product.nombre} width="100" height="100"/>
            </td>
            <td className="cart-item-title">
              {product.nombre}
            </td>
            <td className="cart-item-price">${product.price}</td>
            <td className="cart-item-qty">
              {product.cantidad}
            </td>
            <td className="cart-item-total">
              ${product.price * product.cantidad}
            </td>
            <td className="cart-item-remove">
              <button className="botonPrincipal" onClick={() => removeFromCart(product.id)}>
                X
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
        
    <div className="cart-footer">
      {carritoVacio?
          <Link to="/"><button className="botonPrincipal">Volver al inicio</button></Link>
          :
          <>
          <h3>total: ${getItemPrice()}</h3>
          <Link to="/cart"><button className="botonPrincipal">Continuar al Pago</button></Link>
          <button className="botonPrincipal" onClick={emptyCart}>Vaciar Carrito</button>
          </>
      }
    </div>
    </div>     } 
     </>
    )
}

export default Cart;
