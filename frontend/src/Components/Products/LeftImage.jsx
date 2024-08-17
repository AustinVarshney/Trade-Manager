import React from 'react'
import "./LeftImage.css"
import googlePlayImage from "../../assets/googlePlayBadge.svg"
import appStoreBadge from "../../assets/appstoreBadge.svg"
import EastIcon from '@mui/icons-material/East';

const LeftImage = ({ img, head, data, link1, link2 }) => {
  return (
    <div className='container outerLeftDiv'>
      <div className='innerLeftDiv1'>
        <img src={img} />
      </div>
      <div className='innerLeftDiv2'>
        <h2>{head}</h2>
        <p>{data}</p>
        <div className='innerMostLeftDiv1'>
          <a>{link1}<EastIcon style={{fontSize: "1rem"}}/></a>
          <a>{link2}<EastIcon style={{fontSize: "1rem"}}/></a>
        </div>
        <div className='innerMostLeftDiv2'>
          <a><img src={googlePlayImage} /></a>
          <a><img src={appStoreBadge} /></a>
        </div>
      </div>
    </div>
  )
}

export default LeftImage
