import React, {useState} from 'react';
import { List as ItemList } from '../../components/itemList/itemList';
import { BtnCarga } from '../../components/btnCarga/index';
import {itemList} from '../../assets/constants';

const ItemListContainer = () => {

    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleClick = async () => {
        setLoading(true);
        const respuestaDelServer = await getProductos();
        setItems(respuestaDelServer);
        setLoading(false);
    };

     const getProductos = async () => {         
        return itemList;
    };


    return (
        <>  
            <BtnCarga accion={handleClick} loading={loading} />
            <ItemList items={items} />
        </>
    )
};



export default ItemListContainer;