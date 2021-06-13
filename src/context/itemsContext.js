import React, { createContext, useState } from 'react';

export const itemsContext = createContext();


export const ItemsProvider = ({children}) => {
    const [items, setItemsToContext] = useState([]);
    

    const test = (items) => {
        
        setItemsToContext(items);
        console.log("items", items)
    }

    return (
        <itemsContext.Provider value={{items, setItemsToContext, test}}>
            {children}
        </itemsContext.Provider>
    )
}

