import {useEffect, useState} from "react";
import {useParams} from 'react-router-dom';
import {Link} from "react-router-dom";

function Checkout(){

    const [buyer, setBuyer] = useState({
        Nombre: '',
        Domicilio: '',
        Email: '',
        Telefono: '',
        Dni: '',
        CodigoPostal: '',
    })

    const{Nombre, Domicilio, Email, Telefono, Dni, CodigoPostal} =buyer

    const handleInputChange = (e) => {
        setBuyer(({
            ...buyer,
            [e.target.name]:e.target.value
        }))
    }

return(
        <>
        <h1>Finalizando compra</h1>
        <hr/> 
        <h4>Completar datos</h4>
        <br />
        <form action="">
            <input 
                type="text"
                nombre="Nombre"
                placeholder="Nombre"
                value={Nombre}
                onChange={handleInputChange}
            />
            <input 
                type="text"
                nombre="Domicilio"
                placeholder="Domicilio"
                value={Domicilio}
                onChange={handleInputChange}
            />
            <input 
                type="number"
                nombre="Telefono"
                placeholder="Telefono"
                value={Telefono}
                onChange={handleInputChange}
            />
            <input 
                type="email"
                nombre="Email"
                placeholder="Email"
                value={Email}
                onChange={handleInputChange}
            />
            <input 
                type="number"
                nombre="DNI"
                placeholder="DNI"
                value={Dni}
                onChange={handleInputChange}
            />
            <input 
                type="codigo postal"
                nombre="CodigoPostal"
                placeholder="Codigo Postal"
                value={CodigoPostal}
                onChange={handleInputChange}
                />
            <br /><br />
            <input 
                type="submit"
                value="finalizar compra"
                className="btn btn success"
            />
        </form>


        </>
    )
}

export default Checkout

//clase 13 min 