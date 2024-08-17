import React from 'react'
import "./Topbar.css"

const Topbar = () => {
  return (
    <div className='outerTopbarDiv'>
      <div className='innerTopbarDiv1'>
        <h5 className='innerMostTopbarDiv1'>NIFTY 50</h5>
        <h5 className='innerMostTopbarDiv2'>100.2</h5>
      </div>
      <div className='innerTopbarDiv2'>
        <h5 className='innerMostTopbarDiv3'>SENSEX</h5>
        <h5 className='innerMostTopbarDiv4'>100.2</h5>
      </div>
    </div>
  )
}

export default Topbar
