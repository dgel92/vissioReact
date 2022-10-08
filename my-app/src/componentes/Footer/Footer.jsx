import React from "react";
import '../sass/main.css';
import Logo from '../../multimedia/logoSitio3.png';
import { Icon } from '@iconify/react';
import {Link} from "react-router-dom";

function Footer(){
    return(
        <>
        <section>
            <div className="logoFooter">
                <img width="260" src={Logo} alt="logo tienda"/>
            </div>
                
            <hr></hr>
            <div className="footer-text"><a>Siguenos</a></div>
                <div className="footerMenu">
                    <li><a href="https://wa.me/5493514597445"><Icon icon="logos:whatsapp-icon" height="50"/></a></li>
                    <li><a href="https://www.facebook.com/profile.php?id=100066980554240"><Icon icon="logos:facebook" height="50"/></a></li>
                    <li><a href="https://www.instagram.com/vissio_lamparas/"><Icon icon="ant-design:instagram-outlined" color="black" height="60"/></a></li>
                </div>
            <hr></hr>
                <div className="footer-text"><a>Ayuda</a></div>
                <div className="footerlist">
                    <li><Link to="/contactanos">Contactanos</Link></li>
                    <li><Link to="/CuidadosYMantenimiento">Cuidados y mantenimiento</Link></li>
                    <li><Link to="/PostVenta">Servicio Post-venta</Link></li>
                    <li><Link to="/TenesUnaTienda">¿Tienes una tienda?</Link></li>
                </div>
            <hr></hr>
                <div className="footer-text"><a>Importante</a></div>
                <div className="footerlist">
                    <li><span>Pedidos, envios y devoluciones</span></li>
                    <li><span>Encargar a medida</span></li>
                    <li><span>Aviso Legal</span></li>
                    <li><span>Privacidad y Cookies</span></li>
                </div>
                    <div className="footerFinal"></div>
            </section>
        </>
    )
}

export default Footer