import Button from 'react-bootstrap/Button';
import imgcontactanos from "../multimedia/imgcontactanos.jpeg";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'

export const ContactUs = () => {
    const form = useRef();
        const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_k7fx7mw', 'template_gvdoo0l', form.current, 'yZx6VcJgtDeMuMtNP')
            .then((result) => {
				alerta();
                console.log(result.text);
				console.log("mensaje enviado correctamente")
			}, (error) => {
                console.log(error.text);
            });
        };

		const alerta =() =>{
			Swal.fire({
				title: "Enviado correctamente",
				text: "Te responderemos a la brevedad",
				icon: "success",
				button:"aceptar",
			})
			let formulario = document.getElementById("formul");
			formulario.addEventListener('submit',function(){
				formulario.reset();
			})
		}
			return (
            <>
                <div className='imgFormulario'>
                    <img src={imgcontactanos} alt="imagen de formulario"/>
                </div>
				<div className="formularioContacto">
					<form ref={form} onSubmit={sendEmail} id="formul">
					<input 
						type="text" 
						name="user_name" 
						placeholder='Nombre'
						required
						/>
					<br/>
					<input 
						type="phone" 
						name="user_phone"
						placeholder='Telefono'
						required
						/>
					<br/>
					<input 
						type="email" 
						name="user_email" 
						placeholder='Email'
						required/>
					<br/>
					<textarea 
						name="user_message" 
						placeholder='Mensaje'
						rows="5"
						required/>
					<br/>
					<Button onClick={()=>alerta} className="btnEnviar" type="submit" value="Send" variant="primary">Enviar</Button>
					</form>
				</div>
				</>
			);
		}
