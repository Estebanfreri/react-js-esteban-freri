import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { CarritoContext } from '../../Context/CarritoContext';
import { useContext } from 'react';



const ItemDetail = ({id,nombre,precio,img, stock}) => {
  //1) creamos un estado con la cantidad de productos agregados
  const [agregarCantidad, setAgregarCantidad] = useState(0);
  
const {agregarProducto} = useContext(CarritoContext);

  //2) creamos una funcion manejadora de la cantidad:

  const manejadorCantidad = (cantidad) =>{
    setAgregarCantidad(cantidad);

    //Aca debo crear un objeto con el item y cantidad

    const item = {id, nombre, precio,};
    agregarProducto(item, cantidad,);

  }
  return (
    <div className='fondoContenedorItem'>
    <div className='contenedorItem'>
      <img src={img} alt={nombre} />
      <h2>{nombre}</h2>
      <h3>Precio: $ {precio}</h3>
      <h4>ID:{id}</h4>
      <p>Envio gratis en dentro <u>CABA.</u></p>
      <hr></hr>
    {
      //Aca empleamos la logica del montaje y desmontaje de componentes
    }
    {
      agregarCantidad > 0 ? ( <Link to="/cart">Terminar compra </Link> ) : (<ItemCount inicial={1} stock={stock}funcionAgregar={manejadorCantidad}/>)
    }
    </div>
    </div>
  )
}

export default ItemDetail