import React, {useState, useEffect} from 'react';
import { BtnCarga2 } from '../components/btnCarga/btnCarga2'

import { List } from '../components/itemList/itemList';
import {getFirestore} from '../firebase/index'

export const ItemListContainer2 = ()=>{
    
    const [items, setItems] = useState([])
    const [Loading, setLoading] = useState(true);

    // const HandleClick= ()=>{
        
    // }
    
    useEffect(() => {
        
        const db = getFirestore()
        const itemCollection = db.collection('items')
        itemCollection.get().then(
            (querySnapshot) =>{
                if(querySnapshot.size === 0){
                    setLoading(true)
                }
                setItems(querySnapshot.docs.map((doc)=>doc.data()))
                setLoading (false)
            }
        ).catch(
            (error)=> console.log('firestore: error:',error)
        )
    }, []);



    return(
        <div >
            {/* <BtnCarga2 accion={HandleClick} /> */}
            <List items={items} Loading = {Loading} />
        </div>
    )
}