import React from 'react'
import '../componentes/sass/main.css';
import tienda1 from '../multimedia/brandTienda-2.jpg';
import tienda from '../multimedia/tienda.jpg';
import imgPortada from '../multimedia/imgPortada.jpeg';
import {Link} from "react-router-dom";
import Carrousel from '../componentes/Carrousel/Carrousel';
import DarkVariantExample from './carouselItemCard/CarouselItemCard';



function ItemPortada() {

    const pulsar = ()=>{
        console.log("pulsado")
    }
    return(
    <>
    <Carrousel/>
        <section className='img-tienda' >
            <div className='img-portada'>
                <Link to="/tienda" onClick={()=>{pulsar()}}><img src={tienda1} alt="" className='img-box1'/></Link>
                <div className='txt'><h5>Tienda</h5></div>
            </div>
            <div className='img-portada'>
                <Link to="/sobreNosotros" onClick={()=>{pulsar()}}><img src={tienda} alt="" className='img-box2'/></Link>
                <div className='txt'><h5>Sobre Nosotros</h5></div>
            </div>
        </section>
        <div className="text-portada">
            <h2>Objetos con alma, duraderos, funcionales y sostenibles.</h2>
        </div>
        <section className='img-portada'>
            <Link to="/sobreNosotros"><img src={imgPortada} alt="" className='img-box2'/></Link>
        </section>
    <DarkVariantExample/>
    </>
    )
}
export default ItemPortada

