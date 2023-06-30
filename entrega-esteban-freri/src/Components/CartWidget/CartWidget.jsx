
import './CartWidget.css'
import { useContext } from 'react';
import { CarritoContext } from '../../Context/CarritoContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {
    const{carrito} = useContext(CarritoContext);
  const imgCarrito = "https://images.vexels.com/media/users/3/132103/isolated/preview/2b512b5ece5d914e68950bfdbf73b481-icono-de-circulo-de-carrito-de-compras.png"
  
  return (
    <Link to='/Cart'>
<img className='imgCarrito' src={imgCarrito} alt="Carrito"/>

    </Link>
  )
}

export default CartWidget
