import React from "react";
import '../sass/main.css';
import Logo from '../../multimedia/logoSitio3.png';
import { Icon } from '@iconify/react';


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
                    <li><a><span><Icon icon="akar-icons:whatsapp-fill" height="30"/></span></a></li>
                    <li><a><span><Icon icon="akar-icons:facebook-fill" height="30"/></span></a></li>
                    <li><a><span><Icon icon="akar-icons:instagram-fill"  height="30"  /></span></a></li>
                </div>
            <hr></hr>
                <div className="footer-text"><a>Ayuda</a></div>
                <div className="footerlist">
                    <li><a>Contactanos</a></li>
                    <li><span>Cuidados y mantenimiento</span></li>
                    <li><span>Servicio Post-venta</span></li>
                    <li><span>¿Tienes una tienda?</span></li>
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