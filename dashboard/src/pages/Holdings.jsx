import React from 'react'
import Topbar from '../components/Topbar'
import Menu from '../components/Menu'
import Watchlist from '../components/Watchlist'
import Holding from '../components/Holding'

const Holdings = () => {
  return (
    <div className='outerHomeDiv'>
      <div className='innerHomeDiv1'>
        <div className='innerMostHomeDiv1'>
          <Topbar/>
        </div>
        <div className='innerMostHomeDiv2'>
          <Watchlist/>
        </div>
      </div>
      <div className='innerHomeDiv2'>
        <div className='innerMostHomeDiv3'>
          <Menu/>
        </div>
        <div className='innerMostHomeDiv4'>
          <Holding/>
        </div>
      </div>
    </div>
  )
}

export default Holdings
