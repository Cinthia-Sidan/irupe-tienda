import { Link, NavLink } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'

const NavBar = () => {
  return (
    <header>
      <Link to={"/"}>
        <img className="logo" src="../../../public/logo.png" alt="" />
      </Link>

      <nav>
        <ul>
          <Link to={"/"}>
            Home
          </Link>
          <li>
            <NavLink to={"/categoria/3"}>
              Bazar
            </NavLink>
          </li>
          <li>
            <NavLink to={"/categoria/1"}>
              Accesorios
            </NavLink>
          </li>
          <li>
            <NavLink to={"/categoria/4"}>
              Perfumeria
            </NavLink>
          </li>
          <li>
            <NavLink to={"/categoria/2"}>
              Deco
            </NavLink>
          </li>
        </ul>
      </nav>
      <CartWidget />

    </header>
  )
}

export default NavBar
