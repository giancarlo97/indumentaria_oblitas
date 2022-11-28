import React from "react";
import "./App.css";
import Navbar from './Components/Navbar/Navbar';
import { ItemListContainer } from "./Components/Containers/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from './Components/Containers/ItemDetailContainer/ItemDetailContainer';
import { Cart } from "./Components/Containers/CartView/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CustomProvider } from "./Context/CustomContext";
import { Footer } from './Components/Footer/Footer';
import { ComponenteBoton } from "./ComponenteBoton";
import { ComponenteTitulo } from "./ComponenteTitulo";

const App = () => {

  return (
    <>
      <BrowserRouter>
        <CustomProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/categoria/:id" element={<ItemListContainer />} />
            <Route path="/producto/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart estilo={false} color={'blue'} />} />
            <Route path="/register" element={<ComponenteTitulo />} />
            <Route path="/login" element={<ComponenteBoton />} />
            <Route path="*" element={<ItemListContainer />} />
          </Routes>
        </CustomProvider>  
      </BrowserRouter>
      <Footer />
    </>
  );
};

export default App;