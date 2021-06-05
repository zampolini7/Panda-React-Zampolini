import React from 'react';
import './styles.scss';

export const BtnCarga = ({accion, loading}) => {
    
    return (
        <div className="btn-carga" onClick={accion} > 
            {
                loading 
                ?
                 <label>Cargando productos</label>
                :
                 <label>Cargar productos</label>
            }
        </div>
    );    
};