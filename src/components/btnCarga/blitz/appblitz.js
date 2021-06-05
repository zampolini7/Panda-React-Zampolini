/* Ejercicio clase 7 de consulta a una api de meli */


import React from 'react';
import './style.css';
import { useEffect, useState } from 'react';

export default function App() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const getProductos = async () => {
      const response = await fetch(
        'https://challenge-meli-backend.herokuapp.com/api/items?q=iphone'
      );
      const productos = await response.json();
      console.log(productos.items);
      setProductos(productos.items);
    };

    getProductos();
  }, []);

  return (
    <div>
      <h1>Lol XD</h1>
      <p>wooooow esto si que es otra onda</p>

      {productos.length < 1 ? (
        <p> no tengo productos </p>
      ) : (
        productos.map(p => (
          // <h2> {p.title} </h2>
          <img src={p.picture} height="50px" />
        ))
      )}
    </div>
  );
}
