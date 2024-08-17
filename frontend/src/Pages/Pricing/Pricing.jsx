import React from 'react'
import HeroPricing from '../../Components/Pricing/HeroPricing'
import Equity from '../../Components/Pricing/Equity'
import OpenAccount from '../../Components/OpenAccount'
import Instruction from '../../Components/Pricing/Instruction'

const Pricing = () => {
  return (
    <div>
      <HeroPricing/>
      <hr style={{margin: "0 10vw", border: "1px solid #eee"}}/>
      <Equity/>
      <hr style={{margin: "0 10vw", border: "1px solid #eee", marginBottom: "-5rem"}}/>
      <OpenAccount/>
      <Instruction/>
    </div>
  )
}

export default Pricing
