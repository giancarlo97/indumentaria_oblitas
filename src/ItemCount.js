import React, {useState, useEffect} from 'react';

export const ItemCount = (stock, initial, onAdd) => {
    const [contador, setContador] = useState(1);
    const [numero, setNumero] = useState(0);

    useEffect(()=>{
        console.log("ejecuta el useEffect");
        setNumero(numero + 1);

        const intervalo = setInterval(()=>{
            console.log("ping");
        },1000)

        return(()=>{
            clearInterval(intervalo);
        })

    }, []);

    const handlerClickSumar = ()=>{
        setContador(contador + 1);
    }

    const handlerClickRestar = ()=>{
        setContador(contador - 1);
    }

    const handlerClickReset = ()=>{
        setContador(1);
        onAdd();
    }
  return (
    <div>
        <h1>Componente para los estados</h1>
        <h1>{contador}</h1>
        <h1>{numero}</h1>
        <button onClick={handlerClickSumar}>Sumar</button>
        <button onClick={handlerClickRestar}>Restar</button>
        <button onClick={handlerClickReset}>Reset</button>
    </div>
  )
}
