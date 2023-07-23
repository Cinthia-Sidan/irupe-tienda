import './CartWidget.css'
import React from 'react'
import { useContext } from 'react'
import { CarritoContext } from '../../context/CarritoContext'
import { Link } from 'react-router-dom'


const CartWidget = () => {

  const imgCarro = "../../../public/carrito.png"

  const { cantidadTotal } = useContext(CarritoContext);

  return (
    <div>
      <Link to="/cart">
        <img className='imgCarro' src={imgCarro} alt="Carrito" />
        {
          //si cantidadTotal es mayor que 0 se muestra el strong con el valor de cantidadTotal
          cantidadTotal > 0 && <strong>{cantidadTotal}</strong>
        }
      </Link>
      
    </div>
  )
}

export default CartWidget