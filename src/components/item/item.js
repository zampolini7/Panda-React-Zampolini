import './item.css'



export const Item = (props) => {
   

    return(

        <div class="card col-3  d-flex m-2">

            <img class="card-img-top" src={props.imageId} alt="Card image cap"/>
            <div class="card-body">
                <h5  class="card-title"> {props.title}</h5>
                
                <p> {props.description}</p>
                
                <button  >  Ver más</button>
                
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