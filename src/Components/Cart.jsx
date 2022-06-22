import React, { useContext } from 'react';


import { CartContext } from "../Context/CartContext"



const Cart = () => {
    const {cart, deleteItem, getItemQty, getItemPrice} = useContext(CartContext)
    
    return (
        <>
        <h2 class="section-header">CART</h2>
    

    {cart.map(product => ( 
    
    <section class="container content-section">
    
    <div class="cart-row">
        <span class="cart-item cart-header cart-column">Product</span>
        <span class="cart-price cart-header cart-column">Price</span>
        <span class="cart-quantity cart-header cart-column">Quantity</span>
    </div>
    <div class="cart-items">
        <div class="cart-row">
            <div class="cart-item cart-column">
                <img class="cart-item-image" src={product.photo1} width="100" height="100"/>
                <span class="cart-item-title">{product.nombre}</span>
            </div>
            <span class="cart-price cart-column">${product.price}</span>
            <div class="cart-quantity cart-column">
                
                <button class="btn btn-danger" type="button" >button</button>
            </div>
        </div>
    </div>
        </section>
        ))}

        <div class="cart-total">
                <strong class="cart-total-title">Total</strong>
                <span class="cart-total-price">${getItemPrice()}</span>
            </div>

          {/*<p>PRODUCTOS TOTALES: {getItemQty()}</p>
          <p>TOTAL A PAGAR: ${getItemPrice()}</p>*/}


        <button className='btnAddCar'>Finalizar Compra</button>
        <button className='btnAddCar'>Seguir Comprando</button>
      

     </>
    )
}

export default Cart;
