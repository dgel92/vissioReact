import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import imgFormularioContacto from '../multimedia/imgFormularioContacto.jpg';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
    const Form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_6ycvs8o', 'template_gvdoo0l', e.target, 'r-foasPasxzvfpP4C')
        .then((result) => {
            alert(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };

    return (
        <section className='formularioContacto'>
            <div>
                <h1>Contacto</h1>
            </div>
            <div className='imagenFormulario'>
                <img src={imgFormularioContacto} alt="imagen de formulario"/>
            </div>
            <div>
                <h4>Si estas interesado en encargar algo a medida, tienes un proyecto creativo en mente que te gustaria contarnos o ¿tienes una tienda? <br/><br/>
                Puedes escribirnos a hola@vissio.com o rellena el siguiente formulario aqui abajo y nos pondremos en contacto contigo lo antes posible.</h4>    
            </div>
            <Form className='form' id="form" onSubmit={sendEmail}>
                <fieldset actived>
                    <Form.Group className="mb-3">
                        <Form.Label type="text" htmlFor="disabledTextInput">Nombre</Form.Label>
                        <Form.Control placeholder="Tu nombre" name="name" required/>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label type="email" htmlFor="disabledTextInput">correo electrónico</Form.Label>
                        <Form.Control placeholder="tu@email.com" name="email" required/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label type="number" htmlFor="disabledTextInput">Teléfono</Form.Label>
                        <Form.Control placeholder="12345678" name="phone" required/>
                    </Form.Group>
        
                    <Form.Group className="mb-3">
                        <Form.Label type="text">Tu mensaje</Form.Label>
                        <Form.Control placeholder="mensaje" as="textarea" rows={3} name="message" required/>
                    </Form.Group>
                    <Button type="submit" id="button">Enviar</Button>
                </fieldset>
                </Form>
        </section>
    );
};
