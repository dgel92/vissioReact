import React from 'react';
import '../sass/main.css';
import Logo from '../../multimedia/logoSitio3.png';
import CartWidget from '../CartWidget.jsx/CartWidget';
import {Link} from "react-router-dom";
import useCartContext from '../CartContext/CartContext';



function NavBar(){
    const {contextFunction} = useCartContext();
    contextFunction();
    return(
        <>
            <div class="navlineaNegrita"><p>Envios a todo el pais - </p></div>
                <header class="navcontainer">
                        <Link to="/" class="brand"><img width="260" src={Logo} alt="logo tienda"/></Link>
                        <nav id="nav">
                            <section class="navbar">
                                <div class="menuNav">
                                    <ul class="menu">
                                        <li><Link to="/">Inicio</Link></li>
                                        <li><Link to="/tienda">Tienda</Link></li>
                                        <li><Link to="/sobreNosotros">Sobre nosotros</Link></li>
                                    </ul>
                                </div>
                            </section>
                        </nav>
                        <div><CartWidget/></div>
                </header>
        </>
        )}

export default NavBar