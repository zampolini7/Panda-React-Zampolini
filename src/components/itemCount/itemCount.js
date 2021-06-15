// import { Products } from '../products/products'
import '../itemCount/itemCount.scss'
import {useState} from 'react'

export const ItemCount = ({item, addToCart}) => {
    const [cantidad, setcantidad] = useState(0)

    const stock = item.stock;

    const sumar = ()=>{
        if (cantidad >= stock ) return;
        setcantidad (cantidad + 1)
    }

    const restar = ()=>{
        if (cantidad < 1) return;
        setcantidad  (cantidad -1)
    }

    return(

        <div className="Container-div-ItenCount">
            {/* <p className="Container-p-ItenCount"> PRODUCTO X - Stock: {stock}</p> */}
            <div className="Container-ItemCount">
                <button className="btn-ItemCount" onClick={restar}>  
                    <p> - </p> 
                </button>
                <p className="p-ItemCount"> {cantidad}</p>
                <button className="btn-ItemCount" onClick={sumar}> 
                    <p> + </p> 
                </button>
                

            </div>
            <button className="btn-agregar" onClick={() => {                
                addToCart(item, cantidad);
                setcantidad(0);
                }}>  Agregar al carrito</button>
        </div>
    )
}