import React from 'react';
import './Navbar.css';
import logo2 from '../../assets/logo2.jpg'; 

export const Navbar = ({ nombreUno, nombreDos, children }) => {
  return (
    <header>
        <img src={logo2} alt="Indumentaria" />
        <h1>{nombreUno}</h1>
        <nav>
            <a href="">Remeras</a>
            <a href="">Jeans</a>
            <a href="">Zapatillas</a>
            <a href="">Accesorios</a>
        </nav>
        {children}
    </header>
    
  )
}

export default Navbar