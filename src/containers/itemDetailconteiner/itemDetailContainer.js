import { useState, useContext  } from 'react';
import {ItemDetail} from '../../components/itemDetail/itemDetail';
import {itemList} from '../../assets/constants';
import { CartContext } from '../../context/cartContext';

export const ItemDetailContainer = ({item})=>{
    const [detail, setDetail] = useState([]);
    const {addToCart, RemoveFromCart, Clear} = useContext(CartContext);


        const handleClick = async () => {
            console.log('Esto ta to gucci');
        
            const Respuesta = await getProducts();
            setDetail(Respuesta);
            console.log(Respuesta);
          };
          const getProducts = async () => {
            return itemList[0];
        };
        console.log(item)


    return(
        <div>          
            <ItemDetail item={item} addToCart={addToCart}  removeToCart={RemoveFromCart}/>               
        </div>

    )

}

