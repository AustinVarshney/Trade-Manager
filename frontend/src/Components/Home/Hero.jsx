import React from 'react'
import "./Hero.css"
import homeHero from "../../assets/homeHero.png"

const Hero = () => {
  return (
    <div className='container outerHeroDiv' style={{paddingTop: "4.23rem"}}>
      <div className='heroDiv1'>
        <img src={homeHero} />
      </div>
      <div className='heroDiv2'>
        <h2>Invest in everything</h2>
        <p>Online platform to invest in stocks, derivatives, mutual funds, and more</p>
        <button>Sign Up Now</button>
      </div>
    </div>
  )
}

export default Hero
