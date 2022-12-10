import React, { Component } from "react";
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import carouselFooter1 from "../../multimedia/carouselfooter-1.jpeg";
import carouselFooter2 from "../../multimedia/carouselfooter-2.jpeg";
import carouselFooter3 from "../../multimedia/carouselfooter-3.jpeg";
import carouselFooter4 from "../../multimedia/carouselfooter-4.jpeg";
import carouselFooter5 from "../../multimedia/carouselfooter-5.jpeg";
import carouselFooter6 from "../../multimedia/carouselfooter-6.jpeg";
import carouselFooter7 from "../../multimedia/carouselfooter-7.jpeg";
import carouselFooter8 from "../../multimedia/carouselfooter-8.jpeg";
import carouselFooter9 from "../../multimedia/carouselfooter-9.jpeg";



function DarkVariantExample() {
    return (
    <div className="carousel-portada2">
        <Carousel dark>
            <Carousel.Item interval={7000}>
                <CardGroup>
                    <Card>
                        <Card.Img className="cardimg d-block w-55" variant="bottom" src={carouselFooter1} />
                    </Card>

                    <Card>
                        <Card.Img className="cardimg d-block w-55" variant="bottom" src={carouselFooter2} />
                    </Card>

                    <Card>
                        <Card.Img className="cardimg d-block w-55" variant="bottom" src={carouselFooter3} />
                    </Card>
                </CardGroup>
            </Carousel.Item>
        
            <Carousel.Item interval={7000}>
                <CardGroup>
                    <Card>
                        <Card.Img className="cardimg d-block w-55" variant="bottom" src={carouselFooter4} />
                    </Card>

                    <Card>
                        <Card.Img className="cardimg d-block w-55" variant="bottom" src={carouselFooter5} />
                    </Card>

                    <Card>
                        <Card.Img className="cardimg d-block w-55" variant="bottom" src={carouselFooter6} />
                    </Card>
                </CardGroup>
            </Carousel.Item>

            <Carousel.Item interval={7000}>
                <CardGroup>
                    <Card>
                        <Card.Img className="cardimg d-block w-55" variant="bottom" src={carouselFooter7} />
                    </Card>

                    <Card>
                        <Card.Img className="cardimg d-block w-55" variant="bottom" src={carouselFooter8} />
                    </Card>

                    <Card>
                        <Card.Img className="cardimg d-block w-55" variant="bottom" src={carouselFooter9} />
                    </Card>
                </CardGroup>
            </Carousel.Item>
        </Carousel>
    </div>
    );
}

export default DarkVariantExample;