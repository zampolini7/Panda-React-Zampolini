import React, { createContext, useState } from 'react';
import Item from '../components/item';

export const itemsContext = createContext();


export const ItemsProvider = ({children}) => {
    const [items, setItemsToContext] = useState([]);
    

    const test = (items) => {
        console.log("hola wacho")
        console.log("items recibidos", items)
        setItemsToContext(items);
        console.log("items", items)
    }

    return (
        <itemsContext.Provider value={{items, setItemsToContext, test}}>
            {children}
        </itemsContext.Provider>
    )
}

