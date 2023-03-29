import React from 'react'
import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget'

const Navbar = () => {
  return (
    <header>
<h1> DroneMot</h1>
<nav>
    <ul>
        <li>Fotos</li>
    <li>Videos</li>
    <li>Contacto</li>
    </ul>
</nav>
<CartWidget/>
    </header>
  )
}

export default Navbar
