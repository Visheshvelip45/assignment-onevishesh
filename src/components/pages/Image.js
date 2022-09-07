import React from 'react'
import dogImg from '../images/1.webp'
import './style.css'

const Image = () => {
  return (
    <div className='image'>
        <img src={dogImg} alt='Dog Image' />
    </div>
  )
}

export default Image