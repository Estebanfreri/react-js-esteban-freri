import './Item.css'
import { Link } from 'react-router-dom'
import React from 'react';
const Item = ({id,nombre,precio,img}) => {
  return (
    
    <div className='cardProducto'>
      
      <h2><u>- {nombre} </u> </h2>
      <p>Precio: ${precio}</p>
      <img className='imgProducto'src={img} alt={nombre} />
    <hr />
    <Link to = {`/item/${id}`}> Detalle </Link>
    <h3>ID: {id}</h3>
    </div>
  )
}

export default Item
