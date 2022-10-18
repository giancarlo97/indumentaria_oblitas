import React, {useEffect} from 'react';

export const ItemList = () => {

  useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>console.log(json))
    
  },[]);

  return (
    <>
      <h1>itemlist</h1>
      {
        
      }
    </>
  );
};
