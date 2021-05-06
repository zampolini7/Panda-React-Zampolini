import { Products } from '../products/products'
import '../itemCount/itemCount.scss'
import {useState} from 'react'

export const ItemCount = (props) => {
    const [contador, setContador] = useState(0)

    const stock = 15

    const sumar = ()=>{
        if (contador >= stock ) return;
        setContador (contador + 1)
    }

    const restar = ()=>{
        if (contador < 1) return;
        setContador  (contador -1)
    }

    return(

        <div className="Container-div-ItenCount">
            <p className="Container-p-ItenCount"> PRODUCTO X - Stock: {stock}</p>
            <div className="Container-ItemCount">
                <button className="btn-ItemCount" onClick={restar}>  
                    <p> - </p> 
                </button>
                <p className="p-ItemCount"> {contador}</p>
                <button className="btn-ItemCount" onClick={sumar}> 
                    <p> + </p> 
                </button>
                

            </div>
            <button className="btn-agregar">  Agregar al carrito</button>
        </div>
    )
}