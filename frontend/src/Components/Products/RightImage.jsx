import React from 'react'
import "./RightImage.css"
import EastIcon from '@mui/icons-material/East';

const RightImage = ({img, head, data, text}) => {
  return (
    <div className='container outerRightImageDiv'>
      <div className='innerRightImageDiv1'>
        <img src={img} />
      </div>
      <div className='innerRightImageDiv2'>
        <h2>{head}</h2>
        <p>{data}</p>
        <a>{text}<EastIcon style={{fontSize: "1rem"}}/></a>
      </div>
    </div>
  )
}

export default RightImage
