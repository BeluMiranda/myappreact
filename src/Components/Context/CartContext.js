import { createContext, useState } from "react";
import React from "react";


export const CartContext = createContext()
const {Provider} = CartContext

const Myprovider = ({children}) =>{
    const [cart, setCart] = useState()

    //metodo some --> {metodo que devuelve TRUE O FALSE} en itemDetail, se encarga de detectar si hay un producto a agregar si ya esta en el carrito.
    const isInCart = (id) => {
        return cart.some(x => x.id === id)
    }
    //En itemDetail. Se encarga de agregar el producto seleccionado al cart SIN PISAR a los agregados ANTEIORIMENTE. si esta seleccionado dos veces, aumenta su CANTIDAD no su cantidad de RENDER.
    const addItem = (item, count) => {
        const newItem = {
            ...item,
            count
        }
        if(isInCart(newItem.id)){
            const findProduct = cart.find(x => x.id === newItem.id)
            const productIndex = cart.indexOf(findProduct)
            const auxArray = [...cart]
            auxArray[productIndex].count += count
            setCart(auxArray)
        }
        else{
            setCart([...cart, newItem])
        }
    }
    //Vaciar el carrito por ejemplo en cart.
    const emptyCart = () => {
        setCart([])
    }
    //metodo filter, se puede hacer en el cart. Se encarga de en funcion del ID de retornar un nuevo array sin el producto seleccionado.
    const deleteItem = (id) => {
        return setCart(cart.filter(x => x.id !== id ))
    }
    //sirve para el cartWidget. Para saber la cantidad. suma la cantidad total. Metodo utilizado: REDUCE. {es para acumular}
    const getItemQuantity = () => {
    return cart.reduce((acc, x) => acc += x.count, 0)
}
    //es un acumulador. Metodo REDUCE. Retorna el precio total del carrito.
    const getItemPrice = () => {
        return cart.reduce((acc, x) => acc += x.count * x.price, 0)
    }
    //va a devolver un objeto, value devuelve una sola cosa entonces en este caso. DEVUELVE UN OBJETO
    return <Provider value={{cart, isInCart, addItem, emptyCart, deleteItem, getItemQuantity, getItemPrice}}>{children}</Provider>
}
export default Myprovider