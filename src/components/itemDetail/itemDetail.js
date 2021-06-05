import './itemDetail.css'

export const ItemDetail = ({item})=> {

    return (
        <div>
            {ItemDetail >[]? (

                <div className="item-container">
                    

                    <div className="itemDetail-div">
                        <img src="C:\Users\nicoz\Desktop" alt="" className="itemDetail-img" /> 
                        
                        <div className="itemDetail-div-Lateral">
                            <h2 className="itemDetail-h2"> Nombre : {item.nombre} </h2>
                            <p className="itemDetail-div-Lateral-p"> Contenido: {item.contenido} </p>

                            <div className="itemDetail-div-lateral-bajo">
                                <p className="itemDetail-div-bajo-p"> Precio:  {item.precio} </p>
                                <p className="itemDetail-div-bajo-p">Cantidad: {item.cantidad} </p>

                                <button className="btn-detail">Comprar ahora </button>
                                
                            </div>
                        </div>

                    </div>


                </div>

            ): ('trayendo info')}
        </div>
    )




}