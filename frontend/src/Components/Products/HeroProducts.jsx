import React from 'react'
import "./HeroProducts.css"
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';

const HeroProducts = () => {
    return (
        <div className='container outerHeroProductDiv' style={{ paddingTop: "9rem", paddingBottom: "6rem" }}>
            <h2>Technology</h2>
            <p className='innerHeroProductPara1'>Sleek, modern, and intuitive trading platforms</p>
            <p className='innerHeroProductPara2'>Check out our <a>investment offerings <TrendingFlatIcon style={{ fontSize: "1.5rem" }} /></a></p>
        </div>
    )
}

export default HeroProducts
