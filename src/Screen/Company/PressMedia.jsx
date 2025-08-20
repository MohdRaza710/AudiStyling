import React from 'react'
import Image38 from '../../assets/image38.png'
import { Button } from 'antd'

// styling left
function PressMedia() {
  return (
    <div>
        <div>
            <img className='media-image' src={Image38} alt="" />
        </div>
        <div>
            <h1 className='media-heading'>Press & Media</h1>
            <p className='media-description'>Are you a journalist, blogger, or online multiplier? In the Audi MediaCenter, you will find the Audi Group’s press releases, company images, videos, products, and motorsport activities.</p>
            <Button className='media-read-btn'>To the Audi MediaCenter</Button>
        </div>
    </div>
  )
}

export default PressMedia