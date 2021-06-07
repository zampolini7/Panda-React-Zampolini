import './App.css';
import React from 'react';
import { NavBar } from './components/navBar/navBar';
import { Home } from './pages/home'
import { Contacto } from './pages/contacto'
import { Carrito } from './pages/carrito'
import { Items } from './pages/items'
import { Fruit } from './pages/fruits'
import '../src/img/delimeats1.jpeg'
import { BrowserRouter, Route, Switch} from 'react-router-dom'

// import {ItemDetailContainer} from './containers/itemDetailconteiner/itemDetailContainer'
import { CartContext } from './context/cartContext'
import { useContext } from 'react'


function App() {
  const cart = useContext(CartContext);
  console.log('aca tan los produto', cart);
  
    
    
  
  return (
    <BrowserRouter>
      <NavBar cartQuantity= {cart.length} />      
      <Switch>
        <Route exact path='/'>
          <Home/>       
        </Route>

        <Route path='/items/:itemsId'>
         <Items />

        </Route>
        <Route path='/carrito'>
         <Carrito />

        </Route>
        <Route path='/contacto'>
         <Contacto />

        </Route>

       

        <Route path='/fruit/:fruitId'>
         <Fruit />

        </Route>

      </Switch>
      
    </BrowserRouter>

   

  );
}

/* <BtnCargaAsync/> */

export default App;



/*
 <Route path='/productos/:productos'>
         <Contacto />
         { <ItemDetailContainer /> 
        </Route>  
        
        
        */