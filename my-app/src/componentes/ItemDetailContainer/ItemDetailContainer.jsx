import React, {useEffect} from "react";
import '../sass/main.css';
import { useState } from "react";
import dataArray from "../data/data";
import ItemDetail from "../ItemDeital/ItemDetail";
import { useParams } from "react-router-dom";

function getdataArray(id){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const productoFind = dataArray.find((producto)=>{
                return Number(id) === producto.id
            });
            resolve(productoFind)
        }, 500);
    });
}

function ItemDetailContainer() {
const [dataArrayEstado, setdataArray] = useState()
const {productoid}= useParams()

useEffect(() =>{
    getdataArray(productoid).then(respuestaPromise=>{
        setdataArray(respuestaPromise);
    })
    }, [productoid]);

getdataArray()
    return(
        <div>
            <div>
                <ItemDetail dataArrayEstado={dataArrayEstado}/>
            </div>
        </div>
    ) 
}

export default ItemDetailContainer