import React from 'react'
import "./Order.css"
import bookImg from "../../src/assets/EmptyBook.jpg"

const Order = () => {
  return (
    <div className='outerOrderDiv'>
      <img src={bookImg} />
      <p>You haven't placed any orders today</p>
      <button><a href='#'>Get started</a></button>
    </div>
  )
}

export default Order
