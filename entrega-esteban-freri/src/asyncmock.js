const products = [
    {nombre: " Autorretrato con collar de espinas y colibrí", precio: 100, stock:20, id:"1", img:"/img/fr1.jpg",idCat:"1"},
    {nombre: " La columna rota", precio: 100,stock:20, id:"2", img:"/img/fr2.jpg",idCat:"1"},
    {nombre: " Autoretrato con el pelo suelto", precio: 100,stock:20, id:"3", img:"/img/fr3.jpg",idCat:"1"},
    {nombre: " Diego en mi pensamiento", precio: 100,stock:20, id:"4", img:"/img/fr4.jpg",idCat:"1"},
    {nombre: " Los girasoles", precio: 100,stock:20, id:"5", img:"/img/vg1.jpg",idCat:"2"},
    {nombre: " Autorretrato", precio: 100,stock:20, id:"6", img:"/img/vg2.jpg",idCat:"2"},
    {nombre: " Retrato de Joseph Roulin ", precio: 100,stock:20, id:"7", img:"/img/vg3.jpg",idCat:"2"},
    {nombre: " La iglesia de Auvers-sur-Oise", precio: 100,stock:20, id:"8", img:"/img/vg4.jpg",idCat:"2"},
]

export const getProducts = ()=>{
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve(products)
        },200)
    })
}

export const getUnProducto = (id)=>{
    return new Promise(resolve =>{
        setTimeout( ()=>{
const producto = products.find(prod => prod.id === id)
resolve(producto);
        },200)
    })

}

export const getProductosPorArtista = (idCategoria)=>{
return new Promise ( resolve => { 
    setTimeout(()=>{
        const productosArtistas = products.filter(prod => prod.idCat === idCategoria);
    resolve (productosArtistas)
    },200)
})
}