const products = [
    {nombre: " Artemisa", precio: 100, stock:20, id:"1", img:"/img/artemisa.jpg",idCat:"1"},
    {nombre: " Apollo", precio: 100,stock:20, id:"2", img:"/img/apollo.jpg",idCat:"1"},
    {nombre: " Zeus", precio: 100,stock:20, id:"3", img:"/img/zeus.jpg",idCat:"1"},
    {nombre: " Core", precio: 100,stock:20, id:"4", img:"/img/core.jpg",idCat:"1"},
    {nombre: " Emperador Griego", precio: 100,stock:20, id:"5", img:"/img/emperadorgriego.jpg",idCat:"1"},
    {nombre: " Busto Griego", precio: 100,stock:20, id:"6", img:"/img/bustogriego.jpg",idCat:"1"},
    {nombre: " Retrato de Joseph Roulin ", precio: 100,stock:20, id:"7", img:"/img/vg3.jpg",idCat:"2"},
    {nombre: " La iglesia de Auvers-sur-Oise", precio: 100,stock:20, id:"8", img:"/img/vg4.jpg",idCat:"2"},
    {nombre: " Fridha", precio: 100,stock:20, id:"8", img:"/img/fr3.jpg",idCat:"2"},

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