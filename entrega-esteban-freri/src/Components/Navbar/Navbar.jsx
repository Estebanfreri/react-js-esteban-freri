import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget'

const Navbar = () => {
  return (
    <header>
      <Link to={"/"}>
        <h1> NininaShop</h1>
      </Link>
      <nav>
        <ul>
          
          <li>
            <NavLink to={"/categoria/1"}>
              Frida Kahlo
            </NavLink>
          </li>
          <li>
            <NavLink to={`/categoria/2`}>
              Vincent van Gogh
            </NavLink>
          </li>
          <li>
            <NavLink to={`/Support`}>
              Support
            </NavLink>
          </li>
        </ul>
      </nav>
      <CartWidget />
    </header>
  )
}

export default Navbar
