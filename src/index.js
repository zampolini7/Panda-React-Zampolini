import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { CartProvider } from './context/cartContext'

const itemExample = [{id: 3,
  title: "WineBox",
  price: 3300,
  description: "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
  imageId: "images1/winebox1.jpeg",
  stock: 1
},
{id: 3,
  title: "WineBox",
  price: 3300,
  description: "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
  imageId: "images1/winebox1.jpeg",
  stock: 1
}

]


ReactDOM.render(
  <React.StrictMode>
    <CartProvider value= {[itemExample]}>
      <App />
    </CartProvider>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
