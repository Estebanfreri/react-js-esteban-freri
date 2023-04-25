import { useEffect, useState } from 'react'
import './ItemListContainer.css'
import {getProducts, getProductosPorArtista} from '../../asyncmock'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import React from 'react';

const ItemListContainer = ({ greeting }) => {
  

const [products,setProducts] =useState([])
  
const {idCategoria} = useParams();


useEffect(()=>{
const funcionProductos = idCategoria ? getProductosPorArtista : getProducts;


    funcionProductos(idCategoria)
    .then(response => setProducts(response))
  .catch(error=> console.error(error))
  },[idCategoria])

  return (
    <div>
       <h2 style={{ textAlign: "center" }}> {greeting} </h2>
      <ItemList products = {products}/>
    </div>
  )
}

export default ItemListContainer
