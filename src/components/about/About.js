import React from 'react'
import './About.less'
import image from '../../images/photo.png'

const About = () => (
  <div className='about-container'>
    <div className='about'>
      <a href='http://www.linkedin.com/in/semenovanton' target='blank'><img className='about__image' src={image}/></a>
      <div className='about__text'>
        {'%about'.loc()}
        <a className='about__mail-link' href='mailto:anta.semenov@gmail.com'>{'%mailLink'.loc()}</a>
      </div>
    </div>
  </div>
)

export default About
