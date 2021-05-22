import './Prueba.scss'
import { useState } from 'react'

export const Prueba = (propiedades)=> {
    const [producto, setProducto] = useState('');


    const Promesa= ( async ()=>{
        console.log('Si funciona la promesa');
        new Promise (()=>{
            setTimeout(()=>{
                console.log('La carga demoró 3 segundos');

            },3000)
        })
        .then((producto)=>{
            setProducto(producto = propiedades)


        })
    })

    const HandlClick= async ()=>{
        console.log('ud me clickeo');
        Promesa()
    }


    return(
        <div>
            <button onClick={HandlClick} className="btn-Prueba">
                Apreta y carga
                {producto? producto.map( p=> (
                    <h2>{p.nombre}</h2>
                )) : ' no hay nada para cargar' }
            </button>
        </div>
    
    )

}



