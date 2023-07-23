import { useState, createContext } from "react";

export const CarritoContext = createContext({
    carrito: [],
    total: 0,
    cantidadTotal: 0
})
// 3) Creamos un componente llamado "CarritoProvider"
export const CarritoProvider = ({children}) =>{
    //4) Creamos un estado local "carrito" con el hook useState
    const [carrito, setCarrito] = useState([]);
    const [total, setTotal] = useState(0);
    const [cantidadTotal, setCantidadTotal] = useState(0);

    console.log(carrito);

    // 5) Agregamos algunos metodos

    //Funcion Agregar al carrito:

    const agregarProducto = (item, cantidad) =>{

        const productoExistente = carrito.find(prod => prod.item.id === item.id);

        if(!productoExistente){
            setCarrito(prev => [...prev, {item, cantidad}]);
            //La sintaxis: prev => [...prev, {item, cantidad}] agrega lo nuevo al estado anterior de carrito, creando un nuevo array con el contenido previo y el nuevo item.
            
            setCantidadTotal( prev => prev + cantidad);
            setTotal(prev => prev + (item.precio * cantidad));
        
        }else{
            const carritoActualizado = carrito.map (prod => {
                if(prod.item.id === item.id){
                    return {...prod, cantidad: prod.cantidad + cantidad};
                } else{
                    return prod;
                }
            });
            setCarrito(carritoActualizado);
            setCantidadTotal(prev => prev + cantidad);
            setTotal(prev => (item.precio * cantidad));
        }
    }

    //Eliminar productos del carrito

    const eliminarProducto = (id) =>{
        //Busca el producto a eliminar y lo almacena en productoEliminado
        const productoEliminado = carrito.find(prod => prod.item.id === id);
        //Creo un nuevo array con todos los productos pero filtrando el productoEliminado
        const carritoActualizado = carrito.filter(prod => prod.item.id !== id);
        //El carrito toma el nuevo array
        setCarrito(carritoActualizado);
        // se resta la cantidad de productoEliminado
        setCantidadTotal( prev => prev - productoEliminado.cantidad);
        //se resta el precio total de productoEliminado según la cantidad  que tenía
        setTotal(prev => prev - (productoEliminado.item.precio * productoEliminado.cantidad))
    }

    //Funcion para vaciar el carrito

    const vaciarCarrito = () =>{
        setCarrito([]);
        setCantidadTotal(0);
        setTotal(0);
    }


    //6) Usamos el componente CarritoContext.Provider para enviar el valor actual del carrito y todos los metodos a los componentes
    //de mi aplicacion que lo necesiten.
    //Enviamos el value con doble llave porque debemos enviarlo como un objeto.

    return (
        <CarritoContext.Provider value={{carrito, total, cantidadTotal, agregarProducto, eliminarProducto, vaciarCarrito}}>
            {children}
        </CarritoContext.Provider>
    )
}

//7) Children:propiedad especial que se utiliza para representar a todos aquellos componentes que pueden necesitar el carrito y sus metodos