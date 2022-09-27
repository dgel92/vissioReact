import React, {useEffect} from "react";
import '../sass/main.css';
import { useState } from "react";
import dataArray from "../data/data";
import ItemList from "../ItemList/ItemList";
import {useParams} from "react-router-dom";
import Filtros from "../Filtros/Filtros";

function getdataArray(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(dataArray);
        }, 500);
    });
}

function ItemListContainer(props) {
const [dataArrayEstado, setdataArray] = useState([])
const {categoryid} = useParams();
console.log("ID: " + categoryid);

useEffect(() =>{
    getdataArray().then(respuestaPromise=>{
        setdataArray(respuestaPromise);
    })
    }, []);

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