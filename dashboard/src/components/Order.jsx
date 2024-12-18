import React, { useEffect, useState } from 'react'
import "./Order.css"
import bookImg from "../../src/assets/EmptyBook.jpg"
import axios from 'axios';

const Order = () => {
  let [allOrders, setAllOrders] = useState([]);

  useEffect(() => {
    // axios.get("http://localhost:8080/allOrders", {
    //   withCredentials: true,
    // }).then((res) => {
    //   if (Array.isArray(res.data)) {
    //     setAllOrders(res.data);
    //   } else {
    //     console.error("Expected an array but got:", res.data);
    //     setAllOrders([]); // Fallback to an empty array
    //   }
    // }).catch(error => console.error('Error fetching orders:', error));

    fetch('http://localhost:8080/allOrders', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include'
    })
      .then(response => response.json())
      .then(data => {
        if (Array.isArray(data)) {
          setAllOrders(data);
        } else {
          console.error("Expected an array but got:", data);
          setAllOrders([]); // Fallback to an empty array
        }
      })
      .catch(error => console.error('Error fetching orders:', error));
  }, [])

  const handleDelete = async (id) => {
    const isConfirmed = window.confirm("Are you sure you want to delete this order?");
    if (isConfirmed) {
      const response = await fetch(`http://localhost:8080/deleteOrder/${id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        setAllOrders(allOrders.filter(order => order._id !== id));
      }
    }
  }

  return (
    <div className='outerOrderDiv1'>
      {Array.isArray(allOrders) && allOrders.length > 0
        ?
        <div className='outerOrderDiv2'>
          <table className="orderTable">
            <thead>
              <tr>
                <th className='th1'>Name</th>
                <th className='th2'>Qty.</th>
                <th className='th3'>Price</th>
                <th className='th4'>Mode</th>
                <th className='th5'></th>
              </tr>
            </thead>
            {allOrders.map((order, index) => (
              <tbody key={index}>
                <tr>
                  <td className='td1'><div>{order.name}</div></td>
                  <td className='td2'>{order.qty}</td>
                  <td className='td3'>{order.price}</td>
                  <td className='td4'>{order.mode}</td>
                  <td className='td5'><button onClick={() => handleDelete(order._id)}>Delete Order</button></td>
                </tr>
              </tbody>
            ))}
          </table>

        </div>

        :
        <div className='outerOrderDiv3'>
          <img src={bookImg} />
          <p>You haven't placed any orders</p>
          <button><a href='#'>Get started</a></button>
        </div>}

    </div>
  )
}

export default Order
