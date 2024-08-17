import React from 'react'
import "./Price.css"
import EastIcon from '@mui/icons-material/East';

const Price = () => {
  return (
    <div className='container outerPriceDiv'>
      <div className='innerPriceDiv1'>
        <h3>Unbeatable pricing</h3>
        <p style={{fontSize: "1rem", color: "#424242", marginBottom: "1.25rem"}}>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
        <p className='priceDiv1'><span>See Pricing <EastIcon style={{fontSize: "1rem"}}/></span></p>
      </div>
      <div className='innerPriceDiv2'>
        <div className='innerMostPriceDiv1' style={{borderRight: "0"}}>
            <h4>&#x20B9;0</h4>
            <p>Free equity delivery and direct mutual funds</p>
        </div>
        <div className='innerMostPriceDiv2'>
            <h4>&#x20B9;20</h4>
            <p>Intraday and F&O</p>
        </div>
      </div>
    </div>
  )
}

export default Price
