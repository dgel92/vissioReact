import React from 'react';
import Item from '../Item/Item';
import { dataToFirebase } from '../data/fireBase';
function ItemList({dataArray}){
    
    return(
        <>
        {dataArray.map(thisDataArray =>{
            return(
                <Item dataArray={thisDataArray} key={thisDataArray.id}/>
                )
            })
        }
        </>
    )
}

export default ItemList