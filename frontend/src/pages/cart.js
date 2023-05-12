import React from 'react'
import  '../styles/cart.css';

const cart = () => {
  return (
    <div className='My_Cart'>
        <section >
        <h1>My Cart</h1>
        <img className='My_Cart_img' src ="https://www.nicepng.com/png/detail/134-1343846_free-icons-png-shopping-cart-icon-transparent.png" alt="hero"/>

        </section>

        <section className='doc'>
        <h1>Your cart is empty!</h1>
        <p1>Add items to it now.</p1>
        </section>
    </div>
  )
}

export default cart