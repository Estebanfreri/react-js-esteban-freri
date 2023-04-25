import './ItemDetail.css'
import React from 'react';
const ItemDetail = ({id,nombre,precio,img}) => {
  return (
    <div className='contenedorItem'>
      <h2>Nombre:{nombre}</h2>
      <h3>Precio:{precio}</h3>
      <h3>ID:{id}</h3>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur laudantium cumque quaerat cupiditate, doloribus quasi tempore laborum ipsum illum. Sapiente voluptatibus mollitia velit minima dolorum, iusto atque nam delectus repellat.</p>
    <img src={img} alt={nombre} />
    </div>
  )
}

export default ItemDetail