import React from 'react'
import Image6 from '../../assets/image6.png'
import Image39 from '../../assets/image39.png'
import Image40 from '../../assets/image40.png'
import Image41 from '../../assets/image41.png'
import Image42 from '../../assets/image42.png'
import Image43 from '../../assets/image43.png'
import Image44 from '../../assets/image44.png'
import Image45 from '../../assets/image45.png'
import Image46 from '../../assets/image46.png'
import { Button } from 'antd'

// styling left
function InnovationOverview() {
  return (
    <div>
      <div>
        <img className='inno-image' src={Image6} alt="" />
      </div>

      <div>
        <h1 className='inno-heading'>Innovation</h1>
        <p className='inno-description'>Audi is changing. Continuously. Discover here how our innovations ensure "Vorsprung durch Technik," how modern technology and progressive thinking characterize Audi, which processes are behind them and how our engineers work to further develop the existing.</p>
      </div>

      <div className='inno-section1'>

        <div className='inno-grid1'>

          <div className='inno-card1'>
            <img className='inno-image1' src={Image39} alt="" />
            <span className='inno-title1'>Product Innovation</span>
            <p className='inno-description1'>Audi is shaping the sustainable mobility of tomorrow, combining innovative technologies with progressive design along the way. Now is exactly the right moment for courageous and creative minds to ask unfamiliar questions and leave well-trodden paths.</p>
            <a className='inno-read-btn1' href="#">Read more<i class="fa-solid fa-angle-right"></i></a>
          </div>

          <div className='inno-card1'>
            <img className='inno-image1' src={Image40} alt="" />
            <span className='inno-title1'>Future technologies</span>
            <p className='inno-description1'>Description alt: Autonomous driving, virtual reality or artificial intelligence: For Audi, the term mobility encompasses much more than just getting from point A to point B. In this way, Audi wants to help ensure that new technological possibilities can be used responsibly.</p>
            <a className='inno-read-btn1' href="#">Read more<i class="fa-solid fa-angle-right"></i></a>
          </div>

          <div className='inno-card1'>
            <img className='inno-image1' src={Image41} alt="" />
            <span className='inno-title1'>Digitalization</span>
            <p className='inno-description1'>Audi is systematically driving forward the digitization of the vehicle and the customer experience. And Production is also working on the Smart Factory, the intelligent, digitally networked factory of the future.</p>
            <a className='inno-read-btn1' href="#">Read more<i class="fa-solid fa-angle-right"></i></a>
          </div>

          <div className='inno-card1'>
            <img className='inno-image1' src={Image42} alt="" />
            <span className='inno-title1'>Research</span>
            <p className='inno-description1'>The future begins today: with our visions, decisions and investments. At Audi, we are always looking for solutions that move people. That means first understanding what matters and is important to them: today and tomorrow.</p>
            <a className='inno-read-btn1' href="#">Read more<i class="fa-solid fa-angle-right"></i></a>
          </div>
        </div>
      </div>

      <div>
        <img className='inno-image2' src={Image43} alt="" />
        <h2 className='inno-title2'>Audi driving experience</h2>
        <span className='inno-description2'>Driving and safety training courses on Audi dynamic tracks, exclusive Alpine tours, winter training courses in Scandinavia - the Audi driving experience offers Audi fans unforgettable driving experiences.</span>
        <Button className='inno-read-btn2'>Read more</Button>
      </div>

      <div className='inno-section3'>

        <div className='inno-grid3'>

          <div className='inno-card3'>
            <img className='inno-image3' src={Image44} alt="" />
            <span className='inno-date'>11/03/2025</span>
            <span className='inno-title3'>The Audi A6 e-tron: Illuminating insights!</span>
            <p className='inno-description3'>Digital OLED rear lights 2.0, communication light, illuminated rings: How Audi is redefining light with lighting technology in the Audi A6 e-tron.</p>
            <a className='inno-read-btn3' href="">Read more <i class="fa-solid fa-angle-right"></i></a>
            <span className='inno-point'>Power consumption (combined): 17.5–14.4 kWh/100km; CO₂ emissions (combined): 0 g/km; CO₂ emission class: A</span>
          </div>

          <div className='inno-card3'>
            <img className='inno-image3' src={Image45} alt="" />
            <span className='inno-date'>10/09/2024</span>
            <span className='inno-title3'>Record-breaking aerodynamics</span>
            <p className='inno-description3'>The Audi A6 Sportback e-tron combines aerodynamics and energy efficiency for range and performance. Find out more now.</p>
            <a className='inno-read-btn3' href="">Read more <i class="fa-solid fa-angle-right"></i></a>
            <span className='inno-point'>Audi A6 Sportback e-tron performance: Combined electric power consumption in kWh/100 km (62.1 mi): 15.9-14.0; combined CO2 emissions in g/km (g/mi): 0 (0) CO2-class: A</span>
          </div>

          <div className='inno-card3'>
            <img className='inno-image3' src={Image46} alt="" />
            <span className='inno-date'>26/07/2024</span>
            <span className='inno-title3'>24 hours at the Audi charging hub in Nuremberg</span>
            <p className='inno-description3'>The Audi charging hub in Nuremberg is more than just a state-of-the-art fast-charging solution. Customers share their experiences.</p>
            <a className='inno-read-btn3' href="">Read more <i class="fa-solid fa-angle-right"></i></a>
          </div>

        </div>
      </div>

    </div>
  )
}

export default InnovationOverview