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
                    <Dropdown.Item><Link to="/tienda/lampara de pie">Lamparas de pie</Link></Dropdown.Item>
                    <Dropdown.Item><Link to="/tienda/escritorio">Lamparas de escritorio</Link></Dropdown.Item>
                    <Dropdown.Item><Link to="/tienda/colgante">Lamparas Colgantes</Link></Dropdown.Item>
                    <Dropdown.Item><Link to="/tienda/infantil">Lamparas Infantiles</Link></Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            
            <Button variant="secondary"><Link to="/tienda">Borrar Filtros</Link></Button>
        </div>
        </>
    );
}
export default Filtros;