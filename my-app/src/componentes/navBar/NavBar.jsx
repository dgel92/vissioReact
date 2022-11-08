import React from 'react';
import '../sass/main.css';
import Logo from '../../multimedia/logoSitio3.png';
import CartWidget from '../CartWidget.jsx/CartWidget';
import {Link} from "react-router-dom";
import useCartContext from '../CartContext/CartContext';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function NavBar(){
    const {contextFunction} = useCartContext();
    contextFunction();
    return(
        <>
        <div className="navlineaNegrita"><p>Envios a todo el pais - </p></div>
            <div className='navContainer'>
                <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                    <Navbar.Brand className="brand"><Link to="/"><img width="260" src={Logo} alt="logo tienda"/></Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <div className="navCard">
                        <Navbar.Collapse id="responsive-navbar-nav">                
                            <Nav>
                            <NavDropdown title="Dropdown" id="collasible-nav-dropdown" >
                                <NavDropdown.Item><a><Link to="/">Inicio</Link></a></NavDropdown.Item>
                                <NavDropdown.Item><a><Link to="/tienda">Tienda</Link></a></NavDropdown.Item>
                                <NavDropdown.Item><a><Link to="/sobreNosotros">Sobre nosotros</Link></a></NavDropdown.Item>                    
                            </NavDropdown>
                            </Nav>
                            <NavDropdown.Item><Link to="/cart">Carrito</Link></NavDropdown.Item>
                        </Navbar.Collapse>
                    </div>
                </Navbar>
            </div>
    </>
)}
export default NavBar
