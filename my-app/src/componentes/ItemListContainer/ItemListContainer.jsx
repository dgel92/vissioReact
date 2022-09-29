import React, {useEffect} from "react";
import '../sass/main.css';
import { useState } from "react";
import dataArray from "../data/data";
import ItemList from "../ItemList/ItemList";
import {useParams} from "react-router-dom";
import Filtros from "../Filtros/Filtros";

function getdataArray(tiendaid){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if (tiendaid !== undefined){
                const arrayFiltrado = dataArray.filter((producto)=>{
                    return producto.categoria === tiendaid;

                })
                resolve(arrayFiltrado)

            }
            else{
            resolve(dataArray);
        }
        }, 500);
    });
}




function ItemListContainer({titulo}) {
const [dataArrayEstado, setdataArray] = useState([])
const {tiendaid} = useParams();
console.log("ID: " + tiendaid);

useEffect(() =>{
    getdataArray(tiendaid).then(respuestaPromise=>{
        setdataArray(respuestaPromise);
    })
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