import Item from '../item/';
import './itemList.css'
import {CartContext} from '../../context/cartContext'
import {useContext} from 'react'

export const List = ({items, Loading}) => {
  const {addToCart} = useContext(CartContext)
 
  console.log("list recevied", items);
    return (
      <div>
        
        <div className="d-flex justify-content-center row divContainer">
          
        {Loading ? 
                <h2> Estamos cargando tus items 😀  </h2 >
                
             :(items.map(
                (item) => (
                  <Item
                  id = {item.id}
                  title= {item.title}
                  price = {item.price}
                  description = {item.description}
                  stock = {item.stock}
                  imageId = {item.imageId}
                  onAdd ={()=>  addToCart(item)}

                  
                  />
                  
                ))
            )}
        
        </div>
         
      </div>
      )
      
}