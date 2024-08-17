import React from 'react'
import "./Fund.css"
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const Fund = () => {
  return (
    <div className='outerFundDiv'>
      <div className='innerFundDiv1'>
        <p>Instant, zero-cost fund transfers with UPI</p>
        <button className='buttonFund1'><a href="#">Add funds</a></button>
        <button className='buttonFund2'><a href="#">Withdraw</a></button>
      </div>
      <div className='innerFundDiv2'>
        <div className='innerMostFundDiv1'>
          <p><AccessTimeIcon/>Equity</p>
          <div>
            <div>
              <div>
                <p>Available margin</p>
                <p>Used margin</p>
                <p>Available cash</p>
              </div>
              <div>
                <p>4,043.10</p>
                <p>3,757.30</p>
                <p>4,043.10</p>
              </div>
            </div>
            <hr style={{margin: "0 1rem", borderTop: "0", borderLeft: "0", borderBottom: "1px solid #d5d5d5"}}/>
            <div>
              <div>
                <p>Opening Balance</p>
                <p>Payin</p>
                <p>Payout</p>
                <p>SPAN</p>
                <p>Delivery margin</p>
                <p>Exposure</p>
                <p>Options premium</p>
              </div>
              <div>
                <p>4,043.10</p>
                <p>3,757.30</p>
                <p>4,043.10</p>
                <p>4,043.10</p>
                <p>3736.40</p>
                <p>4064.00</p>
                <p>0.00</p>
              </div>
            </div>
            <hr style={{margin: "0 1rem", borderTop: "0", borderLeft: "0", borderBottom: "1px solid #d5d5d5"}}/>
            <div>
              <div>
                <p>Delivery margin</p>
                <p>Exposure</p>
                <p>Options premium</p>
              </div>
              <div>
                <p>0.00</p>
                <p>0.00</p>
                <p>0.00</p>
              </div>
            </div>
          </div>
        </div>
        <div className='innerMostFundDiv2'>
          <p>You don't have a commodity account</p>
          <button><a href="#">Open Account</a></button>
        </div>
      </div>
    </div>
  )
}

export default Fund
