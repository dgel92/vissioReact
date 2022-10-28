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
                    <Dropdown.Item><Link to="/tienda/lampara de pie" className="btnBorrar">Lamparas de pie</Link></Dropdown.Item>
                    <Dropdown.Item><Link to="/tienda/escritorio" className="btnBorrar">Lamparas de escritorio</Link></Dropdown.Item>
                    <Dropdown.Item><Link to="/tienda/colgante" className="btnBorrar">Lamparas Colgantes</Link></Dropdown.Item>
                    <Dropdown.Item><Link to="/tienda/infantil" className="btnBorrar">Lamparas Infantiles</Link></Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            
            <Button variant="secondary"><Link to="/tienda" className="btnBorrar">Borrar Filtros</Link></Button>
        </div>
        </>
    );
}
export default Filtros;