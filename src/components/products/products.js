
export const Products = (props) => {
    return(
            <div>
                <h2> {props.id } </h2>
                <p>  {props.nombre }</p>
                <p> {props.precio } </p>
                <p> {props.contenido }</p>          
                <p> {props.cantidad }</p>
            </div>

            
    )

}