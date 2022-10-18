import React,{useState, useEffect} from 'react';

const productos = [
  {nombre:"remeras", id:0, categoria: "hombre", stock:10, precio:500},
  {nombre:"musculosas", id:1, categoria: "hombre", stock:100, precio:300},
  {nombre:"zapatillas", id:2, categoria: "calzado", stock:50, precio:1000},
  {nombre:"anillos", id:3, categoria: "joyeria", stock:10, precio:2000},
]

const obtenerProductos = new Promise((resolve,reject)=>{
  setTimeout(()=>{
    resolve(productos);
  },2000);
  
  //reject("Ocurrio un error")
})

export const ItemListContainer = ({greeting, mensaje, stock, initial, onAdd}) => {

  const [productos, setProductos] = useState([]);

  useEffect(()=>{
    obtenerProductos
    .then((data)=>{
      setProductos(data);
    })
    .catch((error)=>{
      console.log("salio mal");
      console.log(error);
    })
  },[])

  return (
    <>
      <h1>{greeting}</h1>
      <h1>{mensaje}</h1>
      <h1>{stock}</h1>
      <h1>{initial}</h1>
      <h1>{onAdd}</h1>
      {
        productos.map((producto)=>{
          return <h2 key={producto.id}>{producto.nombre} {producto.categoria} {producto.stock} {producto.precio}</h2>
        })
      }
    </>
  )
}
