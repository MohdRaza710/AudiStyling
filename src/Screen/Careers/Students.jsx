import React from 'react'
import Image115 from '../../assets/image115.png'
import Image116 from '../../assets/image116.png'
import Image117 from '../../assets/image117.png'
import Image118 from '../../assets/image118.png'
import Image119 from '../../assets/image119.png'
import Image102 from '../../assets/image102.png'
import Image93 from '../../assets/image93.png'
import Image83 from '../../assets/image83.png'
import { Button } from 'antd'


// Styling Left
function Students() {
  return (
    <div>
      <div>
        <img className='std-image' src={Image83} alt="" />
      </div>

      <div className='std-section'>
        <h1 className='std-heading'>Students</h1>
        <p className='std-description'>You can acquire some practical experience with us during your studies as part of an internship, a dissertation or a dual Master's degree. You will learn more about our wide-ranging areas of work and processes, but most of all you will get to know us: the people at Audi.</p>
      </div>

      <div className='std-section1'>
        <span className='std-title1'>Find the right study program at audi</span>
        <Button className='std-btn1'>To the jobs</Button>
      </div>

      <div className='std-section2'>
        <div className='std-grid2'>
          <div className='std-card2'>
            <img className='std-image2' src={Image115} alt="" />
            <span className='std-title2'>Dual master's degree program</span>
          </div>

          <div className='std-card2'>
            <img className='std-image2' src={Image116} alt="" />
            <span className='std-title2'>Academic thesis</span>
          </div>

          <div className='std-card2'>
            <img className='std-image2' src={Image117} alt="" />
            <span className='std-title2'>Internship</span>
          </div>
        </div>
      </div>

      <div className='std-section3'>
        <span className='std-title3'>Do you have any questions concerning your application?</span>
        <span className='std-title3.1'>You can find our FAQ here</span>
        <Button className='std-btn3'>To the FAQ</Button>
      </div>

      <div className='std-section4'>
        <div className='std-grid4'>

          <div className='std-card4'>
            <img className='std-image4' src={Image118} alt="" />
            <span className='std-title4'>Bridgestone World Solar Challenge</span>
          </div>

          <div className='std-card4'>
            <img className='std-image4' src={Image93} alt="" />
            <span className='std-title4'>Working At Audi</span>
          </div>

          <div className='std-card4'>
            <img className='std-image4' src={Image119} alt="" />
            <span className='std-title4'>Formula Student</span>
          </div>
        </div>
      </div>

      <div className='std-section5'>
        <img className='std-image5' src={Image102} alt="" />
        <span className='std-title5'>Career-related events</span>
        <p className='std-description5'>You will recieve further information about career opportunities at our events. We are looking forward to seeing you!</p>
        <Button className='std-btn5'>Read more</Button>
      </div>

    </div>
  )
}

export default Students