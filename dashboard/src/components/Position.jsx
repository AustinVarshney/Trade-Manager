import React, { useEffect, useState } from 'react'
import "./Position.css"
// import { positions } from '../assets/assets'

import axios from 'axios';

const Position = () => {
  let [allPositions, setAllPositions] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/allPositions").then((res) => {
      // console.log(res);
      setAllPositions(res.data);
    })
  }, [])

  return (
    <div className='outerPositionDiv'>
      <p>Positions ({allPositions.length})</p>
      <table className='position'>
        <thead>
          <tr>
            <th className='th1'>Product</th>
            <th className='th2'>Instrument</th>
            <th className='th3'>Qty.</th>
            <th className='th4'>Avg.</th>
            <th className='th5'>LTP</th>
            <th className='th6'>P&L</th>
            <th className='th7'>Chg.</th>
          </tr>
        </thead>
        <tbody>
          {allPositions.map((stock, index)=> {
              return (
                <tr key={index}>
                  <td className='td1'><div>{stock.product}</div></td>
                  <td className='td2'>{stock.name}</td>
                  <td className='td3'>{stock.qty}</td>
                  <td className='td4'>{stock.avg.toFixed(2)}</td>
                  <td className='td5'>{stock.price.toFixed(2)}</td>
                  <td className='td6' style={(stock.price*stock.qty - stock.avg * stock.qty)[0] == "+" ? {color: "#67C988"} : {color: "#DF4949"}}>{(stock.price*stock.qty - stock.avg * stock.qty).toFixed(2)}</td>
                  <td className='td7' style={stock.day[0] == "+" ? {color: "#67C988"} : {color: "#DF4949"}}>{stock.day}</td>
                </tr>
              )
          })}
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td className='td5'>Total</td>
            <td className='td6'>49.94</td>
            <td></td>
          </tr>
        </tbody>
      </table>
      <div className='positionDiv'>
          {allPositions.map((stock, index) => (
            <div key={index} className='positionOuterDiv'>
              <div className='positionInnerDiv1'>
                <p className='positionPara1'><span>Qty.</span> {stock.qty}</p>
                <p className='positionPara2'><span>LTP</span> {stock.price.toFixed(2)}</p>
              </div>
              <div className='positionInnerDiv2'>
                <p className='positionPara3'>{stock.name}</p>
                <p className='positionPara4'>&#8377;{stock.avg.toFixed(2)}</p>
                <p className='positionPara5'><span style={stock.net[0] == "+" ? {color: "#67C988"} : {color: "#DF4949"}}>{stock.net}</span> {(stock.qty*stock.price - stock.avg*stock.qty).toFixed(2)}</p>
              </div>
            </div>
          ))}
          <div className='positionInnerDiv3'>
            <p className='positionPara6'>Total P/L</p>
            <p className='positionPara7'>49.94</p>
          </div>
      </div>
    </div>
  )
}

export default Position
