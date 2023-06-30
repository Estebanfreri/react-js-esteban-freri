import { Link } from "react-router-dom"
import { useContext } from "react"
import { CarritoContext } from "../../Context/CarritoContext"
import CartItem from '../CartItem/CartItem'
import './Cart.css';
const Cart = () => {
    const { carrito, vaciarCarrito } = useContext(CarritoContext);
    //Total de productos
    const totalCantidad = carrito.reduce((total, producto) => total + producto.cantidad, 0);
    //Precio total
    const total = carrito.reduce((total, producto) => total + (producto.item.precio * producto.cantidad), 0)
    if (totalCantidad === 0) {
        return (
            <>
                <h2>No hay productos en el carrito</h2>
                <Link to='/'>Productos</Link>
            </>
        )
    }

    return (
        <div className="fondoCart">
            <div className="salidaCart">
                
                <div className="divPrecioFinal">
                    
                    {carrito.map(producto => <CartItem key={producto.id}{...producto} />)}
                    <hr />
                    <h3>- Total:  ${total} -</h3>
                    <button onClick={() => vaciarCarrito()} className="botonCompraFinal"><u>Vaciar Carrito</u></button>
                    <button className="botonCompraFinal"><Link to='/checkout'>Finalizar Compra</Link></button>
                
                </div>
            
        </div>
        </div>
    )

}

export default Cart
