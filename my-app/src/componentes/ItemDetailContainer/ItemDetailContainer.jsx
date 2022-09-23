import React, {useEffect} from "react";
import '../sass/main.css';
import { useState } from "react";
import dataArray from "../data/data";
import ItemDetail from "../ItemDeital/ItemDetail";

function getdataArray(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(dataArray);
        }, 500);
    });
}

function ItemDetailContainer() {
const [arrayEstado, setdataArray] = useState([])

useEffect(() =>{
    getdataArray().then(respuestaPromise=>{
        setdataArray(respuestaPromise[0]);
    })
    }, []);

getdataArray()
    return(
        <div>
            <div>
                <ItemDetail arrayEstado={arrayEstado}/>
            </div>
        </div>
    ) 
}

export default ItemDetailContainer