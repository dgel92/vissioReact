import React from 'react'
import useCartContext from '../CartContext/CartContext'


function CartView(){
    const {cart} = useCartContext();
    console.log("CART", cart)
    return(
        <div>CartView</div>
    )
}

export default CartView


// clase 11 min 13.40//