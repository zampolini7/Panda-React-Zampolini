import '../btnCargaAsync/btnCargaAsync.scss';
import { useState } from 'react';
import data from '../../assets/json/data.json';
import { Item } from '../item/item'

export const BtnCargaAsync = (props)=>{
    const [producto, setproducto] = useState(" ");
    // {data}

    
    const handleClick = async ()=> {
        
        console.log('handleClick');
        
        new Promise ((seCargo,NoseCargo)=>{
            console.log('Estoy pidiendo la carga de los productos');
            setTimeout (()=>{
                seCargo(':D ')
            }, 2000);
        })
        
        .then((producto)=>{
            console.log('Se Cargaron');
        setproducto(producto)
        })
        .catch((e)=>{
            console.log('Error en Cargar', e);
        })
    

    // let SolicitudDeProductos = async ()=>{
    //     console.log('Estoy pidiendo la carga de los productos');
    // const respuestaDelaCarga = await fetch(` 
        
    // `)
    // // {productos}
    // return SolicitudDeProductos
    
    // };

        
    // SolicitudDeProductos()  


}    

// const seCargo = ()=>{
//     console.log("Los producos están cargados");    
// }
// const NoseCargo = ()=>{
//     console.log("Los producos no se pudieron cargar");    
// }

return(
    <div>
        <button onClick={handleClick}> 
            Cargar productos :)
        </button>
        <h2>{producto}</h2>
    </div>
)


}





