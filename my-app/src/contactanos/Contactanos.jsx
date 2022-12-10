import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import imgcontactanos from "../multimedia/imgcontactanos.jpeg";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
    const form = useRef();
        const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_6ycvs8o', 'template_gvdoo0l', form.current, 'r-foasPasxzvfpP4C')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        };

        return (
            <>
                <div className='imagenFormulario'>
                    <img src={imgcontactanos} alt="imagen de formulario"/>
                </div>
                <form ref={form} onSubmit={sendEmail}>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1" type="text" name="user_name" required>Nombre</InputGroup.Text>
                        <Form.Control
                        placeholder="Nombre"
                        aria-label="Nombre"
                        aria-describedby="basic-addon1"
                        />
                    </InputGroup>
                
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1" type="email" name="user_email" required>Email</InputGroup.Text>
                        <Form.Control
                        placeholder="Email"
                        aria-label="Email"
                        aria-describedby="basic-addon1"
                        />
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1" type="telefono" name="user_telefono" required>Telefono</InputGroup.Text>
                        <Form.Control
                        placeholder="Telefono"
                        aria-label="Telefono"
                        aria-describedby="basic-addon1"
                        />
                    </InputGroup>        
                    <InputGroup>
                        <InputGroup.Text >Mensaje</InputGroup.Text>
                        <Form.Control as="textarea" aria-label="With textarea" type="message" name="user_telefono" required />
                    </InputGroup>

                    <input type="submit" value="Send" />
                </form>
            </>
        );
    }