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
        <div className='count-container'>
            <div className='count-card'>
                <button onClick={resta}> - </button>
                <span> {count} </span>
                <button onClick={suma}> + </button>
            </div>
            <div className='count-add'>
                <button onClick={() => props.onAdd(count)}>Agregar al Carrito</button>
            </div>
        </div>
    )
}

export default ItemCount
