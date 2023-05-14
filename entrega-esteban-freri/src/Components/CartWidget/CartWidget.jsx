
import './CartWidget.css'
import { useContext } from 'react';
import { CarritoContext } from '../../Context/CarritoContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {
    const{carrito} = useContext(CarritoContext);
  const imgCarrito = "https://us.123rf.com/450wm/alexwhite/alexwhite1511/alexwhite151104865/48163643-carrito-de-compras-icono-de-dise%C3%B1o-plano-web-azul-sobre-fondo-blanco.jpg"
  
  return (
    <Link to='/Cart'>
<img className='imgCarrito' src={imgCarrito} alt="Carrito"/>

    </Link>
  )
}

export default CartWidget
