import { useParams } from 'react-router'
import {useContext} from 'react'
import {itemsContext} from '../context/itemsContext';
import {ItemDetailContainer} from '../containers/itemDetailconteiner/itemDetailContainer'
import './item.css'

export const Items= ()=>{
    const {itemsId} = useParams();
    const {items} = useContext(itemsContext);
    console.log('items in context', items);

    const getItem = (itemsId) =>{
        const item= items.find((e)=> {
            if (e.id === itemsId) return e;
        })
        return item
    }
    

    return(
        <div>
           
            <ItemDetailContainer  item={getItem(itemsId)} />
            
        </div>
    )
}