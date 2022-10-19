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
            <Card style={{ width: '42rem' }}>
                <Card.Img variant="top" src={dataArrayEstado.img} />
            </Card>
                <div className="detail-card">
                    <Card.Body>
                            <Card.Title className="detail-name"> Lampara {dataArrayEstado.nombre}</Card.Title>
                            <Card.Text className="detail-precio">
                            Precio: ${dataArrayEstado.precio}
                            </Card.Text>
                            <h4>Caracteristica<br/></h4>
                            <Card.Text className="detail-caracteristica">
                                {dataArrayEstado.caracteristica}
                            </Card.Text>
                            <br/>
                            <Card.Text>
                                {isInCart?
                                    <Link to="/cart">Ver tu Carrito</Link>
                                    :
                                    <ItemCount onAdd={onAdd} stock={dataArrayEstado.stock} inicial={1}/>
                                }
                            </Card.Text>
                    </Card.Body>
                </div>
        </div>
        </>
        )
    }
}

export default ItemDetail