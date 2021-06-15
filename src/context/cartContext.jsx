import { createContext, useState, useEffect } from 'react'



export const CartContext = createContext()

export const CartProvider = ({children})=>{
    const [cart, setCart] = useState([]);
    const [quantity, setQuantity] = useState(0);

    const addToCart = ( item, quantity = 1 ) =>{
        console.log('ESTE ES EL POSTA',cart);
        let emptyCart= cart.length > 0
        let found = -1

        if (cart.length > 0) {
          found= cart.findIndex(e => e.id=== item.id );
          console.log('Este es el found wa8', found, 'Este es el puto length',cart.length);
            
        }

        if (found >= 0) {
            let cartTemp= cart
            cartTemp[found].quantity= cartTemp[found].quantity + quantity

            setCart(cartTemp)
            
        } else {
            let cartTemp = cart
            item.quantity = quantity
            cartTemp.push(item)
            setCart(cartTemp)
            setQuantity(cart.length)
        }
  
      
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

    
    const isInCart = (item)=>{
        if (item.id === cart.id) {
            
            setCart(...cart, (item.Quantity))
            
        } else {
            setCart([...cart, (item)])
    }
            
        
    }

    // useEffect(() => {
    //    setQuantity(cart.length)
    // //    console.log('Este es el console log que quier saber', cart);
    // //    console.log('aca va la cuant', quantity)
    // }, [cart]);

    console.log(cart);

    return (
        <CartContext.Provider value={ {cart, addToCart, quantity, RemoveFromCart, Clear }}>
            {children}
        </CartContext.Provider>
    )
}