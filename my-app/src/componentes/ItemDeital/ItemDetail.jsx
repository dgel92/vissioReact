import React from "react";
import '../sass/main.css';
import Card from 'react-bootstrap/Card';
import dataArray from "../data/data";

function ItemDetail({dataArray}){
    return(
        <>
        <Card style={{ width: '20rem' }}>
            <Card.Img alt="" variant="top" src={dataArray.img} />
            <Card.Body>
                <Card.Title>{dataArray.nombre}</Card.Title>
                <Card.Text>
                Precio: ${dataArray.precio}
                </Card.Text>
                <br/>
            </Card.Body>
        </Card>
        </>
    )
}

export default ItemDetail