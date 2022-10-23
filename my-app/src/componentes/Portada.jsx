import React from 'react'
import '../componentes/sass/main.css';
import tienda from '../multimedia/tienda.jpg';
import {Link} from "react-router-dom";
import Carrousel from '../componentes/Carrousel/Carrousel';
import CenterMode from './carouselItemCard/CarouselItemCard';


function ItemPortada() {

    const pulsar = ()=>{
        console.log("pulsado")
    }
    return(
    <>
    <Carrousel/>
        <section className='img-tienda' >
            <div className='img-portada'>
                <Link to="/tienda" onClick={()=>{pulsar()}}><img src={tienda} alt="" className='img-box1'/></Link>
                <div className='txt'><h5>Tienda</h5></div>
            </div>
            <div className='img-portada'>
                <Link to="/sobreNosotros" onClick={()=>{pulsar()}}><img src={tienda} alt="" className='img-box2'/></Link>
                <div className='txt'><h5>Sobre Nosotros</h5></div>
            </div>
        </section>
        <div className="text-portada">
            <h2>Objetos con alma, duraderos, funcionaless y sostenibles</h2>
        </div>
        <section className='img-portada'>
            <Link to="/sobreNosotros"><img src={tienda} alt="" className='img-box2'/></Link>
        </section>
        <div className="text-portada">
            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi ut similique id, architecto repellat ratione, exercitationem obcaecati veritatis voluptatem adipisci sed accusamus quidem minima magnam quis? Natus neque tempore deleniti molestias dignissimos commodi nesciunt praesentium nihil officia eaque nemo adipisci doloribus, veritatis, aut tempora, optio error cupiditate nisi eius id.</h3>
        </div>
        <CenterMode/>
    </>
    )
}
export default ItemPortada

