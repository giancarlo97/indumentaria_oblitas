import React from 'react';
import './Navbar.css';
import logo2 from '../../assets/logo2.jpg';
import {Link, NavLink} from "react-router-dom"; 

export const Navbar = ({ nombreUno, nombreDos, children }) => {

const categorias = [
  {nombre:"electronics", id:0, ruta:"/categoria/electronics"},
  {nombre:"jewelery", id:1, ruta:"/categoria/jewelery"},
  {nombre:"men's clothing", id:2, ruta:"/categoria/men's clothing"},
  {nombre:"women's clothing", id:3, ruta:"/categoria/women's clothing"},
]

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