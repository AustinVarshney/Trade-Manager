import React from 'react'
import "./Education.css"
import education from "../../assets/education.svg"
import EastIcon from '@mui/icons-material/East';

const Education = () => {
  return (
    <div className='container outerEducationDiv'>
      <div className='innerEducationDiv1'>
        <img src={education} />
      </div>
      <div className='innerEducationDiv2'>
        <h2>Free and open market education</h2>
        <div>
            <h4>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</h4>
            <p>Varsity <EastIcon style={{fontSize: "1rem"}}/></p>
        </div>
        <div>
            <h4>TradingQ&A, the most active trading and investment community in India for all your market related queries.</h4>
            <p>TradingQ&A <EastIcon style={{fontSize: "1rem"}}/></p>
        </div>
      </div>
    </div>
  )
}

export default Education
