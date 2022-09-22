import React from "react";
import '../sass/main.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Item({dataArray}){
    return(
        <>
        <Card style={{ width: '20rem' }}>
            <Card.Img variant="top" src={dataArray.img} />
            <Card.Body>
                <Card.Title>{dataArray.nombre}</Card.Title>
                <Card.Text>
                Precio: ${dataArray.precio}
                </Card.Text>
                <br/>
                <Button variant="secondary">Ver mas</Button>
            </Card.Body>
        </Card>
        </>
    )
}

export default Item