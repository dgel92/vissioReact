import React from 'react';

function ItemList({dataArray}){
    
    return(
        <>
        {dataArray.map(thisDataArray =>{
            return(
                <div>
                    <h1>{thisDataArray.nombre}</h1>
                    <p>{thisDataArray.precio}</p>
                </div>
                )
            })
        }
        </>
    )
}

export default ItemList