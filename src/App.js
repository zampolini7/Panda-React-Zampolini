import './App.css';
import React from 'react';
import { NavBar } from './components/navBar/navBar';
import ItemListContainer from './containers/ItemListContainer';


import '../src/img/delimeats1.jpeg'



function App() {
  
  return (
    <div>      
      <NavBar />      
      <ItemListContainer />
    </div>

  );
}

/* <BtnCargaAsync/> */

export default App;
