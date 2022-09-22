import React, {useEffect} from "react";
import '../sass/main.css';
import { useState } from "react";
import dataArray from "../data/data";
import ItemList from "../ItemList/ItemList";

function getdataArray(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(dataArray);
        }, 500);
    });
}

function ItemListContainer(props) {
const [dataArrayEstado, setdataArray] = useState([])

useEffect(() =>{
    getdataArray().then(respuestaPromise=>{
        setdataArray(respuestaPromise);
    })
    }, []);

getdataArray()
    return(
        <div className="main">
            <div className="contenedor-productos">
                <ItemList dataArray={dataArrayEstado}/>
            </div>
        </div>
    ) 
}

export default ItemListContainer