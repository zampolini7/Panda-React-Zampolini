import './itemDetail.css'
import { ItemCount } from '../itemCount/itemCount'

export const ItemDetail = ({item})=> {

    return (
        <div>
            {ItemDetail >[]? (

                <div className="item-container">
                    

                    <div className="itemDetail-div">
                        <div className="itemDetail-div-lateral-bajo">
                            <img src={item.imageId} alt="" className="itemDetail-img" /> 
                            <div className="container-itemDetail-div-bajo-p">
                                <p className="itemDetail-div-bajo-p"> Precio:  {item.price} </p>
                                <p className="itemDetail-div-bajo-p">Cantidad: {item.stock} </p>

                            </div>

                            {/* <button className="btn-detail">Comprar ahora </button> */}
                            
                        </div>
                        <div className="itemDetail-div-Lateral">
                            <h2 className="itemDetail-h2"> Nombre : {item.title} </h2>
                            <p className="itemDetail-div-Lateral-p"> Contenido: {item.description} </p>

                            <ItemCount classname="itemDetail-itemCount"stock={item.stock}/>
                        </div>

                    </div>


                </div>

            ): ('trayendo info')}
        </div>
    )




}