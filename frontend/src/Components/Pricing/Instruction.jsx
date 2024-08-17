import React from 'react'
import "./Instruction.css"

const Instruction = () => {
  return (
    <div className='container outerInstructionDiv'>
      <div className='innerInstructionDiv1'>
        <a href="#">Brokerage calculator</a>
        <a href="#">List of charges</a>
      </div>
      <div className='innerInstructionDiv2'>
        <ul>
            <li>Call & Trade and RMS auto-squareoff: Additional charges of &#8377;50 + GST per order.</li>
            <li>Digital contract notes will be sent via e-mail.</li>
            <li>Physical copies of contract notes, if required, shall be charged &#8377;20 per contract note. Courier charges apply.</li>
            <li>For NRI account (non-PIS), 0.5% or ₹100 per executed order for equity (whichever is lower).</li>
            <li>For NRI account (PIS), 0.5% or &#8377;200 per executed order for equity (whichever is lower).</li>
            <li>If the account is in debit balance, any order placed will be charged &#8377;40 per executed order instead of &#8377;20 per executed order.</li>
        </ul>
      </div>
    </div>
  )
}

export default Instruction
