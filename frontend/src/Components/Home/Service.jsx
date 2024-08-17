import React from 'react'
import "./Service.css"
import ServiceImg from "../../assets/ecosystem.png"
import EastIcon from '@mui/icons-material/East';

const Service = () => {
  return (
    <div className='container serviceOuterDiv'>
      <div className='innerServiceDiv1'>
        <h2>Trust with confidence</h2>
        <div>
          <h4>Customer-first always</h4>
          <p>That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores worth of equity investments.</p>
        </div>
        <div>
          <h4>No spam or gimmicks</h4>
          <p>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.</p>
        </div>
        <div>
          <h4>The Zerodha universe</h4>
          <p>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
        </div>
        <div>
          <h4>Do better with money</h4>
          <p>With initiatives like <span>Nudge</span> and <span>Kill Switch</span>, we don't just facilitate transactions, but actively help you do better with your money.</p>
        </div>
      </div>
      <div className='innerServiceDiv2'>
        <div className='innerMostDiv1'>
          <img src={ServiceImg} />
        </div>
        <div className='innerMostDiv2'>
          <p>Explore our products <EastIcon style={{fontSize: "1rem"}}/></p>
          <p>Try Kite demo <EastIcon style={{fontSize: "1rem"}}/></p>
        </div>
      </div>
    </div>
  )
}

export default Service
