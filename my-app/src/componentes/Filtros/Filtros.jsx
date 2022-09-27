import React from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';

function Filtros() {
    return (
        <>
        <div className="filtros">
            
            <Dropdown className="btnFiltro">
                <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                    Filtrar por categoria
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Lamparas de pie</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Lamparas de escritorio</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Lamparas Colgantes</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Lamparas Infantiles</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            
            <Dropdown className="btnFiltro">
                <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                    Filtrar Por precio
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Mayor a menor</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Menor a mayor</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            
            <Button variant="secondary">Borrar Filtros</Button>
        </div>
        </>
    );
}
export default Filtros;