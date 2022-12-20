import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';

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
                <ButtonToolbar aria-label="Toolbar with button groups">
                    <ButtonGroup className="me-2" aria-label="First group">
                        <button className='botonCounter' onClick={resta}>-</button>
                        <h5 className='count-contador'> {count} </h5>
                        <button className='botonCounter' variant="secondary" onClick={suma}> + </button>
                    </ButtonGroup>
                </ButtonToolbar>
            </div>
            <div className='count-add'>
                <Button className='agregarCarrito' variant="secondary" onClick={() => props.onAdd(count)}>Agregar al Carrito</Button>
            </div>
        </div>
    )
}

export default ItemCount
