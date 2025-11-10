import React from 'react'
import Image20 from '../../assets/Image20.png'
import { Button } from 'antd'
import { Divider, Row, Col } from "antd";

function CompanyOverview() {

    return (
        <div>
            <div className='company-overview-image'></div>
            <div className='company-section'>
                <h1 className='company-title'>Company</h1>
                <p className='company-text'>The AUDI AG stands for sporty vehicles, high build quality and progressive design – for “Vorsprung durch Technik.” The Audi Group is among the world’s leading producers of premium cars. To play an instrumental role in shaping the transformation as we head into a new age of mobility the Company is implementing its strategy step by step.</p>
            </div>
            <div className='company-section'>
                <div className='company-grid'>
                    <div className='company-card1'>
                        <h3 className='company-heading'>Management</h3>
                        <Button className='company-btn'>Laern more</Button>
                    </div>
                    <div className='company-card2'>
                        <h3 className='company-heading'>Location of the Audi Group</h3>
                        <Button className='company-btn'>Learn more</Button>
                    </div>
                    <div className='company-card3'>
                        <h3 className='company-heading'>Business Areas</h3>
                        <Button className='company-btn'>Learn more</Button>
                    </div>
                </div>
            </div>
            <div className='company-section'>
                <div className='company-grid1'>
                    <div className='company-card4'>
                        <h3 className='company-heading1'>Sustainabilty</h3>
                        <Button className='company-btn1'>Learn more</Button>
                    </div>
                    <div className='company-card5'>
                        <h3 className='company-heading1'>Investor Realtions</h3>
                        <Button className='company-btn1'>Learn more</Button>
                    </div>
                </div>
            </div>
            <div className="stats-container">
                <span className="stats-divider-text">Everything at a glance</span>
                <Row className="stats-row">
                    <Col span={7} className="stat-item">
                        <p className="stat-label">over</p>
                        <h2 className="stat-number">100</h2>
                        <p className="stat-label">Markets</p>
                    </Col>

                    <Divider type="vertical" className="vertical-divider" />

                    <Col span={7} className="stat-item">
                        <p className="stat-label">worldwide</p>
                        <h2 className="stat-number"> <i class="fa-solid fa-angle-right"></i> 87,000</h2>
                        <p className="stat-label">Employees</p>
                    </Col>

                    <Divider type="vertical" className="vertical-divider" />

                    <Col span={8} className="stat-item">
                        <h2 className="stat-number">1,918,912</h2>
                        <p className="stat-label">Deliveries of the Brand Group Progressive</p>
                        <p className="stat-label">in 2023</p>
                    </Col>
                </Row>
            </div>
            <div className='company-info'>
                <h2 className='company-info-heading'>Information about the structure of AUDI AG</h2>
                <div className='company-info-grid'>
                    <div className='company-info-image1'>
                        <h3 className='company-info-title'>Profile</h3>
                        <Button className='company-info-btn'>Learn more</Button>
                    </div>
                    <div className='company-info-image2'>
                        <h3 className='company-info-title'>Strategy</h3>
                        <Button className='company-info-btn'>Learn more</Button>
                    </div>
                    <div className='company-info-image3'>
                        <h3 className='company-info-title'>Compliance & <br /> Riskmanagement</h3>
                        <Button className='company-info-btn'>Learn more</Button>
                    </div>
                </div>
            </div>
            
            <div className="report-section">
                <div className="report-image-container">
                    <img src={Image20} alt="Audi A6 Avant e-tron" />
                    <p className="image-caption">
                        Audi A6 Avant e-tron performance: electric power consumption (combined): 17.0–14.8 kWh/100 km; CO₂ emissions (combined): 0 g/km; CO₂ class: A.
                    </p>
                </div>
                <div className="report-text-container">
                    <h1>Audi Report 2024</h1>
                    <h2>Annual and sustainability report</h2>
                    <p>
                        Welcome to the Audi Report 2024! The combined annual and sustainability report of Audi brings together the topics of strategy, finance as well as Environmental, Social and Governance (ESG).
                    </p>
                    <a href="#" className="read-more-button">Read more</a>
                </div>
            </div>

            <div className='volks-div'>
                <h3 className='volks-heading'>Audi is ab brand of VOLKSWAGEN GROUP</h3>
                <a href="#" className='learn-more-button'>learn more</a>
            </div>
        </div>
    )
}

export default CompanyOverview