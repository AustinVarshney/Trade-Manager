import React, { useEffect, useState } from 'react'
import "./Summary.css"


const Summary = ({user}) => {

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
    </div>
  )
}

export default Summary