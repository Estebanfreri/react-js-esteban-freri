const products = [
    {nombre: " Autorretrato con collar de espinas y colibrí", precio:100, id:1, img:"./img/fr1.jpg"},
    {nombre: " La columna rota", precio:100, id:2, img:"./img/fr2.jpg"},
    {nombre: " Autoretrato con el pelo suelto", precio:100, id:3, img:"./img/fr3.jpg"},
    {nombre: " Diego en mi pensamiento", precio:100, id:4, img:"./img/fr4.jpg"},
    {nombre: " Los girasoles", precio:100, id:5, img:"./img/vg1.jpg"},
    {nombre: " Autorretrato", precio:100, id:6, img:"./img/vg2.jpg"},
    {nombre: " Retrato de Joseph Roulin ", precio:100, id:7, img:"./img/vg3.jpg"},
    {nombre: " La iglesia de Auvers-sur-Oise", precio:100, id:8, img:"./img/vg4.jpg"},
]

export const getProducts = ()=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(products)
        },2000)
    })
}

export const getUnProducto = (id)=>{
    return new Promise(resolve =>{
        setTimeout( ()=>{
const producto = products.find(prod => prod.id === id)
resolve(producto);
        },2000)
    })

}