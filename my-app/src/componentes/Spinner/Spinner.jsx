import React  from 'react'
import { spinnerStilos } from './SpinnerStilos'
const Spinner = () => {

    return (
        <>
        {
            <div className='d-flex justify-content-center'>
                <div className='spinner-border' role='status' style={spinnerStilos}></div>
            </div>
        }
        </>
    )
}

export default Spinner