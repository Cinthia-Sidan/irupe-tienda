const misProductos = [
    {id:"1", nombre: "Argollas Acero", precio: 900, img: "../src/assets/img/argollas.jpg" , idCat:"1" , stock:10},
    {id:"2", nombre: "Aros Acero", precio: 900, img: "../src/assets/img/aros.jpg" , idCat:"1" , stock:10},
    {id:"3", nombre: "Pulsera", precio: 900, img: "../src/assets/img/cartucheras.jpg" , idCat:"1" , stock:10},
    {id:"4", nombre: "PortaSube", precio: 900, img: "../src/assets/img/cartucheras.jpg" , idCat:"2" , stock:10},
]

export const getProductos = () => {
    return new Promise((res) =>{
        setTimeout(() =>{
            res(misProductos);
        }, 2000)
    })
}

//Funcion que retorna un solo producto.

export const getUnProducto = (id) => {
    return new Promise((resolve)=>{
        setTimeout(() =>{
            const producto = misProductos.find(prod => prod.id === id);
            resolve(producto);
        }, 2000)
    })
 }

 //Funcion que retorna categoria

 export const getProductosCategoria = (idCategoria) =>{
    return new Promise((resol)=>{
        setTimeout(() =>{
            const productosCategoria = misProductos.filter(prod => prod.idCat === idCategoria);
            resol(productosCategoria);
        }, 2000)
    })
 }