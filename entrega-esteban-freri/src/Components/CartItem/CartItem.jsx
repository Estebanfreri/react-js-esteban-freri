import './CartItem.css';


const CartItem = ({item,cantidad,img}) => {
    
  
    return (
    <div className='divCompraFinal'>
      <img src={img} alt="" />
      <h4>{item.nombre}</h4>
      <p>Cantidad: {cantidad}</p>
    <p>Precio: ${item.precio}</p>
    
    </div>
    
  )
}

export default CartItem
