import React from 'react'
import '../componentes/sass/main.css';
import tienda from '../multimedia/tienda.jpg';
import {Link} from "react-router-dom";
import Card from 'react-bootstrap/Card';

function SobreNosotros() {
    return(
        <>
        <div className='sobreNosotros-container'>
            <section className='sobreNosotros-imgPortada'>
                <Card style={{ width:'60rem'}} >
                    <Card.Img variant="top" src={tienda} />
                </Card>
            </section>
                <div className='sobreNosotros-tittle'>
                    <h4>
                        La luz es el ingrediente mágico que hace o modifica un espacio. Es uno de los elementos mas importantes en todos los interiores.<br/><br/>"Benjamín Noriega".
                    </h4>
                </div>
                <hr></hr>
                <div className='sobreNosotros-text'>
                    <p>Cuando nuestros clientes adquieren una lampara buscamos que su experiencia de compra sea la mejor de inicio a fin, buscamos entender sus preferencias y necesidades.</p>
                </div>
                <div className='sobreNosotros-text'>
                    <p>Somos un emprendimiento que nacio en el periodo de la pandemia, iniciamos desde el primer dia que existiera conexión y coherencia entre lo que producimos, nuestra vida y nuestra forma de entender el mundo. Al ser fabricantes en nuestro taller podemos transmitir todo lo que creemos a través de lo que creamos.<br></br><br></br>
                        Hemos desarrollado un proceso creativo particular y orgánico, donde las ideas  y su desarrollo pueden estar basadas en nuestros conocimientos como diseñadores o en nuestro ejercicio como artesanos, sin que haya una línea divisoria entre ambos. Ese todo indivisible entre diseño y artesanía es nuestro rasgo distintivo.
                        Entre nuestros ideales se encuentra ofrecer una opción de consumo consciente: creamos objetos que por su diseño, elaboración, materiales y funcionalidad, consigan que nos paremos a pensar qué tipo de relación mantenemos con las cosas que nos rodean, si somos capaces de apreciar su valor y significado, para de este modo, hacernos más coherentes con nuestros hábitos de vida y consumo.</p>
                </div>
                <Card style={{ width: '80rem' }} className='sobreNosotros-imgPortada'>
                    <Card.Img variant="top" src={tienda} />
                </Card>
        </div>
        </>
        )
}
export default SobreNosotros