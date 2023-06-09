import { useEffect, useState } from 'react'
import './ItemListContainer.css'
import { getProducts, getProductosPorArtista } from '../../asyncmock'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { collection, getDocs, where, query } from 'firebase/firestore'
import { db } from '../../services/firebase/config'

const ItemListContainer = ({ greeting }) => {


  const [products, setProducts] = useState([])

  const { idCategoria } = useParams();

  useEffect(() => {
    const Arte = idCategoria ? query(collection(db, "Arte"), where("idCat", "==",parseInt(idCategoria))) : collection(db, "Arte");


    getDocs(Arte)
      .then(res => {
        const nuevosProductos = res.docs.map(doc => {
          const data = doc.data()
          return { id: doc.id, ...data }
        })
        setProducts(nuevosProductos)
      })
      .catch(error => console.log(error))
  }, [idCategoria])
  // useEffect(()=>{
  // const funcionProductos = idCategoria ? getProductosPorArtista : getProducts;


  //     funcionProductos(idCategoria)
  //     .then(response => setProducts(response))
  //   .catch(error=> console.error(error))
  //   },[idCategoria])

  return (
    <div >

      <div className='Index' >
        <img className='Titulo-imagen' />
        <div className='Titulo-descripcion'>
          <h2 className='Titulo'>  Imik Zimik {greeting} </h2>
          <hr />
          <p> Somos fabricantes, para tener un mejor control de nuestro estándar de calidad y acabados, contamos con diferentes talleres que nos ayudan a cubrir todas las necesidades de nuestros clientes. Utilizamos 
maderas duras tropicales compradas a aserraderos autorizados por el gobierno, estamos por iniciar una reforestación plan, devolver a la tierra todo lo que nos ha dado. 
</p>
            <hr />
            
        </div>
      </div>

<h3 className='Titulo-productos'><hr /> <u>Nuestros Productos</u> <hr /></h3>
      <ItemList products={products} />
    </div>
  )
}

export default ItemListContainer
