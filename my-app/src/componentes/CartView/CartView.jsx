import React from 'react'
import useCartContext from '../CartContext/CartContext'
import {Link} from "react-router-dom";

function CartView(){
    const {cart, removeFromCart, clearCart} = useCartContext();
    console.log("CART", cart)

    if(cart.length === 0){
        return(
            <div>
            <h3>No hay items en el carrito</h3>
            <Link to="/tienda">Volver al catalogo</Link>
            </div>
        )
    }
    else {
        return <div>
            {cart.map(itemCart =>{
            return <div key={itemCart.id}>
                <h2>{itemCart.nombre}</h2>
                <h2>{itemCart.precio}</h2>
                <h2>{itemCart.precio * itemCart.cant}</h2>
                <button onClick={()=>removeFromCart(itemCart.id)}style={{color:"red"}}>X</button>
            </div>
            
            })}
            <button onClick={clearCart}>Vaciar Carrito</button>
        </div>}
    }

export default CartView


// clase 11 min 13.40//