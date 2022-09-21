import React, {useState} from 'react';

function ItemCount(props) {
const [count, setCount] = useState(props.inicial);

const suma = ()=>{
    if (count < props.stock){
        return setCount(count + 1);
    }
};

const resta = () => {
    if (count > props.inicial){
        return setCount(count - 1);
    }
};


    return(
        <>
            <h1>ItemCount</h1>
            <div>
                <div>
                    <button onclick={resta}> - </button>
                    <span> {count} </span>
                    <button onclick={suma}> + </button>
                </div>
                <div>
                    <button onClick={() => props.onAdd(count)}>Agregar al Carrito</button>
                </div>
            </div>
        </>
    )
}

export default ItemCount