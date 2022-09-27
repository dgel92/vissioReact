import Brand from "../../multimedia/brand-carrousel.jpg"
import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';


    function Carrousel() {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img className="d-block w-100" src={Brand} alt="First slide"/>
                    <Carousel.Caption></Carousel.Caption>
                </Carousel.Item>
                
                <Carousel.Item>
                    <img
                    className="d-block w-100" src={Brand} alt="Second slide"/>
                    <Carousel.Caption></Carousel.Caption>
                </Carousel.Item>
                
                <Carousel.Item>
                    <img className="d-block w-100" src={Brand} alt="Third slide"/>
                    <Carousel.Caption></Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default Carrousel;

