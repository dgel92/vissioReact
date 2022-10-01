import React from "react";
import '../sass/main.css';
import Card from 'react-bootstrap/Card';
import ItemCount from "../ItenCount/ItenCount";
import { useState } from "react";

function ItemDetail({dataArrayEstado}){

    const [isInCart, setIsInCount] = useState(false)
    function onAdd(count){
        console.log(`agregaste al carrito ${count}`)
        setIsInCount(true);


    }
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
            <button>Ver tu Carrito</button>
            :
        <ItemCount onAdd={onAdd} stock={dataArrayEstado.stock} inicial={1}/>
        }
        </>
    )
}

export default ItemDetail