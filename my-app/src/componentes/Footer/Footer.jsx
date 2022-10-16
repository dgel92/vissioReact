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
                    <li><Link to="/contactanos" className="links">Contactanos</Link></li>
                    <li><Link to="/CuidadosYMantenimiento" className="links">Cuidados y mantenimiento</Link></li>
                    <li><Link to="/PostVenta" className="links">Servicio Post-venta</Link></li>
                    <li><Link to="/contactanos" className="links">¿Tienes una tienda?</Link></li>
                </div>
            <hr></hr>
                <div className="footer-text"><a>Importante</a></div>
                <div className="footerlist">
                    <li><Link to="/EnviosPedidosYDevoluciones" className="links">Pedidos, envios y devoluciones</Link></li>
                    <li><Link to="/contactanos" className="links">Encargar a medida</Link></li>
                    <li><Link to="/AvisosLegales" className="links">Aviso Legal</Link></li>
                </div>
                    <div className="footerFinal"></div>
            </section>
        </>
    )
}

export default Footer
