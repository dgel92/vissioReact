import Brand from "../../multimedia/imgcarousel-2.jpeg"
import Brand2 from "../../multimedia/imgcarousel-2.jpeg"
import Brand3 from "../../multimedia/imgcarousel-3.jpeg"
import Brand4 from "../../multimedia/imgcarousel-4.jpeg"
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
                    className="d-block w-100" src={Brand2} alt="Second slide"/>
                    <Carousel.Caption></Carousel.Caption>
                </Carousel.Item>
                
                <Carousel.Item>
                    <img className="d-block w-100" src={Brand3} alt="Third slide"/>
                    <Carousel.Caption></Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src={Brand4} alt="Third slide"/>
                    <Carousel.Caption></Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default Carrousel;