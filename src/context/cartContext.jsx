import { createContext, useState } from 'react'



export const CartContext = createContext()

export const CartProvider = CartContext.Provider

export const CartInfo = ({children})=>{
    const [cart, setcart] = useState([]);
    const [quantity, setquantity] = useState(0);

    return (
        <CarProvider value={ {cart, setCart,quantity, setquantity }}>
            {children}
        </CarProvider>
    )
}