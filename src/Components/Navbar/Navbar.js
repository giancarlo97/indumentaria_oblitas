import React from 'react';
import logo2 from '../../assets/logo2.jpg';
import { styles } from "./Navbar.style";
import { CartWidget } from '../CartWidget/CartWidget';
import {Link, NavLink} from "react-router-dom";
import { ComponenteBoton } from '../../ComponenteBoton';
import { ComponenteTitulo } from '../../ComponenteTitulo';

export const Navbar = ({ nombreUno, nombreDos, children }) => {

const categorias = [
  {nombre:"electronics", id:0, ruta:"/categoria/electronics"},
  {nombre:"jewelery", id:1, ruta:"/categoria/jewelery"},
  {nombre:"men's clothing", id:2, ruta:"/categoria/men's clothing"},
  {nombre:"women's clothing", id:3, ruta:"/categoria/women's clothing"},
];

  return (
    <header style={styles.container}>
        <Link style={styles.imagenes} to="/">
          <img style={styles.imagenes} src={logo2} alt="indumentaria S.A"/>
        </Link>
        <h1>{nombreUno}</h1>
        <nav>
          {
            categorias.map((categoria) => {
              return ( 
              <NavLink 
                key={categoria.id} 
                style={styles.categorias} 
                to={categoria.ruta}
              >
                {categoria.nombre}
              </NavLink>
              );
            })
          }
        </nav>
        <Link to="/register">
          <ComponenteTitulo />
        </Link>
        <Link to="/login">
          <ComponenteBoton />
        </Link>
        <Link to="/cart">
          <CartWidget />
        </Link>
    </header>
  );
};

export default Navbar;