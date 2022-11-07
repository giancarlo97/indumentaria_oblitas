import React, {useState} from "react";
import "./App.css";
import Navbar from './Components/Navbar/Navbar';
import { ItemListContainer } from "./Components/Containers/ItemListContainer/ItemListContainer";
import { ItemCountB } from './Components/ItemCount/ItemCountB';
import { Usuarios } from './Usuarios';
import { ItemDetailContainer } from './Components/Containers/ItemDetailContainer/ItemDetailContainer';
import { Cart } from "./Components/Containers/CartView/Cart";
import { BrowserRouter,Routes, Route} from "react-router-dom";
import { CustomProvider } from "./Context/CustomContext";


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

  const mensaje2 ="Las majores ofertas";

  const [numero, setNumero] = useState(0);

  const cambiar = ()=>{
    setNumero(numero+1);
  }

  return (
    <>
      <BrowserRouter>
      <CustomProvider>
        <Navbar nombreUno={nombre} />         
        <Routes>
          <Route path="/" element={<ItemListContainer greeting={mensaje}/>}/>
          <Route path="/categoria/:id" element={<ItemListContainer greeting={mensaje}/>}/>
          <Route path="/producto/:id" element={<ItemDetailContainer />}/>
          <Route path="/cart" element={<Cart estilo={false} color={'blue'} />}/>
          <Route path="*" element={<ItemListContainer />}/>
        </Routes>
        {show ? <ItemCountB stock={5} initial={1} onAdd={onAdd} /> : <h1>No hay nada!!!</h1>}
        <Usuarios />
        <button onClick={alternar}>Alternar</button>

        </CustomProvider>
          
      </BrowserRouter>
    </>
  );
};

export default App;