import './item.css'
import {Link} from 'react-router-dom';



export const Item = ({imageId, title, id, price, description, onAdd, RemoveFromCart, ClearCart}) => {
   console.log("items" )

    return(

        <div class="card col-3  d-flex m-2">

            <img class="card-img-top" src={imageId} alt="Card image cap"/>
            <div class="card-body">
                <h5  class="card-title"> {title}</h5>
                
                <p> {description}</p>
                
                <Link to={`/items/${id}`}> Ver mas</Link>
                
                <button onClick={onAdd} id={id} class="btn text-light bg-dark d-flex justify-content-center btnComprar">
                        Agregar al carrito x {price}
                </button>
                <button onClick={RemoveFromCart} id={id} class="btn text-light bg-dark d-flex justify-content-center btnComprar">
                        Eliminar del carrito
                </button>
                {/* <button onClick={ClearCart} id={id} class="btn text-light bg-dark d-flex justify-content-center btnComprar">
                        Eliminar todo el carrito
                </button> */}
            </div>

            
           
        </div>

        
            
    )

}


// {verMas > []? ( <p> {nombre}</p>): ('')
            
            
// }