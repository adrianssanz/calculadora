import React from 'react';

import '../hojasestilo/BotonClear.css'

const BotonClear = (props)=>(
    
        <div className='boton-clear' onClick={props.manejarClick}>
            {props.children}
        </div>
);

export default BotonClear;