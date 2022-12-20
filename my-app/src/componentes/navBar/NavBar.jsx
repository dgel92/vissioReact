import React from 'react';
import '../sass/main.css';
import Logo from '../../multimedia/logoDefinitivo.png';
import CartWidget from '../CartWidget.jsx/CartWidget';
import {Link} from "react-router-dom";
import useCartContext from '../CartContext/CartContext';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';


function NavBar(){
    const {contextFunction} = useCartContext();
    contextFunction();
    return(
        <>
        <div className='navmediaQuery'>
            <div className="navlineaNegrita"><p>Envios a todo el pais - </p></div>
                {[false].map((expand) => (
                    <Navbar key={expand} bg="light" expand={expand} className="mb-3 navContainer">
                        <Container fluid > 
                            <Navbar.Brand><Link to="/"><img className='brand' src={Logo} alt="logo tienda"/></Link></Navbar.Brand>
                            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                            <Navbar.Offcanvas className='btnClose'
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="end"
                            >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                Catalogo
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                                <div className='navView'>
                                    <Offcanvas.Body className="navQuery">
                                        <Nav className="justify-content-end flex-grow-1 pe-3">
                                        <Nav.Link className="navCard"><a><Link to="/">Inicio</Link></a></Nav.Link>
                                        <Nav.Link className="navCard"><a><Link to="/tienda">Tienda</Link></a></Nav.Link>
                                        </Nav>
                                        <hr></hr>
                                        <NavDropdown.Item className="navCard"><a><Link to="/cart">Carrito</Link></a></NavDropdown.Item>
                                    </Offcanvas.Body>
                                </div>
                            </Navbar.Offcanvas>
                        </Container>
                    </Navbar>
                    )
                )
            }
        </div>
        </>
    )}
export default NavBar
