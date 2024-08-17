import React from 'react'
import HeroAbout from '../../Components/About/HeroAbout'
import DataAbout from '../../Components/About/DataAbout'
import People from '../../Components/About/People'

const About = () => {
  return (
    <div>
      <HeroAbout/>
      <hr style={{marginBottom: "1rem", border: "1px solid #eee"}}/>
      <DataAbout/>
      <People/>
    </div>
  )
}

export default About
