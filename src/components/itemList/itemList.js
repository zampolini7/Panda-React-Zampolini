import Item from '../item/';

export const List = (props) => {
    return props.items.map(
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