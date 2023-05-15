import { useEffect, useState } from 'react'
import './ItemListContainer.css'
import {getProducts, getProductosPorArtista} from '../../asyncmock'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { collection, getDocs, where, query } from 'firebase/firestore'
import { db } from '../../services/firebase/config'
const ItemListContainer = ({ greeting }) => {
  

const [products,setProducts] =useState([])
  
const {idCategoria} = useParams();

useEffect (()=>{
  const Arte = idCategoria ? query(collection(db,"productos"),where("idCat","==",idCategoria)):collection(db, "productos");


getDocs(Arte)
.then(res=>{
  const nuevosProductos = res.docs.map( doc =>{
    const data = doc.data()
    return{id:doc.id, ...data}
  })
  setProducts(nuevosProductos)
})
.catch(error => console.log(error))
},[idCategoria])
// useEffect(()=>{
// const funcionProductos = idCategoria ? getProductosPorArtista : getProducts;


//     funcionProductos(idCategoria)
//     .then(response => setProducts(response))
//   .catch(error=> console.error(error))
//   },[idCategoria])

  return (
    <div>
       <h2 style={{ textAlign: "center" }}> {greeting} </h2>
      <ItemList products = {products}/>
    </div>
  )
}

export default ItemListContainer
