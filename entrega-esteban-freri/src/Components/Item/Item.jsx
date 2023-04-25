import './Item.css'
import { Link } from 'react-router-dom'
import React from 'react';
const Item = ({id,nombre,precio,img}) => {
  return (
    <div className='cardProducto'>
      <img className='imgProducto'src={img} alt={nombre} />
    <h3>Nombre:{nombre}</h3>
    <p>Precio:{precio}</p>
    <p>ID:{id}</p>
    {
    /// <button className='btnProducto'> Ver detalles</button>
}
    <Link to = {`/item/${id}`}> Ver detalle </Link>
    </div>
  )
}

export default Item
