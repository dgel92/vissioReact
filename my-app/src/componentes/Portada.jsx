import React from 'react'
import '../componentes/sass/main.css';
import tienda from '../multimedia/tienda.jpg';
import {Link} from "react-router-dom";
import Carrousel from '../componentes/Carrousel/Carrousel';

function ItemPortada() {
    <Carrousel/>
    return(
    <>
        <section className='img-tienda'>
            <div>
                <Link to="/"><img src={tienda} alt="" className='img-box1'/></Link>
            </div>
            <div>
                <Link to="/"><img src={tienda} alt="" className='img-box2'/></Link>
            </div>
        </section>
        <div className="text-portada">
            <h2>Objetos con alma, duraderos, funcionaless y sostenibles</h2>
        </div>
    </>
    )
}
export default ItemPortada
