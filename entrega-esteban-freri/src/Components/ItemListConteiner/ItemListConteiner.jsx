import React, { useEffect, useState } from 'react'
import './ItemListConteiner.css'
import {getProducts} from '../../asyncmock'
import ItemList from '../ItemList/ItemList'

const ItemListConteiner = () => {
  

const [products,setProducts] =useState([])
  useEffect(()=>{
    getProducts()
    .then(response => setProducts(response))
  .catch(error=> console.error(error))
  },[]
  )

  return (
    <div>
      <h2 className='sub'>Laminas</h2>
      <ItemList products = {products}/>
    </div>
  )
}
export default ItemListConteiner
