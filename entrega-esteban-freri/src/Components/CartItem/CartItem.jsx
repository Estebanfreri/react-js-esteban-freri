import './CartItem.css';


const CartItem = ({item,cantidad,img}) => {
    
  
    return (
    <div className='divCompraFinal'>
      <img src={img} alt="" />
      <h4> <u> - {item.nombre}</u></h4>
      <div className='divCompraFinalDetalle'>
      <p>Cantidad: {cantidad}</p>
      <p> ---- </p>
    <p>Precio: $ <u>{item.precio}</u></p>
    </div>
    </div>
    
  )
}

export default CartItem
