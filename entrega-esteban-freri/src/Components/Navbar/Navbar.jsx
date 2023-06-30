import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget'

const Navbar = () => {
  return (
    <header>
      <Link to={"/"}>
        <h1> Imik Zimik</h1>
      </Link>
      <nav>
        <ul >
          
          <li>
            <NavLink to={"/categoria/1"}>
              Totem 
            </NavLink>
          </li>
          <li>
            <NavLink to={`/categoria/2`}>
            Paintings
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
