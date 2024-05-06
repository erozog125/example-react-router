import React from 'react'
import portfolio from '../../../assets/images/portfolio.png'

export const Portfolio = () => {
  return (
    <div className='container-page'>
      <h2 className='title-page'>I'm Portfolio</h2>
      <img src={portfolio} alt="portfolio" />
    </div>
  )
}
