import {useState} from 'react';
import { Link } from 'react-router-dom';
import useCartContext from '../CartContext/CartContext';
import { collection, addDoc, Timestamp} from 'firebase/firestore/lite';
import firestoreDB from '../data/fireBase';
import Spinner from '../Spinner/Spinner';


const Checkout = () => {
    const {cart, getTotalPrice, clearCart}=useCartContext();

    const [load, setLoad] = useState(false)
    const [orderID, setOrderID] = useState()
    
    const [buyer, setBuyer] = useState({
        Nombre:'',
        Domicilio:'',
        Localidad:'',
        Provincia:'',
        Telefono:'',
        Email:''
    })

    const {Nombre, Domicilio, Localidad, Provincia, Telefono, Email} = buyer

    const handleInputChange = (e) => {
        setBuyer(({
            ...buyer,
            [e.target.name]:e.target.value
        }))
    }

const createBuyOrder = async (orderData) =>{
    setLoad(true)
    try{
    const buyTimestamp = Timestamp.now();
    const ordenConFecha = {
        ...orderData,
        date: buyTimestamp
    };
    const miColec = collection(firestoreDB,"buyOrders")
    const orderDoc = await addDoc(miColec, ordenConFecha);
    setOrderID(orderDoc.id);
    clearCart();
    setLoad(false)
    console.log("orden lista con el ID:", orderDoc.id)
    }catch(error){
        console.log(error)
    }
    
}

    const handleSubmit = (e) => {
        e.preventDefault()
        setLoad(true)
        try{
        const items = cart.map(e=> 
            {return {
                id:e.id,
                nombre:e.nombre,
                precio:e.precio,
                cant:e.cant,
            }})

        const total= getTotalPrice()
        const orderData = {buyer, items, total}
        console.log("data",orderData)  
        createBuyOrder(orderData)
        }catch(error){
            console.log(error)
        }

    }

    return (
        <>  
            <div className="Bienvenido">
            <h1>Finalizando Compra</h1>
            </div>
            <hr />
            {load ? <Spinner />
                : (!orderID&&<div className="formulario">
                    <h4>Completar Datos:</h4>
                    <br />
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="Nombre"
                            placeholder="Nombre Completo"
                            value={Nombre}
                            onChange={handleInputChange}
                            required
                        />
                        <br />
                        <input
                            type="text"
                            name="Domicilio"
                            placeholder="Calle y numeracion"
                            value={Domicilio}
                            onChange={handleInputChange}
                            required
                        />
                        <br />
                        <input
                            type="text"
                            name="Localidad"
                            placeholder="Ciudad"
                            value={Localidad}
                            onChange={handleInputChange}
                            required
                        />
                        <br />
                        <input
                            type="text"
                            name="Provincia"
                            placeholder="Provincia"
                            value={Provincia}
                            onChange={handleInputChange}
                            required
                        />
                        <br />
                        <input
                            type="number"
                            name="Telefono"
                            placeholder="Telefono"
                            value={Telefono}
                            onChange={handleInputChange}
                            required
                        />
                        <br />
                        <input
                            type="Email"
                            name="Email"
                            placeholder="Email"
                            value={Email}
                            onChange={handleInputChange}
                            required
                        />
                        <br /><br />
                        <input
                            type="submit"
                            value="Finalizar Compra"
                            className="btn btn-success"
                        />
                    </form>
                </div>)
            }

            <div>
            {
                orderID&&(
                    <div className="respuestaOrden">
                        <h4>Compra Finalizada con Exito</h4>
                        <h4>{`Su código de compra es: ${orderID}`}</h4>
                        <Link to="/" className="orden"><h5>Realizar otra compra</h5></Link>
                    </div>
                    )
            }
            </div>

        </>
    )
}

export default Checkout

//clase 13 min 