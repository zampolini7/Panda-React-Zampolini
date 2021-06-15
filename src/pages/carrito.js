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
        return stock >= quantity
    }

    const ordenes = {
        '213ab1':{
            nombre: "Mati",
            apellido: "Mir",
            edad: 23,
            items: [
                item1,
                item2
            ]
        }
    }



    const handleFinish=()=>{
        const db = getFirestore()
        const batch= db.batch()
        

        cart.forEach((item) => {
            const itemSelected = db.collection('items').doc(item.id);
            const orderRef = db.collection('order').doc();
            if (canBuy(item.stock, item.quantity)) {
                batch.update(itemSelected, {stock: item.stock - item.quantity});
                batch.set(orderRef, {

                });
                
            } else{
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

            <button >
                <Link> 
                    <FinDeCompra onClick={handleFinish}/>
                </Link>
               Finalizar la compra
           </button>

           
        </div>
    )
}
