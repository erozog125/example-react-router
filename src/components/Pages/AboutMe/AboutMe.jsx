import React from 'react'
import aboutme from '../../../assets/images/aboutme.png'

export const AboutMe = () => {
  return (
    <div className='container-page'>
      <h2 className='title-page'>I'm AboutMe</h2>
      <img src={aboutme} alt="About Me" />
    </div>
  )
}
