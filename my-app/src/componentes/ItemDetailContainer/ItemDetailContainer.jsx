import React, {useEffect} from "react";
import '../sass/main.css';
import { useState } from "react";
import dataArray from "../data/data";
import ItemDetail from "../ItemDeital/ItemDetail";

function getdataArray(id){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const productoFind = dataArray.find((producto)=>{
                return id === producto.id
            });
            resolve(productoFind)
        }, 500);
    });
}

function ItemDetailContainer({id}) {
const [dataArrayEstado, setdataArray] = useState([])


useEffect(() =>{
    getdataArray(id).then(respuestaPromise=>{
        setdataArray(respuestaPromise);
    })
    }, []);

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