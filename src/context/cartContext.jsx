import { createContext, useState, useEffect } from 'react'



export const CartContext = createContext()

export const CartProvider = ({children})=>{
    const [cart, setCart] = useState([]);
    const [quantity, setQuantity] = useState(0);

    const addToCart = (item ) =>{
        isInCart(item)
        setCart([...cart, (item)])
        console.log('este es nuevo carrito', cart)
    }

    const RemoveFromCart = (itemId) =>{
        const newCart= cart.filter(item => item.id !== itemId.id)

        setCart(newCart)
        // console.log('este es nuevo carrito', newCart)
    }

    const Clear = ()=>{
        
        setCart ([])
        setQuantity([])
        
        
    }

    
    const isInCart = (itemId)=>{
        if (itemId.id === cart.id) {
            
            setCart(...cart, (itemId.Quantity))
            
        } else {
            setCart([...cart, (itemId)])
    }
            
        
    }

    useEffect(() => {
       setQuantity(cart.length)
    //    console.log('Este es el console log que quier saber', cart);
    //    console.log('aca va la cuant', quantity)
    }, [cart]);

    console.log(cart);

    return (
        <CartContext.Provider value={ {cart, addToCart, quantity, RemoveFromCart, Clear }}>
            {children}
        </CartContext.Provider>
    )
}