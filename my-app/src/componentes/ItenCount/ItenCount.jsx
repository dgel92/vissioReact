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
            <h3 className='count-title'>Cantidad</h3>
            <div className='count-card'>
                <ButtonToolbar aria-label="Toolbar with button groups">
                    <ButtonGroup className="me-2" aria-label="First group">
                        <Button variant="secondary" onClick={resta} className='botonCounter'> - </Button>
                        <Button variant="secondary" className='count-contador'> {count} </Button>
                        <Button variant="secondary" onClick={suma} className='botonCounter'> + </Button>
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
