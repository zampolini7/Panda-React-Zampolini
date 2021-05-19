import {useState} from 'react'
import datosDeProductos from '../../assets/json/data.json'
import { List } from '../itemList/itemList';
// import { Item } from '../item/item'

export const BtnCargaNew = ()=>{
    const [products, setProducto] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const getProducts = async () => {
            console.log(datosDeProductos);
        
                return datosDeProductos;
      
    }

    const handleClick = async ()=>{
        console.log('hola');
        setLoading(true)
        try {
            const product1 = await getProducts();
            setProducto(product1);
            setLoading(false)
            console.log(products);
        } catch (error) {
            setError(true)
            setLoading(false)
            console.log(error);
        }
    }


    return(
        <div>
            <button onClick={() => handleClick()}> 
                Cargar productos :)
            
            </button>
            <div>
                {loading && (<p>Cargando bro...</p>)}
                {error && (<p>Error</p>)}
                {products && (products.map(prod => (

                    // <List item={prod} />
                    <h2>{prod.nombre}</h2>
                ))
                )}

            </div>


           
        </div>
    )
    
    
};

/**
 *         // console.log('handleClick');
    
        // const recibiElpedido = (producto1)=>{
        //     setProducto(producto1)
        //     console.log('recibi tu', producto1);
        
        // }
    
        // const NoRecibiElpedido = (e)=>{
        //     setProducto(e)
        //     console.log('Error', e);
        // }
    
        // let CargaDePedido = new Promise ((resolve, reject)=>{
        //     console.log('Estoy pidiendo :O');
        //     setTimeout(() => {
        //         resolve(  `${datosDeProductos}`   )
        //     }, 2000);

        //     setTimeout(() => {
        //         reject(':(')
        //     }, 2000);
        // })
        // .then(recibiElpedido)

        // // En el then le meto lo que recibo del resolve, ahí deberían ir la petición de mis productos.
        // .catch(NoRecibiElpedido)


        let CargaDePedido2 = async ()=> {

         const recibiElpedido = ()=>{
            setProducto( datosDeProductos)
            console.log('recibi tu', datosDeProductos);
        
        }
    
        const NoRecibiElpedido = (e)=>{
            setProducto(e)
            console.log('Error', e);
        }
       
        try{
            console.log('Enseguida procesamos');
            recibiElpedido()
           

        } catch (error){
            NoRecibiElpedido()

        } finally{
            console.log('Terminó');
        }
 */


// let CargaDePedido2 = async (producto1)=> {
       
//     try{
//         // console.log('Estoy pidiendo :O');
    
//         // const respuestaDelPedido = await fetch(`https://fakestoreapi.com/products ${producto1}`)
        
//         // console.log(respuestaDelPedido);

//         console.log('Enseguida procesamos');
//         const respuestaDelPedido = await fetch(`https://fakestoreapi.com/products/`) 
//         .then(res=>res.json()
//         )
//         .then(json=>console.log(json))
//         console.log(respuestaDelPedido);

//         // const productosApi= body.json()
//         // console.log(productosApi);
//         return respuestaDelPedido   

//     } catch (error){
//         console.log('error',error);

//     } finally{
//         console.log('Terminó');
//     }
    
// }
// // const producto1 = await CargaDePedido2()


// CargaDePedido2()

// }
