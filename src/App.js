import React from "react";
import "./App.css";
import Navbar from './Components/Navbar/Navbar';
import { ItemListContainer } from "./Components/Containers/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from './Components/Containers/ItemDetailContainer/ItemDetailContainer';
import { Cart } from "./Components/Containers/CartView/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CustomProvider } from "./Context/CustomContext";
import { Footer } from './Components/Footer/Footer';
const App = () => {
  const mensaje = "Realize su orden de compra";

  return (
    <>
      <BrowserRouter>
        <CustomProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<ItemListContainer greeting={mensaje} />} />
            <Route path="/categoria/:id" element={<ItemListContainer greeting={mensaje} />} />
            <Route path="/producto/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart estilo={false} color={'blue'} />} />
            <Route path="*" element={<ItemListContainer />} />
          </Routes>
        </CustomProvider>  
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;