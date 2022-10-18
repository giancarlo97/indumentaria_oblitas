import React, {useState} from 'react';

export const Usuarios = () => {
    const [usuarios, setUsuarios] = useState([{nombre:'Nicolas'},{nombre:'Pepe'}]);

    const [nombre, setNombre] = useState("");

    //const pipo= {nombre:'Pipo'};

    const agregarPipo = ()=>{
        //setUsuarios([...usuarios,pipo]);
        setUsuarios([...usuarios,{nombre}])

    }

    const manejarAgregar = (e)=>{
        setNombre(e.target.value);
    }

  return (
    <div>
        <h1>Usuarios</h1>
        <button onClick={agregarPipo}>Agregar a Pipo</button>
        {
            usuarios.map((usuario,indice)=>{
                return <h1 key={indice}>{usuario.nombre}</h1>
            })
        }
        <input onChange={manejarAgregar} type="text" />
    </div>
  )
}
