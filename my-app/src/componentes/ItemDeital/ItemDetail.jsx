import React from "react";
import '../sass/main.css';
import Card from 'react-bootstrap/Card';
import ItemCount from "../ItenCount/ItenCount";
import { useState } from "react";
import useCartContext from "../CartContext/CartContext";
import {Link} from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';


function ItemDetail({dataArrayEstado}){

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
};

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
            <div className="carouselItem-Container">
                <Carousel>
                    <Carousel.Item>
                        <img variant="rop" style={{ width: '60vh' }} src={dataArrayEstado.img} alt={dataArrayEstado.nombre}/>
                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>
                    
                    <Carousel.Item>
                        <img variant="top" style={{ width: '60vh' }} src={dataArrayEstado.img2} alt={dataArrayEstado.nombre}/>
                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img variant="top" style={{ width: '60vh' }} src={dataArrayEstado.img3} alt={dataArrayEstado.nombre}/>
                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>

            <div className="detail-card">
                <Card.Body>
                    <Card.Title className="detail-name"> Lampara {dataArrayEstado.nombre}</Card.Title>
                        <br/>
                        <Card.Text>
                            <h1 className="detail-precio">Precio: $ {dataArrayEstado.precio}</h1>
                        </Card.Text>
                        <Card.Text>
                            <br/>
                            <div className="detail-caracteristica">
                                <h4>Caracteristicas</h4>
                                <h5>Ubicación: {dataArrayEstado.categoria}</h5>
                                <h5>Altura: {dataArrayEstado.alto}</h5>
                                <h5>Diametro: {dataArrayEstado.diametro}</h5>
                                <h5>Lampara: {dataArrayEstado.Tipodelampara}</h5>
                                <h5>{dataArrayEstado.caracteristica}</h5>
                                <h5>Pantallas: {dataArrayEstado.pantallas}</h5>
                                <h5>Colores: {dataArrayEstado.ColoresPantalla}</h5>
                            </div>
                        </Card.Text>
                        <br/>
                        <Card.Text>
                            {isInCart?
                                <Link to="/cart"><Button variant="secondary">Ver tu Carrito</Button></Link>
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



/*
<Slider {...settings}>
                    <div className="card" style={{ width: '42rem' }}>
                        <div className="card-top">
                            <img src={dataArrayEstado.img} alt={dataArrayEstado.nombre}/>
                            <h1>{dataArrayEstado.nombre}</h1>
                        </div>
                        <div className="card-top">
                            <img src={dataArrayEstado.img} alt={dataArrayEstado.nombre}/>
                            <h1>{dataArrayEstado.nombre}</h1>
                        </div>
                    </div>
            </Slider>¨*/