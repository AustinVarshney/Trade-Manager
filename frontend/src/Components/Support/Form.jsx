import React from 'react'
import "./Form.css"

const Form = () => {
  return (
    <div className='container outerFormDiv' style={{paddingTop: "9rem", paddingBottom: "6rem"}}>
      <div className='innerFormDiv1'>
        <h4>Support Portal</h4>
        <a>Track tickets</a>
      </div>
      <div className='innerFormDiv2'>
        <div className='innerMostFormDiv1'>
            <p>Search for an answer or browse help topics to create a ticket</p>
            <input type="text" placeholder='Eg: how do i activate F&O, why is my order getting rejected ...'/>
            <div>
                <a>Track account opening</a>
                <a>Track segment activation</a>
                <a>Intraday margins</a>
                <a>Kite user manual</a>
            </div>
        </div>
        <div className='innerMostFormDiv2'>
            <p>Featured</p>
            <ol>
                <li>Current Takeovers and Delisting - July 2024</li>
                <li>Surveillance measure on scrips - July 2024</li>
            </ol>
        </div>
      </div>
    </div>
  )
}

export default Form
