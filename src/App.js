import React from "react";
import "./App.css"
import Navbar from './Components/Navbar/Navbar'
import { ComponenteBoton } from './ComponenteBoton'
import { ComponenteTitulo } from './ComponenteTitulo'
import { CartWidget } from "./Components/Navbar/CartWidget/CartWidget";
import { ItemListContainer } from "./Components/Navbar/ItemListContainer/ItemListContainer";

const App = () => {
  const nombre = "Morph";
  const mensaje = "Realize su orden de compra"
  return (
    <>
      <Navbar nombreUno={nombre}>
        <ComponenteBoton/>
        <ComponenteTitulo/>
        <CartWidget/>      
      </Navbar>
      <ItemListContainer greeting={mensaje}/>

    </>
  );
};

export default App;