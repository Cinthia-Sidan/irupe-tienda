import NavBar from './componentes/NavBar/NavBar'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'
import './App.css'
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer'
import Accesorios from './componentes/Accesorios/Accesorios'
import Perfumeria from './componentes/Perfumeria/Perfumeria'
import Bazar from './componentes/Bazar/Bazar'
import Deco from './componentes/Deco/Deco'
import Home from './componentes/Home/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CarritoProvider } from './context/CarritoContext'
import Cart from './componentes/Cart/Cart'
import Checkout from './componentes/Checkout/Checkout'



function App() {


  return (
    <>
      <BrowserRouter>
        <CarritoProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path='/categoria/:idCategoria' element={<ItemListContainer />} />
            <Route path='/item/:idItem' element={<ItemDetailContainer />} />
            <Route path="/accesorios" element={<Accesorios />} />
            <Route path="/perfumeria" element={<Perfumeria />} />
            <Route path="/bazar" element={<Bazar />} />
            <Route path="/deco" element={<Deco />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />

          </Routes>

         
        </CarritoProvider>
      </BrowserRouter>

    </>
  )
}

export default App
