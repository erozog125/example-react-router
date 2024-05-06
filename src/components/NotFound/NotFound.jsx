import React from 'react'
import notFound from '../../assets/images/Page_not_found.png'

export const NotFound = () => {
  return (
    <div className='container-page'>
      <h2 className='title-page'>I'm Contact Me</h2>
      <img src={notFound} alt="Page Not Found" />
    </div>
  )
}