import { Item } from '../item/item'

export const List = (props) => {
    return props.item.map(
        (item) => (
           <Item
           id = {item.title}
           nombre = {item.nombre}
           precio = {item.precio}
           contenido = {item.contenido}
           cantidad = {item.cantidad}
           />
         ))
}