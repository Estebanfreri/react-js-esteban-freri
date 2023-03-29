import React from 'react'
import './CartWidget.css'

const CartWidget = () => {
    const imgCarrito = "https://www.nicepng.com/png/detail/411-4119123_carrito-logo-carrito-de-compras.png"
  return (
    <div>
      <img className = 'imgCarrito' src={imgCarrito} alt="Carrito" />
   <strong>3</strong>
    </div>
  )
}

export default CartWidget
