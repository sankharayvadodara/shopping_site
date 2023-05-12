import React from 'react'
import '../styles/NavBar.css';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav>
      <Link to="/">Grab It !</Link>
      <ul>
        <input className='search_bar' type="search"></input>
        <li>search</li>
      </ul>
        
      <ul>

        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/shop">Shop</Link>
        </li>
        <li>
            <Link to="/cart">Cart</Link>
        </li>
        <li>
            <Link to="/about">About</Link>
        </li>
        <li>
            <Link to="/profile">Profile</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar