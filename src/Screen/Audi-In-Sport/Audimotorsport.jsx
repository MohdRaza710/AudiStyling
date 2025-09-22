import React from 'react'
import Image145 from '../../assets/image145.png'
import Image146 from '../../assets/image146.png'
import Image147 from '../../assets/image147.png'
import Image148 from '../../assets/image148.png'
import Image149 from '../../assets/image149.png'
import Image150 from '../../assets/image150.png'
import Image151 from '../../assets/image151.png'
import Image152 from '../../assets/image152.png'
import Image153 from '../../assets/image153.png'
import Image154 from '../../assets/image154.png'
import Image155 from '../../assets/image155.png'
import Image156 from '../../assets/image156.png'
import Image157 from '../../assets/image157.png'
import Image158 from '../../assets/image158.png'
import Image159 from '../../assets/image159.png'
import Image160 from '../../assets/image160.png'
import Image161 from '../../assets/image161.png'
import Image162 from '../../assets/image162.png'
import Image12 from '../../assets/image12.png'
import Image5 from '../../assets/image5.png'
import Image6 from '../../assets/image6.png'
import Image7 from '../../assets/image7.png'
import { Button, Row, Col, Divider, Pagination } from 'antd'


// styling left
function Audimotorsport() {
  return (
    <div>
      <div>
        <img className='adms-image' src={Image145} alt="" />
      </div>

      <div className='adms-section'>
        <h1 className='adms-headng'>Vorsprung durch Motorsport</h1>
        <p className='adms-description'>The four rings and motorsport: a strong combination. Audi has over a century’s worth of motorsport history and this lays the foundation for the brand’s success in the premium segment with sportiness,
          advanced technology and emotive design. From the early beginnings to the legendary silver arrows, the success with the quattro drivetrain in rallying, touring car racing, Le Mans, DTM,
          Formula E and the Dakar Rally, the four rings have triumphed with race victories and important championship titles with its motorsport projects.
          In 2025, the future Audi factory team continues its preparations to enter Formula 1 in 2026. The models from Audi Sport customer racing compete worldwide in the hands of customer teams.</p>
      </div>

      <div className='adms-section1'>
        <Row className='adms-row1'>
          <Col className='adms-col1' span={7}>
            <p className='adms-label'>World Rally Championship</p>
            <h2 className='adms-number'>4</h2>
            <p className='adms-label'>world titles</p>
          </Col>

          <Divider type='vertical' className="vertical-divider" />

          <Col className='adms-col1' span={7}>
            <p className='adms-label'>DTM</p>
            <h2 className='adms-number'>12</h2>
            <p className='adms-label'>drivers’ titles</p>
          </Col>
        </Row>

        <Row className='adms-row2'>
          <Col className='adms-col2' span={7}>
            <p className='adms-label1'>Le Mans 24 Hours</p>
            <h2 className='adms-number1'>13</h2>
            <p className='adms-label1'>overall victories</p>
          </Col>

          <Divider type='vertical' className="vertical-divider" />

          <Col className='adms-col2' span={7}>
            <p className='adms-label1'>Dakar Rally</p>
            <h2 className='adms-number1'>1</h2>
            <p className='adms-label1'>overall victory</p>
          </Col>
        </Row>
      </div>

      <div className='adms-section2'>
        <span className='adms-heading1'>Audi in motorsport</span>
      </div>

      <div className='adms-section3'>
        <img className='adms-image3' src={Image146} alt="" />
        <span className='adms-title3'>Formula 1</span>
        <p className='adms-description3'>Audi is preparing to enter the premier class of motorsport in 2026: Formula 1. In doing so, the brand with the four rings is tackling its most challenging motorsport project to date.</p>
        <Button className='adms-btn3'>Read more</Button>
      </div>

      <div className='adms-section4'>

        <div className='adms-grid4'>

          <div className='adms-card4'>
            <img className='adms-image4' src={Image147} alt="" />
            <span className='adms-title4'>Audi Sport customer racing</span>
            <p className='adms-description4'>With race cars developed by Audi Sport customer racing, the brand with the four rings is represented worldwide by customer teams in GT3, GT2, GT4 and TCR competition.</p>
            <a className='adms-link4' href="">Read more <i class="fa-solid fa-angle-right"></i></a>
          </div>

          <div className='adms-card4'>
            <img className='adms-image4' src={Image148} alt="" />
            <span className='adms-title4'>Motorsport history</span>
            <p className='adms-description4'>The rich history of Audi in motorsport includes more than a century of success, from the early beginnings, all the way through the decades racing both on and off the racetrack.</p>
            <a className='adms-link4' href="">Read more <i class="fa-solid fa-angle-right"></i></a>
          </div>
        </div>
      </div>

      <div className='adms-section5'>
        <h4 className='adms-heading5'>Audi Tradition</h4>
        <p className='adms-paragraph5'>The history of Audi continues to live on thanks to Audi Tradition. Find out more about the history of the brand and current events.</p>

        <div className='adms-grid5'>

          <div className='adms-card5'>
            <img className='adms-image5' src={Image149} alt="" />
            <span className='adms-title5'>Audi Tradition</span>
            <p className='adms-description5'>Audi Tradition brings the history of the company and the Audi brand to life to this day. Over 100 years characterized by the courage to innovation and change.</p>
            <a className='adms-link5' href="">Read more <i class="fa-solid fa-angle-right"></i></a>
          </div>

          <div className='adms-card5'>
            <img className='adms-image5' src={Image150} alt="" />
            <span className='adms-title5'>Iconic models in the history of Audi</span>
            <p className='adms-description5'>Innovative engines, technology, design: every Audi icon has written automotive history. This selection of pioneering models shows “Vorsprung” in all its facets.</p>
            <a className='adms-link5' href="">Read more <i class="fa-solid fa-angle-right"></i></a>
          </div>

          <div className='adms-card5'>
            <img className='adms-image5' src={Image151} alt="" />
            <span className='adms-title5'>Events</span>
            <p className='adms-description5'>Motorrad, Serienautomobile, Motorsport – Auf den Veranstaltungen von Audi Tradition wird die Leidenschaft für die Audi Geschichte und Gegenwart gelebt.</p>
            <a className='adms-link5' href="">Read more <i class="fa-solid fa-angle-right"></i></a>
          </div>
        </div>
      </div>

      {/* <div>
            <span>Motorsport highlights</span>

        <div>

          <div>
            <img src={Image152} alt="" />
            <p>The legendary silver arrows from Auto Union competed in Grand Prix racing from 1934-1939. Pictured: Bernd Rosemeeyer taking victory at the Donington Grand Prix</p>
          </div>

          <div>
            <img src={Image159} alt="" />
            <p>Audi revolutionized rallying in the 1980s and continued to do so on the racetrack thereafter and into the 1990s. Pictured: Celebrations at the finish of the 1984 Monte Carlo Rally, a 1-2-3 victory for Audi. That season ended with the manufacturers’ title for Audi and the drivers’ title for Stig Blomqvist – making it a total of four rally world titles for Audi in the early 80s</p>
          </div>

          <div>
            <img src={Image160} alt="" />
            <p>13 overall victories within 18 years, Audi’s endurance racing legacy at the Le Mans 24 Hours. Pictured: Audi Sport Team Joest winning Le Mans with the Audi R18 e-tron quattro in 2014</p>
          </div>

          <div>
            <img src={Image161} alt="" />
            <p>From 1990 to 2020, Audi drivers have won twelve DTM drivers’ titles. Pictured: René Rast in the turbocharged Audi RS 5 DTM in 2020</p>
          </div>

          <div>
            <img src={Image162} alt="" />
            <p>In January 2024, Team Audi Sport together with Carlos Sainz and Lucas Cruz wrote history by winning the Dakar Rally with the Audi RS Q e-tron¹, the first car to do so with an alternative drivetrain²</p>
            <span>¹Audi RS Q e-tron, pictured above: This vehicle shown here is the Rally Dakar vehicle that is not available as a production model. Closed course, professional driver. Do not attempt. ²The Audi RS Q e-tron combines an electric drivetrain with an energy converter system based on the TFSI engine and a generator. </span>
          </div>

          <div>
            <Pagination defaultCurrent={1} total={50} align='end' />
          </div>

          <div>
            <Button>Find out more about Audi's motorsport history</Button>
          </div>
        </div>
      </div> */} {/* after i will complete this part */}

      <div className='adms-section6'>
        <img className='adms-image6' src={Image153} alt="" />
        <span className='adms-titl36'>Latest news</span>
        <p className='adms-description6'>The latest press releases and news about Audi in motorsport are available in the Audi MediaCenter.</p>
        <Button className='adms-btn6'>To the Audi MediaCenter</Button>
      </div>

      <div className='adms-section7'>
        <span className='adms-heading7'>Gallery</span>

        <div className='adms-grid7'>

          <div className='adms-card7'>
            <img className='adms-image7' src={Image154} alt="" />
          </div>

          <div className='adms-card7'>
            <img className='adms-image7' src={Image155} alt="" />
          </div>

          <div className='adms-card7'>
            <img className='adms-image7' src={Image156} alt="" />
          </div>

          <div className='adms-card7'>
            <img className='adms-image7' src={Image157} alt="" />
          </div>
        </div>
      </div>

      <div className='adms-section8'>
        <h2 className='adms-heading8'>You might also be interested in</h2>

        <div className='adms-grid8'>

          <div className='adms-card8'>
            <img className='adms-image8' src={Image158} alt="" />
            <span className='adms-title8'>Audi in sport</span>
            <p className='adms-description8'>Audi has been a close partner and sponsor of regional, national and international sport for decades. Find out more about our commitment to promoting talent and sponsoring established athletes and clubs.</p>
            <a className='adms-link8' href="">Read more <i class="fa-solid fa-angle-right"></i></a>
            <span className='adms-point8'>Audi RS e-tron GT FC Bayern concept:Power consumption (combined) in kWh/100 km: 22.6–20.6CO₂ emissions (combined) in g/km: 0</span>
          </div>

          <div className='adms-card8'>
            <img className='adms-image8' src={Image12} alt="" />
            <span className='adms-title8'>Company</span>
            <p className='adms-description8'>Audi stands for sporty vehicles, high build quality and progressive design – for “Vorsprung durch Technik.” The Audi Group is among the world’s leading producers of premium cars.</p>
            <a className='adms-link8' href="">Read more <i class="fa-solid fa-angle-right"></i></a>
          </div>

          <div className='adms-card8'>
            <img className='adms-image8' src={Image6} alt="" />
            <span className='adms-title8'>Innovation</span>
            <p className='adms-description8'>Audi is changing. Continuously. Discover here how our innovations ensure Vorsprung durch Technik, how modern technology and progressive thinking characterize Audi, which processes are behind them and how our engineers work to further develop the existing.</p>
            <a className='adms-link8' href="">Read more <i class="fa-solid fa-angle-right"></i></a>
          </div>

          <div className='adms-card8'>
            <img className='adms-image8' src={Image7} alt="" />
            <span className='adms-title8'>Sustainability</span>
            <p className='adms-description8'>For Audi, sustainability is synonymous with future viability – and the company is making its targeted contribution to solving global challenges. The background and details of our strategy.</p>
            <a className='adms-link8' href="">Read more <i class="fa-solid fa-angle-right"></i></a>
          </div>

          <div className='adms-card8'>
            <img className='adms-image8' src={Image5} alt="" />
            <span className='adms-title8'>Driven by tech. Driven by people.</span>
            <p className='adms-description8'>Be part of the reinvention of the automobile and help us to design the future of mobility: digital, sustainable and electric. With us, you will always be able to develop both yourself and the progress of tomorrow.</p>
            <a className='adms-link8' href="">Read more <i class="fa-solid fa-angle-right"></i></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Audimotorsport