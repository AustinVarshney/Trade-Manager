import React from 'react'
import "./Universe.css"
import smallCaseImg from "../../assets/smallcaseLogo.png"
import streakImg from "../../assets/streakLogo.png"
import sensibullImg from "../../assets/sensibullLogo.svg"
import zerodhaImg from "../../assets/zerodhaFundhouse.png"
import tijoriImg from "../../assets/TijoriImage.svg"
import dittoImg from "../../assets/dittoLogo.png"

const Universe = () => {
    return (
        <div className='container outerUniverseDiv'>
            <p className='outerPara1'>Want to know more about our technology stack? Check out the <span>Zerodha.tech</span> blog.</p>
            <h5>The Zerodha Universe</h5>
            <p className='outerPara2'>Extend your trading and investment experience even further with our partner platforms</p>
            <div className='innerUniverseDiv1'>
                <div>
                    <div className='innerMostUniverseDiv1'>
                        <img src={smallCaseImg} />
                        <p>Thematic investment platform</p>
                    </div>
                    <div className='innerMostUniverseDiv2'>
                        <img src={streakImg} />
                        <p>Algo & strategy platform</p>
                    </div>
                    <div className='innerMostUniverseDiv3'>
                        <img src={sensibullImg} />
                        <p>Options trading platform</p>
                    </div>
                </div>
                <div>
                    <div className='innerMostUniverseDiv4'>
                        <img src={zerodhaImg} />
                        <p>Asset management</p>
                    </div>
                    <div className='innerMostUniverseDiv5'>
                        <img src={tijoriImg} />
                        <p>Fundamental research platform</p>
                    </div>
                    <div className='innerMostUniverseDiv6'>
                        <img src={dittoImg} />
                        <p>Insurance</p>
                    </div>
                </div>
            </div>
            <div className='innerUniverseDiv2'>
                <button>Sign Up Now</button>
            </div>
        </div>
    )
}

export default Universe
