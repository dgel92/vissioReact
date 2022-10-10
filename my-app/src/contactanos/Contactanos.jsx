import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import imgFormularioContacto from '../multimedia/imgFormularioContacto.jpg';

function Contactanos() {
    return (
        <>
        <section className='formularioContacto'>
            <div>
                <h1>Contacto</h1>
            </div>
            <div className='imagenFormulario'>
                <img src={imgFormularioContacto} alt="imagen de formulario"/>
            </div>
            <div>
                <h4>Si estas interesado en encargar algo a medida, tienes un proyecto creativo en mente que te gustaria contarnos, puedes escribirnos a hola@vissio.com o rellena el siguiente formulario aqui abajo y nos pondremos en contacto contigo lo antes posible.</h4>    
            </div>
            <Form className='form' id="form">
                <fieldset actived>
                    <Form.Group className="mb-3">
                        <Form.Label type="text" htmlFor="disabledTextInput">Nombre</Form.Label>
                        <Form.Control placeholder="Tu nombre" name="name"/>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label type="email" htmlFor="disabledTextInput">correo electrónico</Form.Label>
                        <Form.Control placeholder="tu@email.com" name="email"/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label type="number" htmlFor="disabledTextInput">Teléfono</Form.Label>
                        <Form.Control placeholder="12345678" name="phone"/>
                    </Form.Group>
                    
                    <Form.Group className="mb-3">
                        <Form.Group className="mb-3">
                        <Form.Label>Tu mensaje</Form.Label>
                        <Form.Control as="textarea" rows={3} name="menssage"/>
                    </Form.Group>
                    </Form.Group>
                    <Button type="submit" id="button">Enviar</Button>
                </fieldset>
                </Form>
            </section>
            </>
    );
}

export default Contactanos;
