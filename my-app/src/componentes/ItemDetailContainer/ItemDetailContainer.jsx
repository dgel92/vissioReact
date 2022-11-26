import React, {useEffect} from "react";
import '../sass/main.css';
import { useState } from "react";
import ItemDetail from "../ItemDeital/ItemDetail";
import { useParams } from "react-router-dom";
import {getItem as getdataArray} from '../data/fireBase.js';

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