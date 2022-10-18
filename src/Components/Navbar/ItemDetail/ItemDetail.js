import React from 'react'

const ItemDetail = ({product}) => {
  return (
    <div>
        <img src={product.image} alt={product.title} />
        <h1>{product.title}</h1>
        <span>{product.description}</span>
        <h2>{product.price}</h2>
    </div>
  )
}
