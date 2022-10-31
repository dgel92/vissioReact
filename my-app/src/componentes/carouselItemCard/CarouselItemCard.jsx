import React, { Component } from "react";
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import anoximenes4 from "../../multimedia/anoximenes-5.jpg";
import alain4 from "../../multimedia/alain-5.jpg";
import alain5 from "../../multimedia/alain-6.jpg";
import badiou4 from "../../multimedia/badiou-5.jpg";
import barcelona4 from "../../multimedia/barcelona-5.jpg";



function DarkVariantExample() {
    return (
    <div className="carousel-portada2">
        <Carousel dark>
            <Carousel.Item interval={7000}>
                <CardGroup>
                    <Card>
                        <Card.Img className="cardimg d-block w-55" variant="bottom" src={anoximenes4} />
                    </Card>

                    <Card>
                        <Card.Img className="cardimg d-block w-55" variant="bottom" src={anoximenes4} />
                    </Card>

                    <Card>
                        <Card.Img className="cardimg d-block w-55" variant="bottom" src={anoximenes4} />
                    </Card>
                    <Card>
                        <Card.Img className="cardimg d-block w-55" variant="bottom" src={anoximenes4} />
                    </Card>
                </CardGroup>
            </Carousel.Item>
        
            <Carousel.Item interval={7000}>
                <CardGroup>
                    <Card>
                        <Card.Img className="cardimg d-block w-55" variant="bottom" src={anoximenes4} />
                    </Card>

                    <Card>
                        <Card.Img className="cardimg d-block w-55" variant="bottom" src={anoximenes4} />
                    </Card>

                    <Card>
                        <Card.Img className="cardimg d-block w-55" variant="bottom" src={anoximenes4} />
                    </Card>
                    <Card>
                        <Card.Img className="cardimg d-block w-55" variant="bottom" src={anoximenes4} />
                    </Card>
                </CardGroup>
            </Carousel.Item>

            <Carousel.Item interval={7000}>
                <CardGroup>
                    <Card>
                        <Card.Img className="cardimg d-block w-55" variant="bottom" src={anoximenes4} />
                    </Card>

                    <Card>
                        <Card.Img className="cardimg d-block w-55" variant="bottom" src={anoximenes4} />
                    </Card>

                    <Card>
                        <Card.Img className="cardimg d-block w-55" variant="bottom" src={anoximenes4} />
                    </Card>
                    <Card>
                        <Card.Img className="cardimg d-block w-55" variant="bottom" src={anoximenes4} />
                    </Card>
                </CardGroup>
            </Carousel.Item>
        </Carousel>
    </div>
    );
}

export default DarkVariantExample;