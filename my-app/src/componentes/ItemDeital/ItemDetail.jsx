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

    if(!dataArrayEstado){
        return<h4>Cargando...</h4>
    }
    else{
    return(
        <>
        <div className="detail-container">
            <Card style={{ width: '40rem' }}>
                <Card.Img variant="top" src={dataArrayEstado.img} />
            </Card>
                <div className="detail-card">
                    <Card.Body>
                            <Card.Title>{dataArrayEstado.nombre}</Card.Title>
                            <Card.Text>
                            Precio: ${dataArrayEstado.precio}
                            </Card.Text>
                            <br/>
                        {isInCart?
                            <Link to="/cart">Ver tu Carrito</Link>
                            :
                            <ItemCount onAdd={onAdd} stock={dataArrayEstado.stock} inicial={1}/>
                        }
                    </Card.Body>
                </div>
        </div>
        </>
        )
    }
}

export default ItemDetail