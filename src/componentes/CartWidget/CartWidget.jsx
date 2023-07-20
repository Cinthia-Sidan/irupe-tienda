import './CartWidget.css'
import React from 'react'


const CartWidget = () => {

const imgCarro = "../../../public/carrito.png"
  return (
    <div>
        <img className='imgCarro' src={imgCarro} alt="Carrito" />
        <strong>2</strong>
    </div>
  )
}

export default CartWidget