import React from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import {Link} from "react-router-dom";

function Filtros() {
    return (
        <>
        <div className="filtros">
            
            <Dropdown className="btnFiltro">
                <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                    Filtrar por categoria
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item><Link to="/tienda/lampara de pie" className="btnselect">Lamparas de pie</Link></Dropdown.Item>
                    <Dropdown.Item><Link to="/tienda/escritorio" className="btnselect">Lamparas de escritorio</Link></Dropdown.Item>
                    <Dropdown.Item><Link to="/tienda/colgante" className="btnselect">Lamparas Colgantes</Link></Dropdown.Item>
                    <Dropdown.Item><Link to="/tienda/infantil" className="btnselect">Lamparas Infantiles</Link></Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            
            <Button variant="secondary"><Link to="/tienda" className="btnBorrar">Borrar Filtros</Link></Button>
        </div>
        </>
    );
}
export default Filtros;