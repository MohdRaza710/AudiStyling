import React from 'react'
import Image5 from '../../assets/image5.png'
import Image83 from '../../assets/image83.png'
import Image96 from '../../assets/image96.png'
import Image97 from '../../assets/image97.png'
import Image98 from '../../assets/image98.png'
import Image99 from '../../assets/image99.png'
import Image100 from '../../assets/image100.png'
import Image101 from '../../assets/image101.png'
import Image102 from '../../assets/image102.png'
import Video1 from '../../assets/video1.mp4'

// styling left
function CareersOverview() {
  return (
    <div>
      <div>
        <img className='carer-image' src={Image5} alt="" />
      </div>
      <div>
        <h1 className='carer-heading'>Driven by tech. Driven by people.</h1>
        <p className='carer-description'>Progress is more than just a matter of technology. It begins in the mind – driven by people who are passionate about what they do, who think ahead, and who don’t let setbacks steer them off course. These people define who we are, and these are the people we need. Progress. Driven by you.</p>
      </div>
      <div>
        <span className='carer-span'>Find the right job at Audi.</span>
        <a className='carer-a' href="">To the jobs</a>
      </div>

      <div className='carer-section1'>
        <span className='carer-heading1'>Find Your Way to Audi</span>

        <div className='carer-grid1'>

          <div className='carer-card1'>
            <img className='carer-image1' src={Image96} alt="" />
            <p className='carer-text1'>Professionals</p>
          </div>

          <div className='carer-card1'>
            <img className='carer-image1' src={Image97} alt="" />
            <p className='carer-text1'>Graduates</p>
          </div>

          <div className='carer-card1'>
            <img className='carer-image1' src={Image98} alt="" />
            <p className='carer-text1'>School Students</p>
          </div>

          <div className='carer-card1'>
            <img className='carer-image1' src={Image83} alt="" />
            <p className='carer-text1'>Students</p>
          </div>

        </div>
      </div>

      <div className='carer-section2'>
        <video autoplay crossorigin="anonymous" controls playsinline poster controlslist="nodownload noplaybackrate" disablepictureinpicture="" preload="metadata" className='carer-video1' loop>
          <source media="(min-width:320px)" src={Video1} />
        </video>
        <span className='carer-title1'>Driven by tech. Driven by people.</span>
        <p className='carer-description1'>The transformation of mobility is changing the world. And we are changing with it. Boosted by a strength that has always been anchored in the DNA of our company: the strength to lead. Today, more than ever, we aspire to lead the way and inspire through premium technology. With people who share this desire and wish to join us in shaping the future together. Our Tech Stories introduce these people and show how they work hard every day - from the development of the front camera to the high-voltage battery.</p>
        <a className='carer-link1' href="">Learn more</a>
      </div>
    </div>
  )
}

export default CareersOverview