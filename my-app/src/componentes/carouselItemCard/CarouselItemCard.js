import React, { Component } from "react";
import Slider from "react-slick";
import anoximenes4 from "../../multimedia/anoximenes-5.jpg";
import alain4 from "../../multimedia/alain-5.jpg";
import alain5 from "../../multimedia/alain-6.jpg";
import badiou4 from "../../multimedia/badiou-5.jpg";
import barcelona4 from "../../multimedia/barcelona-5.jpg";


export default class CenterMode extends Component {
    render() {
        const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 1500,
        };
        return (
        <div className="carousel-portada2">
            <Slider {...settings}>
            <div>
                <img variant="rop" style={{ width: '18rem' }} src={anoximenes4}/>
            </div>
            <div>
                <img variant="rop" style={{ width: '18rem' }} src={badiou4}/>
            </div>
            <div>
                <img variant="rop" style={{ width: '18rem' }} src={barcelona4}/>
            </div>
            <div>
                <img variant="rop" style={{ width: '18rem' }} src={alain4}/>
            </div>
            <div>
            <img variant="rop" style={{ width: '18rem' }} src={alain5}/>
            </div>
            </Slider>
        </div>
        );
    }
}





