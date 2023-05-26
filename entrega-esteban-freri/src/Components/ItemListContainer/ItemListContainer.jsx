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
          <h2 className='Titulo'>  AYURNAMAT {greeting} </h2>
          <hr />
          <p> Presentamos una colección de reproducciones atesanales de piezas de arte de todos los tiempos, realizadas a mano por los mejores talleres, por lo que son obras que alcanzan el valor de la pieza "única".
            Estas obras de arte ertesanas son más que un simple elemento decorativo. Son un bello recuerdo u objeto de culto y se pueden convertir en regalos institucionales o de empresa.</p>
            <hr />
        </div>
      </div>

<h3 className='Titulo-productos'> <u>Nuestros Productos</u></h3>
      <ItemList products={products} />
    </div>
  )
}

export default ItemListContainer
