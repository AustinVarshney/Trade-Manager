import React from 'react'
import "./Equity.css"
import pricing0 from "../../assets/pricingEquity.svg"
import pricing20 from "../../assets/intradayTrades.svg"

const Equity = () => {
  return (
    <div className='container outerEquityDiv'>
      <div className='innerEquityDiv1'>
        <img src={pricing0} />
        <h6>Free equity delivery</h6>
        <p>All equity delivery investments (NSE, BSE), are absolutely free — &#8377; 0 brokerage.</p>
      </div>
      <div className='innerEquityDiv2'>
        <img src={pricing20} />
        <h6>Intraday and F&O trades</h6>
        <p>Flat &#8377; 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat &#8377;20 on all option trades.</p>
      </div>
      <div className='innerEquityDiv3'>
        <img src={pricing0} />
        <h6>Free direct MF</h6>
        <p>All direct mutual fund investments are absolutely free — &#8377; 0 commissions & DP charges.</p>
      </div>
    </div>
  )
}

export default Equity
