import { Products } from '../products/products'

export const List = (props) => {
    return props.product.map(
        (product) => (
           <Products 
           id = {product.title}
           nombre = {product.nombre}
           precio = {product.precio}
           contenido = {product.contenido}
           cantidad = {product.cantidad}
           />
         ))
}