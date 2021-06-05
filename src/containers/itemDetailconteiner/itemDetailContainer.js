import { useState  } from 'react'
import {ItemDetail} from '../../components/itemDetail/itemDetail'
import {itemList} from '../../assets/constants'

export const ItemDetailContainer = ()=>{
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
        


    return(
        <div>
            <h2>Bienvenidos al contenedor del detalle</h2>
            <button onClick={handleClick} className="btn-detail"> Presiona para más info </button>
          
      

            <ItemDetail item={detail} />    

            

        </div>

    )

}

