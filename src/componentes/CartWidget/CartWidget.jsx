import './CartWidget.css'

import React from 'react'

const CartWidget = () => {

const imgCarro = "https://e7.pngegg.com/pngimages/542/31/png-clipart-shopping-cart-shopping-bags-trolleys-computer-icons-shop-text-rectangle-thumbnail.png"
  return (
    <div>
        <img className='imgCarro' src={imgCarro} alt="Carrito" />
        <strong>2</strong>
    </div>
  )
}

export default CartWidget