import React, {useState} from "react";
import "./App.css"
import Navbar from './Components/Navbar/Navbar'
import { ComponenteBoton } from './ComponenteBoton'
import { ComponenteTitulo } from './ComponenteTitulo'
import { CartWidget } from "./Components/Navbar/CartWidget/CartWidget";
import { ItemListContainer } from "./Components/Navbar/ItemListContainer/ItemListContainer";
import { ItemCount } from './ItemCount';
import { Usuarios } from './Usuarios';
import {Item} from './Components/Navbar/Item/Item';
import {ItemList} from "./Components/Navbar/ItemList/ItemList";
import { BrowserRouter,Routes, Route} from "react-router-dom";

const App = () => {
  const nombre = "Morph";
  const mensaje = "Realize su orden de compra";
  const onAdd = () =>{
    console.log("agregaste al carrito");
  }
  const [show, setShow] = useState(true);

  const alternar = ()=>{
    setShow(!show);
  }

  return (
    <>
      <BrowserRouter>
      <Navbar nombreUno={nombre}>
        <ComponenteBoton/>
        <ComponenteTitulo/>
        <CartWidget/>      
      </Navbar>
      <ItemListContainer greeting={mensaje}/>
      {show ? <ItemCount stock={5} initial={1} onAdd={onAdd} /> : <h1>No hay nada!!!</h1>}
      <Usuarios />
      <button onClick={alternar}>Alternar</button>
      <Item />
      <ItemList/>
      </BrowserRouter>
    </>
  );
};

export default App;