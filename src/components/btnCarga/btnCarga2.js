import React from 'react';
import './styles.scss';

export const BtnCarga2 = ({accion}) => {
    
    return (
        <div className="btn-carga" onClick={accion} > 
            Carga productos wachin
        </div>
    );    
};