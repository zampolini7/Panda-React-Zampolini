import { createContext, useState, useEffect } from 'react'



export const CartContext = createContext()

export const CartProvider = ({children})=>{
    const [cart, setCart] = useState([]);
    const [quantity, setQuantity] = useState(0);

    const addToCart = (item) =>{

        setCart([...cart, item])
    }

    const RemoveFromCart = (itemId) =>{
        const newCart= cart.filter(item => item.id !== itemId)

        setCart(newCart)
    }

    useEffect(() => {
       setQuantity(cart.length)
       console.log('Este es el console log que quier saber', cart);
       console.log('aca va la cuant', quantity)
    }, [cart]);

    console.log(cart);

    return (
        <CartContext.Provider value={ {cart, addToCart, quantity, RemoveFromCart }}>
            {children}
        </CartContext.Provider>
    )
}