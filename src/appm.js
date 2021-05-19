import "./styles.css";
import Product from "./Product";
import { useState, useEffect } from "react";

import data from "./assets/json/products.json";

export default function App() {
  const [products, setProducts] = useState([]);

  const getProducts = () => {
    new Promise(
      (resolve) => {
        setTimeout(() => {
          resolve(data);
        }, 5000);
      },
      (reject) => {
        if (!data) reject("Error with json");
      }
    ).then((res) => {
      setProducts(res);
    });
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="App">
      <div className="col">
        <h1>Ejemplo </h1>
        <h3>Lista de productos desde un json dentro de una promesa </h3>
      </div>
      {products.length ? (
        products.map((product) => (
          <Product key={product.id} product={product} />
        ))
      ) : (
        <div id="loading">
          <span>🔄</span>
        </div>
      )}
    </div>
  );
}
