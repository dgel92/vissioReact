import React from "react";
import '../sass/main.css';
import Card from 'react-bootstrap/Card';
import ItemCount from "../ItenCount/ItenCount";
import { useState } from "react";
import useCartContext from "../CartContext/CartContext";
import {Link} from "react-router-dom";

function ItemDetail({dataArrayEstado}){

    const [isInCart, setIsInCount] = useState(false)
    const {addToCart}= useCartContext();
    
    function onAdd(count){
        setIsInCount(true);
        addToCart(dataArrayEstado, count)
        console.log("agregado al cart: ", dataArrayEstado, count)
    };
    return(
        <>
        <Card style={{ width: '20rem' }}>
            <Card.Img variant="top" src={dataArrayEstado.img} />
            <Card.Body>
                <Card.Title>{dataArrayEstado.nombre}</Card.Title>
                <Card.Text>
                Precio: ${dataArrayEstado.precio}
                </Card.Text>
                <br/>
            </Card.Body>
        </Card>
        {isInCart?
            <Link to="/cart">Ver tu Carrito</Link>
            :
        <ItemCount onAdd={onAdd} stock={dataArrayEstado.stock} inicial={1}/>
        }
        </>
    )
}

export default ItemDetail