import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { CartProvider } from './context/cartContext'

import {ItemsProvider} from './context/itemsContext';



ReactDOM.render(
  <React.StrictMode>
    <CartProvider >
      <ItemsProvider>  
        <App />
      </ItemsProvider> 
    </CartProvider>

    
      
    
  </React.StrictMode>,
  document.getElementById('root')
);

