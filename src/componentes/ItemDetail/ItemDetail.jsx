import React from 'react'
import { useState, useContext } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { CarritoContext } from '../../context/CarritoContext'
import { Link } from 'react-router-dom'

const ItemDetail = ({id, nombre, precio, img, stock}) => {
  //1) Creamos un estado con la cantidad de productos agregados.
  const [agregarCantidad, setAgregarCantidad] = useState(0);

  const {agregarProducto} = useContext(CarritoContext);

  //2) Creamos una funcion manejadora de la cantidad:

  const manejadorCantidad = (cantidad) =>{
    setAgregarCantidad(cantidad);


    // creo un objeto con el item y la cantidad
    const item = {id, nombre, precio};
    agregarProducto(item, cantidad);
   
  }
  
  
  return (
    <div>
        <h2>Nombre {nombre}</h2>
        <h3>Precio: {precio}</h3>
        <h3>ID: {id}</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <img src={img} alt={nombre} />
        {
                //Acá empleamos la lógica de montaje y desmontaje del componente
            }
            {
                agregarCantidad > 0 ? (<Link to="/cart"> Terminar Compra</Link>) : null
            }

              <ItemCount inicial={1} stock={stock} funcionAgregar={manejadorCantidad}/>
    </div>
  )
}

export default ItemDetail