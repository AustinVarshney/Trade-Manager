import React, { useEffect, useState } from 'react'
import Draggable from "react-draggable";
import "./Summary.css"
import TextField from '@mui/material/TextField';
import axios from 'axios';


const Summary = ({ user, itemName, itemMode, isCancelBuyBtn, isCancelSellBtn, mediaCancelBuyBtn, mediaCancelSellBtn }) => {
  let [qty, setQty] = useState("");
  let [price, setPrice] = useState("");

  let qtyValue = (event) => {
    setQty(event.target.value);
  }

  let priceValue = (event) => {
    setPrice(event.target.value);
  }

  const handleBuyClick = (event) => {
    event.preventDefault();

    setQty("");
    setPrice("");

    const data = { qty, price, itemName, itemMode };

    fetch('http://localhost:8080/buyOrders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: "include",
      body: JSON.stringify(data)
    }).then(response => {
      if (!response.ok) {
        const errorText = response.text();
        throw new Error(errorText);
      }
      return response.json();
    })
      .then(data => console.log(data))
      .catch(error => console.error('Error:', error));


    mediaCancelBuyBtn();
  };

  const handleSellClick = (event) => {
    event.preventDefault();

    setQty("");
    setPrice("");

    const data = { qty, price, itemName, itemMode };

    fetch('http://localhost:8080/sellOrders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: "include",
      body: JSON.stringify(data)
    }).then(response => {
      if (!response.ok) {
        const errorText = response.text();
        throw new Error(errorText);
      }
      return response.json();
    })
      .then(data => console.log(data))
      .catch(error => console.error('Error:', error));

    mediaCancelSellBtn();
  };

  return (
    <div className='outerSummaryDiv'>
      <div className='innerSummaryDiv1'>
        <p>Hi, {user}!</p>
      </div>
      <div className='innerSummaryDiv2'>
        <div className='innerMostSummaryDiv1'>
          <p>Equity</p>
        </div>
        <div className='innerMostSummaryDiv2'>
          <div>
            <p className='innerParaSummaryDiv1'>3.74k</p>
            <p className='innerParaSummaryDiv2'>Margin available</p>
          </div>
          <div>
            <p className='innerParaSummaryDiv3'>Margins used&nbsp; <span>0</span></p>
            <p className='innerParaSummaryDiv4'>Opening balance&nbsp; <span>3.74k</span></p>
          </div>
        </div>
      </div>
      <div className='innerSummaryDiv3'>
        <div className='innerMostSummaryDiv3'>
          <p>Holdings (13)</p>
        </div>
        <div className='innerMostSummaryDiv4'>
          <div>
            <p className='innerParaSummaryDiv5'>1.55k <span>+5.20%</span></p>
            <p className='innerParaSummaryDiv6'>P&L</p>
          </div>
          <div>
            <p className='innerParaSummaryDiv7'>Current Value&nbsp; <span>31.43k</span></p>
            <p className='innerParaSummaryDiv8'>Investment&nbsp; <span>29.88k</span></p>
          </div>
        </div>
      </div>

      {isCancelBuyBtn && (
        <Draggable>
          <div className="dialog-box">
            <div className='dbox1'>
              <TextField label="Qty." type="number" min="0" name='qty' InputLabelProps={{ shrink: true, }} style={{ width: "100px" }} value={qty} onChange={qtyValue} />
              <TextField label="Price" type="number" step="any" min="0" name='price' InputLabelProps={{ shrink: true, }} style={{ width: "100px" }} value={price} onChange={priceValue} />
            </div>
            <div className='dbox2'>
              <div className='innerDbox21'>
                <p>Margin Required: &#x20b9;{qty == "" || price == "" ? "0" : qty * price}</p>
              </div>
              <div className='innerDbox22'>
                <button onClick={handleBuyClick}>BUY</button>
                <button onClick={mediaCancelBuyBtn}>Cancel</button>
              </div>
            </div>

          </div>
        </Draggable>
      )}

      {isCancelSellBtn && (
        <Draggable>
          <div className="dialog-box">
            <div className='dbox1'>
              <TextField label="Qty." type="number" min="0" InputLabelProps={{ shrink: true, }} style={{ width: "100px" }} value={qty} onChange={qtyValue} />
              <TextField label="Price" type="number" step="any" min="0" InputLabelProps={{ shrink: true, }} style={{ width: "100px" }} value={price} onChange={priceValue} />
            </div>
            <div className='dbox2'>
              <div className='innerDbox21'>
                <p>Margin Required: &#x20b9;{qty == "" || price == "" ? "0" : qty * price}</p>
              </div>
              <div className='innerDbox22'>
                <button onClick={handleSellClick} style={{ backgroundColor: "#ff4600" }}>SELL</button>
                <button onClick={mediaCancelSellBtn}>Cancel</button>
              </div>
            </div>
          </div>
        </Draggable>
      )}
    </div>
  )
}

export default Summary