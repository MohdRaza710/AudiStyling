import React from 'react'
import Image39 from '../../assets/image39.png'
import Image176 from '../../assets/image176.png'
import Image41 from '../../assets/image41.png'
import Image58 from '../../assets/image58.png'
import Image43 from '../../assets/image43.png'
import Image44 from '../../assets/image44.png'
import Image45 from '../../assets/image45.png'
import Image46 from '../../assets/image46.png'
import { RightOutlined } from '@ant-design/icons';

function InnovationOverview() {
  return (
    <div>
      <div>
        <img className='inno-image' src="https://emea-dam.audi.com/adobe/assets/urn:aaid:aem:73512284-811d-4746-873b-fe69f35f332b/as/1920x1080_innovation_uebersicht_04_A230547_large(1).jpg?width=1920" alt="" />
      </div>

      <div className='inno-content'>
        <h1 className='inno-heading'>Innovation</h1>
        <p className='inno-description'>Audi is changing. Continuously. Discover here how our innovations ensure "Vorsprung durch Technik," how modern technology and progressive thinking characterize Audi, which processes are behind them and how our engineers work to further develop the existing.</p>
      </div>

      <div className='inno-section1'>

        <div className='inno-grid1'>

          <div className='inno-card1'>
            <img className='inno-image1' src={Image39} alt="" />
            <h4 className='inno-title1'>Product Innovation</h4>
            <p className='inno-description1'>Audi is shaping the sustainable mobility of tomorrow, combining innovative technologies with progressive design along the way. Now is exactly the right moment for courageous and creative minds to ask unfamiliar questions and leave well-trodden paths.</p>
            <a className='inno-read-btn1' href="/productinnovation">Read more <RightOutlined /></a>
          </div>

          <div className='inno-card1'>
            <img className='inno-image1' src={Image176} alt="" />
            <h4 className='inno-title1'>Future technologies</h4>
            <p className='inno-description1'>Description alt: Autonomous driving, virtual reality or artificial intelligence: For Audi, the term mobility encompasses much more than just getting from point A to point B. In this way, Audi wants to help ensure that new technological possibilities can be used responsibly.</p>
            <a className='inno-read-btn1' href="/futuretechnologies">Read more <RightOutlined /></a>
          </div>

          <div className='inno-card1'>
            <img className='inno-image1' src={Image41} alt="" />
            <h4 className='inno-title1'>Digitalization</h4>
            <p className='inno-description1'>Audi is systematically driving forward the digitization of the vehicle and the customer experience. And Production is also working on the Smart Factory, the intelligent, digitally networked factory of the future.</p>
            <a className='inno-read-btn1' href="/digitalization">Read more <RightOutlined /></a>
          </div>

          <div className='inno-card1'>
            <img className='inno-image1' src={Image58} alt="" />
            <h4 className='inno-title1'>Academic Cooperation</h4>
            <p className='inno-description1'>Academic cooperation promotes the mutual transfer of knowledge and thus makes a decisive contribution to the innovative strength of Audi. Audi also cooperates with scientific institutions to attract young talent as well as to realize corporate responsibility.</p>
            <a className='inno-read-btn1' href="/academiccooperation">Read more <RightOutlined /></a>
          </div>
        </div>
      </div>

      <div className='inno-section2'>
        <div className='inno-content2'>
          <h3 className='inno-title2'>Audi driving experience</h3>
          <p className='inno-description2'>
            Driving and safety training courses on Audi dynamic tracks, exclusive Alpine tours, winter training courses in Scandinavia - the Audi driving experience offers Audi fans unforgettable driving experiences.
          </p>
          <a href="https://www.audi.de/de/audi-driving-experience-en/?pid:ADE:audi.com:p~teaser_highlight:n:o:ai~innovationEN" className='inno-read-btn2'>Read more</a>
          <p className='inno-point2'>
            Power consumption (combined)*: 20,8–18,7 kWh/100km; CO₂ emissions (combined)*: 0 g/km; CO₂ emission class*: A
          </p>
        </div>

        <div className='inno-image-container2'>
          <img className='inno-image2' src={Image43} alt="Red Audi car driving on a track" />
        </div>
      </div>

      <div className='inno-section3'>

        <h2 className='inno-heading-content'>
          <span className='inno-heading3'>You might also be interested in</span>
        </h2>

        <div className='inno-grid3'>

          <div className='inno-card3'>
            <img className='inno-image3' src={Image44} alt="" />
            <p className='inno-date'>11/03/2025</p>
            <h3 className='inno-title3'>The Audi A6 e-tron: Illuminating insights!</h3>
            <p className='inno-description3'>Digital OLED rear lights 2.0, communication light, illuminated rings: How Audi is redefining light with lighting technology in the Audi A6 e-tron.</p>
            <a className='inno-read-btn3' href="">Read more <RightOutlined /></a>
            <p className='inno-point'>Power consumption (combined): 17.5–14.4 kWh/100km; CO₂ emissions (combined): 0 g/km; CO₂ emission class: A</p>
          </div>

          <div className='inno-card3'>
            <img style={{height: '215px'}} className='inno-image3' src={Image45} alt="" />
            <p className='inno-date'>10/09/2024</p>
            <h3 className='inno-title3'>Record-breaking aerodynamics</h3>
            <p className='inno-description3'>The Audi A6 Sportback e-tron combines aerodynamics and energy efficiency for range and performance. Find out more now.</p>
            <a className='inno-read-btn3' href="">Read more <RightOutlined /></a>
            <p className='inno-point'>Audi A6 Sportback e-tron performance: Combined electric power consumption in kWh/100 km (62.1 mi): 15.9-14.0; combined CO2 emissions in g/km (g/mi): 0 (0) CO2-class: A</p>
          </div>

          <div className='inno-card3'>
            <img className='inno-image3' src={Image46} alt="" />
            <p className='inno-date'>26/07/2024</p>
            <h3 className='inno-title3'>24 hours at the Audi charging hub in Nuremberg</h3>
            <p className='inno-description3'>The Audi charging hub in Nuremberg is more than just a state-of-the-art fast-charging solution. Customers share their experiences.</p>
            <a className='inno-read-btn3' href="">Read more <RightOutlined /></a>
          </div>

        </div>
      </div>

    </div>
  )
}

export default InnovationOverview