import './item.css'
import {Link} from 'react-router-dom';



export const Item = (props) => {
   console.log("items props", props)

    return(

        <div class="card col-3  d-flex m-2">

            <img class="card-img-top" src={props.imageId} alt="Card image cap"/>
            <div class="card-body">
                <h5  class="card-title"> {props.title}</h5>
                
                <p> {props.description}</p>
                
                <Link to={`/items/${props.id}`}> Ver mas</Link>
                
                <a id={props.id} class="btn text-light bg-dark d-flex justify-content-center btnComprar">
                        Agregar al carrito x {props.price}
                </a>
                <p></p>
            </div>

            
           
        </div>

        
            
    )

}


// {verMas > []? ( <p> {props.nombre}</p>): ('')
            
            
// }