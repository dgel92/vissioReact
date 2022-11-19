import React from "react";
import {Link} from "react-router-dom";

function PostVenta(){
    return(
        <section className="envios-container">
            <div className="envios-title">
                <h1>Terminos y condiciones de compra.</h1>
            </div>
            
            <div className="envios-subtitle">
                <h2>Garantia</h2>
                
            </div>
            <div className="envios-txt">
                <h5>En Vissio Lamparas ofrecemos la siguiente garantia limitada aplicable unicamente a los compradores originales de nuestros productos.<br/><br/>Para cualquier servicio o pregunta relacionada con la garantía debes remitirnos la factura de compra. En caso de no disponer de ella no podremos ofrecerle ninguna garantía.
                </h5>
            </div>
            <div className="envios-subtitle">
                <h2>Condiciones de la garantia</h2>
            </div>
            <div className="envios-txt">
                <h5>Todos los artículos disponen de una garantía de 1 año desde la fecha de entrega del pedido. Estudiaremos en cada caso el motivo del desperfecto y la garantía sólo será aplicable a artículos que presenten defectos de fabricación. Durante este periodo nos comprometemos a reparar o sustituir las piezas defectuosas sin coste alguno.<br/><br/>
                Los gastos de envío ocasionados por devoluciones relacionadas con el servicio de garantía serán gratis para ti.<br/><br/>
                Si quieres seguir beneficiándote de la garantía de tu producto, durante su periodo de duración todas las reparaciones deberán ser realizadas por Vissio Lamparas o alguien autorizado por nosotros.<br/><br/>
                Todas las piezas pertenecientes al producto original que sean remplazadas pasarán a ser propiedad nuestra.<br/><br/>
                Si el producto presenta alguna modificación o adición respecto al original, no queda cubierto por esta garantía.<br/><br/>
                No nos renposabilizamos por pérdidas, gastos, inconvenientes o daños que puedan resultar del mal uso de los productos. Para mantener nuestras piezas en perfecto estado, sigue nuestros consejos de “Cuidados y mantenimiento”.<br/><br/>
                Vissio Lamparas no se hará responsable bajo esta garantía de los daños resultantes de: uso indebido, abuso, negligencia, envío o instalación incorrectos, desastres (tales como fuego, inundación o terremoto), servicio o alteración por cualquier persona no autorizada por Taller Piccolo o daños incurridos mediante uso irresponsable.<br/><br/>
                Vissio Lamparas no se responsabilizara  bajo ninguna circunstancia de pérdidas, costo, gasto, inconveniente o daño que exceda el precio de compra de los productos.
                </h5>
            </div>
            <div className="envios-subtitle">
                <h2>¿Como solicito el servicio de garantia?</h2>
            </div>
            <div className="envios-txt">
                <h5>Debes seguir este procedimiento para obtener el servicio de garantía: <br/><br/><br/>
                    <ul>
                        <ol>
                            <li>Ponte en contacto con nosotros escribiéndonos un mail a hola@xxxx.com en el que nos comuniques cuál es el problema, documentándolo con fotografías. Si el articulo ha sufrido previamente alguna modificación debes advertírnoslo. Te responderemos indicándote si la garantía puede ejecutarse.</li><br/><br/>
                            <li>En caso afirmativo, coloca el producto bien protegido en una caja, en condiciones similares a cómo fue entregado.</li><br/><br/>
                            <li>Nos responsabilizaremos de los gastos de envío. El cliente asume la responsabilidad total por pérdidas o daños resultantes del envío, así como toda la responsabilidad en caso de seleccionar un transportista a su elección.</li><br/><br/>
                        </ol>
                    </ul>
                </h5>
            </div>
        </section>
    )
}

export default PostVenta
