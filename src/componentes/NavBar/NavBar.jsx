import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'

const NavBar = () => {
  return (
    <header>
        <img className="logo" src="../../../public/logo.png" alt="" />
        <nav>
            <ul>
                <li>Bazar</li>
                <li>Accesorios</li>
                <li>Acero</li>
                <li>Deco</li>
                <li>Maquillaje</li>
            </ul>
        </nav>
        <CartWidget/>

    </header>
  )
}

export default NavBar
