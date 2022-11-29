import React, {useEffect} from "react";
import '../sass/main.css';
import { useState } from "react";
import ItemList from "../ItemList/ItemList";
import {useParams} from "react-router-dom";
import Filtros from "../Filtros/Filtros";
import {getAllItems as getdataArray, getItemsByCategory} from '../data/fireBase.js';


function ItemListContainer({titulo}) {
const [dataArrayEstado, setdataArray] = useState([])
const {tiendaid} = useParams();

useEffect(() =>{
    if (tiendaid === undefined){
        getdataArray(tiendaid).then(respuestaPromise=>{
            setdataArray(respuestaPromise);
        });
    }
    else{
        getItemsByCategory(tiendaid).then((respuestaPromise) =>{
            setdataArray(respuestaPromise);
            });
        }
    }, [tiendaid]);

getdataArray()
    return(
        <>
        <Filtros/>
        <div className="main">
            <div className="contenedor-productos">
                <ItemList dataArray={dataArrayEstado}/>
            </div>
        </div>
        </>
    ) 
}

export default ItemListContainer