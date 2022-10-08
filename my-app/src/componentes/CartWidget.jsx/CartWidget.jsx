import React from "react";
import { Icon } from '@iconify/react';
import useCartContext from "../CartContext/CartContext";
import {Link} from "react-router-dom";

function CartWidget(){
  
  const {cantInCart}=useCartContext();
  return(
    <div>
      <div>
        <Link to={"/cart"}><Icon icon="el:shopping-cart-sign" color="#220" height="40" /></Link>
      </div>
      <div className='carrito'>{cantInCart()}</div>
    </div>
  )
}

export default CartWidget