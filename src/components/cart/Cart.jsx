
export const Cart = ({imageId, title, id, price, quantity, stock, description, onAdd, RemoveFromCart, ClearCart})=>{
    


    return(
        
        <div class="card col-8  d-flex m-2">

            <img class="card-img-top" src={imageId} alt="Card image cap"/>
            <div class="card-body">
                <h5  class="card-title"> {title}</h5>
                
                <p> {description}</p>
                <p> stock actual{stock}</p>
                <p>cantidad a comprar {quantity}</p>
                <p>{price}</p>
                <button onClick={RemoveFromCart} id={id} class="btn text-light bg-dark d-flex justify-content-center btnComprar">
                        Eliminar del carrito
                </button>
               
            </div>
          
           
        </div>
         
     
     
    )
}