import React from 'react';
import './CartWidget.css'

const CartWidget = () => {
    const imgCarrito = "https://us.123rf.com/450wm/alexwhite/alexwhite1511/alexwhite151104865/48163643-carrito-de-compras-icono-de-dise%C3%B1o-plano-web-azul-sobre-fondo-blanco.jpg"
  return (
    <div>
      <img className = 'imgCarrito' src={imgCarrito} alt="Carrito" />
   <strong>3</strong>
    </div>
  )
}

export default CartWidget
