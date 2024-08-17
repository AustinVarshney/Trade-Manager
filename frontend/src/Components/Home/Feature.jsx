import React from 'react'
import "./Feature.css"
import FeatureImage from "../../assets/FeatureImage.svg"
import PressLogos from "../../assets/pressLogos.png"

const Feature = () => {
    return (
        <div className='container featureOuterDiv'>
            <div className='featureDiv1'>
                <img src={FeatureImage} />
            </div>
            <div className='featureDiv2'>
                <div>
                    <h2>Largest stock broker in India</h2>
                </div>
                <div>
                    <p>1.5+ Crore Zerodha clients contribute to over 15% of all retail order volumes in India daily by trading and investing in:</p>
                </div>
                <div className='featureDiv3'>
                    <div className='FeatureInnerDiv1'>
                        <ul>
                            <li>Futures and Options</li>
                            <li>Commodity derivatives</li>
                            <li>Currency derivatives</li>
                        </ul>
                    </div>
                    <div className='FeatureInnerDiv1'>
                        <ul>
                            <li>Stocks & IPOs</li>
                            <li>Direct mutual funds</li>
                            <li>Bonds and Govt. Securities</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <img src={PressLogos} />
                </div>
            </div>
        </div>
    )
}

export default Feature
