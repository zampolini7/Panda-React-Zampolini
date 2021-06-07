import { useState  } from 'react'
import {ItemDetail} from '../../components/itemDetail/itemDetail'
import {itemList} from '../../assets/constants'

export const ItemDetailContainer = ({item})=>{
    const [detail, setDetail] = useState([]);

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
            
          
      

            <ItemDetail item={item} />    

            

        </div>

    )

}

