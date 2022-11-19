import React from "react";
import {Link} from "react-router-dom";

function EnviosYDevoluciones(){
    return(
    <>
        <section className="envios-container">
            <div className="envios-title">
                <h1>Pedidos, envíos, cambios y devoluciones.</h1>
            </div>
            <div className="envios-txt">
                <h5>Estas son las condiciones de uso que rigen nuestra Tienda Online. Al realizar una compra en www.vissio-lamparas.com formalizas un contrato con nosotros y te comprometes a aceptar las condiciones de uso de esta web. Por favor lee detenidamente esta información antes de usar nuestro sitio web.
                </h5>
            </div>
            <div className="envios-subtitle">
                <h2>Realizar una Compra.</h2>
                
            </div>
            <div className="envios-txt">
                <h5>Cuando hayas seleccionado el producto de interes y realizado el pedido, te enviaremos un email de confirmacion al correo electronico que nos hayas facilitado en el proceso de compra.<br/><br/>
                Es muy importa que el email y los datos solicitados sean reales y correctos. El tiempo estimado de entrega de un articulo sera dentro de los 5 dias habiles siguientes a la confirmacion de tu compra. Los envios se realizan por articulo (producto), no por partes.
                El destino de envio sera el especificado en el proceso de compra como domicilio de entrega.</h5>
            </div>
            <div className="envios-txt">
                <h5>En el email de confirmacion de compra te enviaremos los link y informacion de los metodos de pago, aceptamos tarjetas de credito, debito (visa o mastercard), como tambien transferencias bancarias, toda la informacion pertinente para esta opcion te la enviaremos con el email de compra.</h5>
            </div>
            <div className="envios-subtitle">
                <h2>Envio.</h2>
            </div>
            <div className="envios-txt">
                <h5>El tiempo estimado de entrega de un articulo sera dentro de los 5 dias habiles siguientes a la confirmacion de tu compra. Los envios se realizan por pedido (producto completo), no por partes.<br/><br/>
                Los envios se despachan de lunes a viernes en nuestro horario de trabajo que es de 08 a 18hrs, compras o pagos efectuados dias no habiles o feriados, seran despachados el primer dia habil que corresponda.<br/><br/>
                Recuerda que al momento de generar la compra, segun tu localidad, modo de envio y retiro, te enviaremos el costo de envio que debe ser cancelado de manera exacta para proceder a enviar tu producto.</h5>           
            </div>
            <div className="envios-subtitle">
                <h2>Demoras en envio</h2>
            </div>
            <div className="envios-txt">
                <h5>En el caso de que el pedido no llegue en el plazo fijado, puedes contactarnos por nuestras redes sociales y al email xxx@xxx asi te notificaremos del estado de tu envio y cual es el inconveniente.
                </h5>
            </div>
            <div className="envios-subtitle">
                <h2>Precios, envio y otros cargos.</h2>
            </div>
            <div className="envios-txt">
                <h5>Todos los productos mostrados en nuestro catalogo online incluyen el IVA de conformidad con la ley aplicable.<br/><br/>
                Nos reservamos el derecho a modificar los precios de nuestros productos siempre que consideremos oportuno, pero en ningún caso estos cambios afectarán a un pedido ya realizado.<br/><br/>
                Nuestro sitio web contiene múltiples productos, es posible que, a pesar de nuestro esfuerzo, algunos precios sean incorrectos. Nos pondremos en contacto contigo mediante la dirección de correo electrónico proporcionada durante el proceso de pedido.<br/><br/>
                
                Si tu pedido tiene como destino una dirección fuera de la Provincia de Cordoba, te enviaremos al correo electronico que nos proporcionaste las opciones y costos de envio a tu destino, dicho monto debera abonarse cuando éste llegue a la dirección de entrega. Esta eventualidad en los envios se debe a la naturaleza de nuestros productos y por el cuidado que queremos proporcionar al enviarlo.
                <br/><br/>
                La elaboracion del producto comienza cuando el pago a sido confirmado y la fabricacion lleva un tiempo de "x dias". Preparamos los pedidos de Lunes a Viernes de "xx a xxhrs".<br/><br/> Las encomiendas no son enviadas los dias sabados, domingos o festivos, y en dichos casos que el producto requiera de un mayor tiempo de espera para ser enviado nos contactaremos contigo para confirmar si estas de acuerdo a lo informado.
                <br/><br/>
                Cuando el pedido salga de nuestro almacen te enviaremos un email informativo para que puedas realizar su seguimiento.
                </h5>
            </div>
            <div className="envios-subtitle">
                <h2>¿Qué hacer si mi pedido no llega en buen estado?</h2>
            </div>
            <div className="envios-txt">
                <h5>Preparamos cuidadosamente nuestros productos para evitar cualquier daño que pudiera producirse durante su envío. <br/><br/>
                Es tu responsabilidad inspeccionar tu pedido y si no llega en buen estado, debes comunicárnoslo en un plazo de 48 hrs desde su recepción, facilitándonos: el número de pedido, la causa de la reclamación y una fotografía del artículo. 
                <br/><br/>
                Te responderemos asesorándote sobre la mejor solución, incluyendo las opciones de devolución o reparación. Sólo reemplazamos artículos que están verdaderamente dañados.</h5>
            </div>
            <hr/>
            <div className="envios-title">
                <h1>Cambios y devoluciones</h1>
            </div>
            <div className="envios-subtitle">
                <h2>¿Puedo cambiar o devolver un artículo?</h2>
            </div>
            <div className="envios-txt">
                <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat earum eum dolore blanditiis repudiandae delectus nihil, incidunt repellat dolorem est! Tempora atque, doloremque voluptatem similique enim libero adipisci quas consequuntur!.</h5>
            </div>
            <div className="envios-subtitle">
                <h2>¿En qué condiciones puedo cambiar un producto?</h2>
            </div>
            <div className="envios-txt">
                <h5>Para cambiar o devolver un producto es imprescindible que se envíe en su embalaje original, se encuentre en perfecto estado y no presente signos evidentes de uso, de lo contrario no podrá ser cambiado o devuelto.<br/><br/>
                    Utilizamos materiales de alta calidad, en el caso de la madera presenta marcas naturales que nosotros consideramos una virtud porque aporta detalles únicos a cada pieza que trabajamos.<br/><br/>Estas marcas pueden ser: variaciones en su grano, color o nudos en la madera. No aceptaremos cambios basados en este tipo de marcas. <br/><br/>
                    En caso de que estas marcas propias del material tengan una incidencia en la funcionalidad del producto, repararemos el desperfecto y te mantendremos informado a través del correo electronico que nos proporcionaste al contactarte con nosotros.</h5>
            </div>
            <div className="envios-subtitle">
                <h2>¿Quién se responsabiliza de los gastos de envío por cambio o devolución?</h2>
            </div>
            <div className="envios-txt">
                <h5>Los gastos asociados a los cambios y devoluciones correrán siempre a cargo del comprador.
                En caso de cambios, podemos facilitarte la recogida a través de nuestras empresas de envío habituales. El coste de tramitar un cambio será el correspondiente al coste del envío del nuevo producto y recogida del artículo cambiado.
                </h5>
            </div>
            <div className="envios-subtitle">
                <h2>¿Qué debo hacer para realizar un cambio?</h2>
            </div>
            <div className="envios-txt">
                <h5>Escríbenos un email a xxx@xxx.com avisándonos de tu intención de cambiar un artículo, en un plazo no superior a 14 días naturales desde la fecha de recepción del producto. Te indicaremos como proceder. Para ayudarnos a mejorar, te agradecemos que nos hagas saber el motivo del cambio.
                <br/><br/>
                Cuando tu cambio haya sido aprobado, te solicitaremos que despaches el producto a cambiar para poder proceder con el envio del nuevo artículo. en un servicio de retorno, es decir, el mensajero te entregará el nuevo producto y recogerá el producto que quieres cambiar. Es importante que tengas preparado el producto que quieres cambiar, debidamente embalado. En caso de no hacer entrega del artículo que quieres cambiar, el mensajero no podrá entregarte el nuevo articulo. Asegúrate de rellenar el formulario para cambios y devoluciones que te facilitaremos y de incluirlo en el paquete que vas a devolver.
                En caso de querer cambiar un artículo por otro de diferente importe, la diferencia se cargará o abonará mediante transferencia bancaria.
                Para cambios de carácter internacional, ponte en contacto con nosotros, te informaremos del procedimiento a seguir.
                </h5>
            </div>
            <hr/>
            <div className="envios-txt">
                <h5>Esperamos haber podido resolver todas tus inquietudes, en caso de tener alguna consulta en particular te puedes comunicar con nosotros a traves de la seleccion Contactanos, por nuestrass redes sociales o a traves del correo electronico xxx@visiolamparas.com y te responderemos a la brevedad.</h5>
            </div>
        </section>
        <hr/>
    </>
    )
}

export default EnviosYDevoluciones
