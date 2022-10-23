import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';

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
                <a onClick={resta}> - </a>
                <span> {count} </span>
                <a onClick={suma}> + </a>
            </div>
            <div className='count-add'>
                <Button className='agregarCarrito' variant="primary" onClick={() => props.onAdd(count)}>Agregar al Carrito</Button>
            </div>
        </div>
    )
}

export default ItemCount
