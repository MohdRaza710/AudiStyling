import React from 'react'
import Image134 from '../../assets/image134.png'
import Image135 from '../../assets/image135.png'
import Image136 from '../../assets/image136.png'
import Image137 from '../../assets/image137.png'
import Image138 from '../../assets/image138.png'
import Image139 from '../../assets/image139.png'
import { Button } from 'antd'
import { RightOutlined } from '@ant-design/icons';

function Design() {
  return (
    <div>
      <div>
        <img className='dg-image' src={Image134} alt="" />
      </div>

      <div className='dg-content'>
        <p className='dg-paragraph'>The vehicle referred to is a concept car that is not available in series production.</p>
      </div>

      <div className='dg-section'>
        <h1 className='dg-heading'>Design</h1>
        <p className='dg-description'>Audi design philosophy is based on four principles: clear, technical, intelligent and emotional. Focusing its design on the essential, the brand stands for a reduced and timeless aesthetic. This approach extends to every aspect of the car – and beyond.</p>
      </div>

      <div className='dg-section1'>
        <div className='dg-content-column'>
          <h3 className='dg-title1'>Strive for clarity</h3>
          <p className='dg-description1'>For Audi, clarity is more than a design philosophy. It shapes every decision within the company. A closer look.</p>
          <a className='dg-btn1'>Read more</a>
        </div>

        <div className='dg-image-column'>
          <img className='dg-image1' src={Image135} alt="" />
          <p className='dg-point1'>The vehicle referred to is a concept car that is not available in series production.</p>
        </div>
      </div>

      <div className='dg-section2'>
        <div className='dg-image-column2'>
          <img className='dg-image2' src={Image136} alt="" />
        </div>

        <div className='dg-content-column2'>
          <h3 className='dg-title2'>Clarity is a way of life</h3>
          <p className='dg-description2'>British actor and director Harris Dickinson embodies the belief that imagination and risk-taking fuel growth — making him the face of the “Strive for Clarity” campaign.</p>
          <a className='dg-btn2'>Learn more</a>
          <p className='dg-point2'>The vehicle referred to is a concept car that is not available in series production.</p>
        </div>

      </div>

      <div className='dg-section3'>

        <div className='dg-grid3'>

          <div className='dg-card3'>
            <img className='dg-image3' src={Image137} alt="" />
            <h3 className='dg-title3'>The Radical Next</h3>
            <p className='dg-description3'>At its best, Audi is an unmistakable combination of clarity, technicality, intelligence, and emotion. These principles are the four fundamental pillars of Audi new design philosophy.</p>
            <a className='dg-link3' href="">Read more <RightOutlined /></a>
          </div>

          <div className='dg-card3'>
            <img className='dg-image3' src={Image138} alt="" />
            <h3 className='dg-title3'>A history of clarity</h3>
            <p className='dg-description3'>Clarity is a tradition at Audi – it remains both a guiding principle and an aspiration. It has shaped the history of the company. A closer look.</p>
            <a className='dg-link3' href="">Read more <RightOutlined /></a>
          </div>

          <div className='dg-card3'>
            <img className='dg-image3' src={Image139} alt="" />
            <h3 className='dg-title3'>Audi design philosophy</h3>
            <p className='dg-description3'>Interview with Massimo Frascella, Chief Creative Officer, about the Audi design philosophy.</p>
            <a className='dg-link3' href="">To the Audi MediaCenter <RightOutlined /></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Design