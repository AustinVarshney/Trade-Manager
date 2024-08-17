import React from 'react'
import HeroProducts from '../../Components/Products/HeroProducts'
import LeftImage from '../../Components/Products/LeftImage'
import kiteImage from "../../assets/kite.png"
import RightImage from '../../Components/Products/RightImage'
import consoleLog from "../../assets/console.png"
import coinImg from "../../assets/coin.png"
import kiteConnectImg from "../../assets/kiteconnect.png"
import varsityImg from "../../assets/varsity.png"
import Universe from '../../Components/Products/Universe'

const Products = () => {
  return (
    <div>
      <HeroProducts/>
      <hr style={{marginBottom: "1rem", border: "1px solid #eee"}}/>

      <LeftImage img={kiteImage} head="Kite" data="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices." link1="Try Demo" link2="Learn More"/>
    
      <RightImage img={consoleLog} head="Console" data="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations." text="Learn more"/>

      <LeftImage img={coinImg} head="Coin" data="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices." link1="Coin" link2="Try Demo"/>

      <RightImage img={kiteConnectImg} head="Kite Connect API" data="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase." text="Kite Connect"/>

      <LeftImage img={varsityImg} head="Varsity mobile" data="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go." link1="Try Demo" link2="Learn More"/>

      <Universe/>
    </div>
  )
}

export default Products
