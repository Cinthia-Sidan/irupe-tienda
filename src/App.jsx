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


function App() {
  

  return (
    <>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<ItemListContainer/>}/>
          <Route path='/categoria/:idCategoria' element={<ItemListContainer/>} />
          <Route path='/item/:idItem' element={<ItemDetailContainer/>}/>
          <Route path="/accesorios" element={<Accesorios />}/>
          <Route path="/perfumeria" element={<Perfumeria />}/>
          <Route path="/bazar" element={<Bazar />}/>
          <Route path="/deco" element={<Deco />}/>

        </Routes>
      </BrowserRouter>
     
    </>
  )
}

export default App
