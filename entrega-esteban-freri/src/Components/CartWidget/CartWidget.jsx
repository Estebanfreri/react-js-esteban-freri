
import './CartWidget.css'
import { useContext } from 'react';
import { CarritoContext } from '../../Context/CarritoContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {
    const{carrito} = useContext(CarritoContext);
  const imgCarrito = "https://thumbs.dreamstime.com/b/icono-de-cesta-en-fondo-negro-ilustraci%C3%B3n-vectores-estilo-plano-168419850.jpg"
  
  return (
    <Link to='/Cart'>
<img className='imgCarrito' src={imgCarrito} alt="Carrito"/>

    </Link>
  )
}

export default CartWidget
