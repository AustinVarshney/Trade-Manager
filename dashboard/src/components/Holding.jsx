import React, { useEffect, useState } from 'react'
import "./Holding.css"
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import VerticalGraph from "./VerticalGraph";
// import {holdings} from "../../src/assets/assets.js"

import axios from 'axios';

Chart.register(CategoryScale);

const Holding = () => {
  let [allHoldings, setAllHoldings] = useState([]);

  const data = {
    labels: allHoldings.map((holding) => holding.name),
    datasets: [
      {
        label: "Stock Price",
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 205, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(201, 203, 207, 0.2)'
        ],
        borderColor: [
          'rgb(255, 99, 132)',
          'rgb(255, 159, 64)',
          'rgb(255, 205, 86)',
          'rgb(75, 192, 192)',
          'rgb(54, 162, 235)',
          'rgb(153, 102, 255)',
          'rgb(201, 203, 207)'
        ],
        borderWidth: 1,
        data: allHoldings.map((holding) => holding.price.toFixed(2)),
      },
    ],
  };

  useEffect(() => {
    axios.get("http://localhost:8080/allHoldings").then((res) => {
      setAllHoldings(res.data);
    })
  }, [])


  // const data = allHoldings;

  return (
    <div className='outerHoldingDiv'>
      <p>Holdings ({allHoldings.length})</p>
      <table className='holding'>
        <thead>
          <tr>
            <th className='th1'>Instrument</th>
            <th className='th2'>Qty.</th>
            <th className='th3'>Avg. cost</th>
            <th className='th4'>LTP</th>
            <th className='th5'>Cur. value</th>
            <th className='th6'>P&L</th>
            <th className='th7'>Net chg.</th>
            <th className='th8'>Day chg.</th>
          </tr>
        </thead>
        <tbody>
          {allHoldings.map((holding, index) => (
            <tr key={index}>
              <td className='td1'>{holding.name}</td>
              <td className='td2'>{holding.qty}</td>
              <td className='td3'>{holding.avg.toFixed(2)}</td>
              <td className='td4'>{holding.price.toFixed(2)}</td>
              <td className='td5'>{holding.qty * holding.price.toFixed(2)}</td>
              <td className='td6' style={(holding.qty * holding.price - holding.avg * holding.qty).toFixed(2) > 0 ? { color: "#67C988" } : { color: "#DF4949" }}>{(holding.qty * holding.price - holding.avg * holding.qty).toFixed(2)}</td>
              <td className='td7' style={holding.net[0] == "+" ? { color: "#67C988" } : { color: "#DF4949" }}>{holding.net}</td>
              <td className='td8' style={holding.day[0] == "+" ? { color: "#67C988" } : { color: "#DF4949" }}>{holding.day}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className='holdingDiv'>
        {allHoldings.map((holding, index) => (
          <div key={index} className='holdingOuterDiv'>
            <div className='holdingInnerDiv1'>
              <p className='holdingPara1'><span>Qty.</span> {holding.qty}</p>
              <p className='holdingPara2'><span>LTP</span> {holding.price.toFixed(2)}</p>
            </div>
            <div className='holdingInnerDiv2'>
              <p className='holdingPara3'>{holding.name}</p>
              <p className='holdingPara4'>&#8377;{holding.avg.toFixed(2)}</p>
              <p className='holdingPara5'><span style={holding.net[0] == "+" ? { color: "#67C988" } : { color: "#DF4949" }}>{holding.net}</span> {(holding.qty * holding.price - holding.avg * holding.qty).toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>
      <div className='innerHoldingDiv1'>
        <div className='innerMostHoldingDiv1'>
          <p>29,875<span>.55</span></p>
          <p>Total investment</p>
        </div>
        <div className='innerMostHoldingDiv2'>
          <p>31,428<span>.95</span></p>
          <p>Current value</p>
        </div>
        <div className='innerMostHoldingDiv3'>
          <p>1,553.40 <br /><span>(+5.20%)</span></p>
          <p>P&L</p>
        </div>
      </div>
      <div>
        <VerticalGraph chartData={data} />
      </div>
    </div>
  )
}

export default Holding
