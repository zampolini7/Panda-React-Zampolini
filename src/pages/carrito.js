import { useContext } from 'react'
import {Cart} from '../components/cart/Cart'
import {CartContext} from '../context/cartContext'
import { getFirestore } from '../firebase'
import {Link} from 'react-router-dom'
import { useParams } from 'react-router'
import { FinDeCompra } from '../pages/FinalizarCompra'

export const Carrito =()=>{

    const { RemoveFromCart, Clear, cart} = useContext(CartContext)
    console.log('EL CARRITO', cart)

    const canBuy =(stock, quantity)=>{
        return stock>= quantity
    }



    const handleFinish=()=>{
        const db = getFirestore()
        const batch= db.batch()

        cart.forEach((item) => {
            const itemSelected = db.collection('items').doc(item.id)
            if (canBuy(item.stock, item.quantity)) {
                batch.update(itemSelected, {stock: item.stock - item.quantity})
                
            }else{
                alert(`${item.tile} ya no se encuentra con ese stock, stock actual: ${item.stock}`)
            }
            
        })

        batch.commit().then((r)=> console.log(r))
    }


    return (
        <div className="d-flex justify-content-center row divContainer">
        { cart ? 
             (cart.map(
                (item) => (
                  <Cart 
                  id = {item.id}
                  title= {item.title}
                  price = {item.price}
                  description = {item.description}
                  stock = {item.stock}
                  imageId = {item.imageId}
                  quantity= {item.quantity}
                  RemoveFromCart = {()=>RemoveFromCart(item)}
                  ClearCart = {()=>Clear ()}
                  
                  />
                  
                ))
            ) : (
                <h2>Todavia no hay narnia</h2>
            )}

            <button onClick={Clear} id={cart.id} class="btn text-light bg-dark d-flex justify-content-center btnComprar">
                        Eliminar todo el carrito
            </button>

            <button onClick={handleFinish}>
                <Link> 
                    <FinDeCompra/>
                </Link>
               Finalizar la compra
           </button>

           
        </div>
    )
}
