import Item from '../item/';
import './itemList.css'

export const List = ({items, Loading}) => {
  console.log("list recevied", items);
    return (
      <div>
        
        <div className="d-flex justify-content-center row divContainer">
        {Loading ? 
                <h2> Estamos cargando tus items 😀  </h2>
                
             :(items.map(
                (item) => (
                  <Item
                  id = {item.id}
                  title= {item.title}
                  price = {item.price}
                  description = {item.description}
                  stock = {item.stock}
                  imageId = {item.imageId}
                  
                  />
                  
                ))
            )}
        
        </div>
         
      </div>
      )
      
}