import React from 'react'
import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget'

const Navbar = () => {
  return (
    <header>
<h1> Wonderfull</h1>
<nav>
    <ul>
        <li>Quienes somos?</li>
    <li>Laminas</li>
    <li>Soporte</li>
    </ul>
</nav>
<CartWidget/>
    </header>
  )
}

export default Navbar
