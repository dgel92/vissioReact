import React from 'react'
import useCartContext from '../CartContext/CartContext'
import {Link} from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function CartView(){
    const {cart, removeFromCart, clearCart, getTotalPrice} = useCartContext();
    console.log("CART", cart)

    if(cart.length === 0){
        return(
            <div className="cart-container">
            <h3>No hay items en el carrito</h3>
            <Link to="/tienda"><Button className="button-volver" variant="secondary">Volver al catalogo</Button></Link>
            </div>
        )
    }
    else { 
        return <div className="cartView">
            {cart.map(itemCart =>{
            return <div className="container" key={itemCart.id}>
                <div className="cart-title">
                    <img style={{width: '4rem'}} src={itemCart.img} alt={itemCart.nombre}/>
                    <h2>Lampara {itemCart.nombre}</h2>
                </div>
                <div className="precio">
                    <h2>Cantidad: {itemCart.cant}</h2>
                    <h2>Costo unitario: ${itemCart.precio}</h2>
                    <h2>Precio total: $ {itemCart.precio * itemCart.cant}</h2>
                    <button className="buttonEliminar" onClick={()=>removeFromCart(itemCart.id)}style={{color:"red"}}>X</button>
                </div>
            </div>
            })}
            <div className="vaciarCarrito">
                <Button variant="secondary" onClick={clearCart}>Vaciar Carrito</Button>
                <Link to="/Checkout" className="checkout"><Button variant="primary">Finalizar Compra</Button></Link>
            </div>
        </div>}
        }

export default CartView


