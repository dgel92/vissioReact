import React from "react";
import '../sass/main.css';
import Card from 'react-bootstrap/Card';
import ItemCount from "../ItenCount/ItenCount";

function ItemDetail({dataArrayEstado}){
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

        <ItemCount stock={dataArrayEstado.stock} inicial={1}/>
        </>
    )
}

export default ItemDetail