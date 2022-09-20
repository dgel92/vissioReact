import React from 'react';
import '../sass/main.css';
import Logo from '../../multimedia/logoSitio3.png';
import CartWidget from '../CartWidget/CartWidget';


function NavBar(){
    return(
        <>
        <div class="navlineaNegrita"><p>Envios a todo el pais - </p></div>
            <header class="navcontainer">
                    <a href="/index.html" class="brand"><img width="260" src={Logo} alt="logo tienda"/></a>
                    <nav id="nav">
                        <section class="navbar">
                            <div class="menuNav">
                                <ul class="menu">
                                    <li><a href="./pages/tienda.html">Tienda</a></li>
                                    <li><a href="./pages/aMedida.html">A medida</a></li>
                                    <li><a href="./pages/sobreNosotros.html">Sobre nosotros</a></li>
                                    <li><a href="./pages/cuidadosYMantenimiento.html">Cuidados y mantenimiento</a></li>
                                </ul>
                            </div>
                        </section>
                    </nav>
                    <div><CartWidget/></div>
            </header>
        </>
        )}

export default NavBar