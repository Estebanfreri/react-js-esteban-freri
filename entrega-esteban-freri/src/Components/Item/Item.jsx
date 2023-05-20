import './Item.css'
import { Link } from 'react-router-dom'
import React from 'react';
const Item = ({id,nombre,precio,img}) => {
  return (
    
    <div className='cardProducto'>
      <p>ID: {id}</p>
      <h3>{nombre}</h3>
      <p>Precio: ${precio}</p>
      <img className='imgProducto'src={img} alt={nombre} />
    <hr />
    <Link to = {`/item/${id}`}> Detalle </Link>
    </div>
  )
}

export default Item
