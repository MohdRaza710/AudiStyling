import React from 'react'
import Image17 from '../../assets/Image17.png'
import Image18 from '../../assets/Image18.png'
import Image29 from '../../assets/Image29.png'
import Image30 from '../../assets/Image30.png'
import Image15 from '../../assets/Image15.png'
import { Divider, Row, Col } from 'antd'

function Profile() {
    return (
        <div>
            <div>
                <img className='profile-frimage' src={Image17} alt="" />
            </div>
            <div>
                <div className='profile-section'>
                    <h1 className='profile-heading'>Profile</h1>
                    <p className='profile-description'>The Audi name signifies high-quality vehicles, forward-looking and sustainable drive technology, first-class quality, and progressive design worldwide. The Audi Group includes the Bentley, Lamborghini, and Ducati brands.</p>
                </div>
            </div>
            <div className='profile-section1'>
                <div className='profile-grid1'>
                    <div className='profile-card1'>
                        <img className='profile-image1' src={Image29} alt="" />
                        <h3 className='profile-title1'>Audi Tradition</h3>
                        <p className='profile-description1'>Audi Tradition brings the history of the company and the Audi brand to life to this day. Over 100 years characterized by the courage to innovation and change.</p>
                        <a className='profile-more-btn1' href="#">Read more<i class="fa-solid fa-angle-right"></i></a>
                    </div>
                    <div className='profile-card1'>
                        <img className='profile-image1' src={Image30} alt="" />
                        <h3 className='profile-title1'>This is Vorsprung durch Technik.</h3>
                        <p className='profile-description1'>Meaningful, significant, and centered around human needs. The interplay of sustainable solutions gives rise to fascinating new possibilities, ushering in a new era of the automobile.</p>
                        <a className='profile-more-btn1' href="#">Read more<i class="fa-solid fa-angle-right"></i></a>
                    </div>
                </div>
            </div>
            <div className='stats-container'>
                <span className='stats-divider-text'>Facts and Figures</span>

                <Row className="stats-row">
                    <Col span={7} className='stats-item'>
                        <p className='stat-label'>more than</p>
                        <h2 className='stat-number'>100</h2>
                        <p className='stat-label'>markets</p>
                    </Col>

                    <Divider type="vertical" className="vertical-divider" />

                    <Col span={7} className='stats-item'>
                        <p className='stat-label'>more than</p>
                        <h2 className='stat-number'>88,000</h2>
                        <p className='stat-label'>employees worldwide in 2024</p>
                    </Col>

                    <Divider type="vertical" className="vertical-divider" />

                    <Col span={7} className='stats-item'>
                        <p className='stat-label'>around</p>
                        <h2 className='stat-number'>1,700,000</h2>
                        <p className='stat-label'>Deliveries to customers 2024</p>
                    </Col>
                </Row>
            </div>
            <div className='profile-section2'>
                <h2 className='profile-heading2'>You might also be interested in</h2>
                <div className='profile-grid2'>
                    <div className='profile-card2'>
                        <img className='profile-image2' src={Image15} alt="" />
                        <h3 className='profile-title2'>Sustainability</h3>
                        <p className='profile-description2'>For Audi, sustainability is synonymous with future viability – and the <br /> company is making its targeted contribution to solving global challenges. <br /> The background and details of our strategy.</p>
                        <a className='profile-more-btn2' href="">Read more<i class="fa-solid fa-angle-right"></i></a>
                    </div>
                    <div className='profile-card2'>
                        <img className='profile-image2' src={Image18} alt="" />
                        <h3 className='profile-title2'>Strategie</h3>
                        <p className='profile-description2'>Nachhaltiger Erfolg beruht auf langfristiger Planung und innovativer Strategie. Das klare Bekenntnis zur E-Mobilität ist dabei ein wesentlicher Eckpfeiler der Audi-Strategie.</p>
                        <a className='profile-more-btn2' href="">Read more<i class="fa-solid fa-angle-right"></i></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile