import React from "react";
import '../sass/main.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Link} from "react-router-dom";

function Item({dataArray}){
    return(
        <>
        <Card style={{ width: '20rem' }}>
            <Card.Img variant="top" className="img-item" src={dataArray.img} />
            <Card.Body>
                <Card.Title>{dataArray.nombre}</Card.Title>
                <Card.Text>
                Precio: ${dataArray.precio}
                </Card.Text>
                <br/>
                <Link to={`/Producto/${dataArray.id}`}><Button variant="secondary">Ver mas</Button></Link>
            </Card.Body>
        </Card>
        </>
    )
}

export default Item