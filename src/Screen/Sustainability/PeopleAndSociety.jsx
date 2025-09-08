import React from 'react'
import Image83 from '../../assets/image83.png'
import Image84 from '../../assets/image84.png'
import Image85 from '../../assets/image85.png'
import Image86 from '../../assets/image86.png'
import Image87 from '../../assets/image87.png'
import Image88 from '../../assets/image88.png'
import Image89 from '../../assets/image89.png'
import Image90 from '../../assets/image90.png'
import Image91 from '../../assets/image91.png'
import Image92 from '../../assets/image92.png'
import Image93 from '../../assets/image93.png'
import { Divider, Row, Col } from 'antd'

function PeopleAndSociety() {
  return (
    <div>
      <div>
        <img className='peo-image' src={Image83} alt="" />
      </div>

      <div>
        <h1 className='peo-heading'>People & Society</h1>
        <p className='peo-description'>Audi takes responsibility for its employees and society, as well as for the supply chain. In doing so, the company stands for safe and fair working conditions and attractive opportunities for professional development and promotes social cohesion. And always keeps people – with all of their facets – in focus.</p>
      </div>

      <div className='peo=section1'>

        <div className='peo-grid'>

          <div>
            <img className='peo-image1' src={Image84} alt="" />
            <span className='peo-tittle'>Vehicle safety</span>
            <p className='peo-description'>Audi invests in the development of new and improved vehicle safety features and works to high standards with the aim of protecting vehicle occupants and other road users. The company’s active and passive safety technologies can make a significant contribution to reducing the risk of accidents and injuries.</p>
            <a className='peo-link' href="#">Read more </a>
          </div>

          <div>
            <img className='peo-image1' src={Image85} alt="" />
            <span className='peo-tittle'>Human rights</span>
            <p className='peo-description'>Audi recognizes its corporate responsibility for human rights and takes its lead from the UN Guiding Principles on Business and Human Rights. But what does this mean in the company’s everyday business? Find out here exactly what Audi is doing for human rights.</p>
            <a className='peo-link' href="#">Read more </a>
          </div>

          <div>
            <img className='peo-image1' src={Image86} alt="" />
            <span className='peo-tittle'>Responsibility in the supply chain</span>
            <p className='peo-description'>An Audi vehicle consists of many thousands of individual parts and is based on widely branched global supply chains. The company aspires to manage its supply chains responsibly to generate effective results for the environment and people.</p>
            <a className='peo-link' href="#">Read more </a>
          </div>

          <div>
            <img className='peo-image1' src={Image87} alt="" />
            <span className='peo-tittle'>Employees & corporate culture</span>
            <p className='peo-description'>At Audi, more than 50,000 people are working together on the individual mobility solutions of the future. Which culture of togetherness does Audi promote? What type of team spirit and values does it take to keep pace? Audi has answers.</p>
            <a className='peo-link' href="#">Read more </a>
          </div>

          <div>
            <img className='peo-image1' src={Image88} alt="" />
            <span className='peo-tittle'>Diversity & Inclusion</span>
            <p className='peo-description'>As an international brand, Audi is convinced that diversity enriches our experiences in living and working together. Different ways of thinking, abilities, cultural influences and skills are an important key to corporate success, because different cultural backgrounds and perspectives make us more innovative, more agile and stronger.</p>
            <a className='peo-link' href="#">Read more </a>
          </div>

          <div>
            <img className='peo-image1' src={Image89} alt="" />
            <span className='peo-tittle'>Corporate citizenship</span>
            <p className='peo-description'>From specific aid in disaster situations to education, culture, sports all the way to volunteering: Audi takes responsibility – for its employees, but also for the people and the natural environment in the regions where it operates, as well as beyond the corporate borders.</p>
            <a className='peo-link' href="#">Read more </a>
          </div>
        </div>
      </div>

      <div>
        <span className='peo-heading2'>2024 in figures</span>

        <Row>
          <Col span={7} className='peo-item'>
          <h2>88,604</h2>
          <p>employees of the Audi group</p>
          </Col>

          <Divider type='vertical' className='vertical-divider' />

          <Col span={7} className='peo-item'>
          <h2>936,740</h2>
          <p>Qualification hours</p>
          </Col>

          <Divider type='vertical' className='vertical-divider' />

          <Col span={7} className='peo-item'>
          <h2>€40 <sub>million</sub></h2>
          <p>expended for corporate citizenship</p>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default PeopleAndSociety