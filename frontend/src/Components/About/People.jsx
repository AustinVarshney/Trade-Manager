import React from 'react'
import "./People.css"
import PeopleImg from "../../assets/nithinKamath.jpg"

const People = () => {
  return (
    <div className='container'>
        <h3>People</h3>
        <div className='innerPeopleDiv'>
            <div className='innerMostPeopleDiv1'>
                <img src={PeopleImg} alt="" />
                <p className='innerParaPeople1'>Nithin Kamath</p>
                <p className='innerParaPeople2'>Founder, CEO</p>
            </div>
            <div className='innerMostPeopleDiv2'>
                <p className='innerParaPeople3'>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
                <p className='innerParaPeople3'>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
                <p className='innerParaPeople3'>Playing basketball is his zen.</p>
                <p className='innerParaPeople3'>Connect on <span>Homepage</span> / <span>TradingQnA</span> / <span>Twitter</span></p>
            </div>
        </div>
    </div>
  )
}

export default People
