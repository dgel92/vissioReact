import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import imgFormularioContacto from '../multimedia/imgFormularioContacto.jpg';
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
        <form ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name="user_name" />
            <label>Email</label>
            <input type="email" name="user_email" />
            <label>Message</label>
            <textarea name="message" />
            <input type="submit" value="Send" />
        </form>
        );
    };


/*function sendEmail(e) {
    e.preventDefault(); 

    emailjs.sendForm('service_6ycvs8o', 'template_gvdoo0l', e.target, 'r-foasPasxzvfpP4C')
    .then((result) => {
        alert(result.text);
    }, (error) => {
        console.log(error.text);
    });
    e.target.reset();
}*/