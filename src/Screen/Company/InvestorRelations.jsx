import React from 'react'
import Image16 from '../../assets/image16.png'
import Image20 from '../../assets/image20.png'
import Image31 from '../../assets/image31.png'
import Image32 from '../../assets/image32.png'
import Image33 from '../../assets/image33.png'
import Image34 from '../../assets/image34.png'
import Image35 from '../../assets/image35.png'
import Image36 from '../../assets/image36.png'
import { Divider, Row, Col, Button } from 'antd'
import { RightOutlined } from '@ant-design/icons';

function InvestorRelations() {
    return (
        <div>
            <div>
                <img className='investor-fr-image' src={Image16} alt="" />
            </div>
            <div className='investor-container1'>
                <h1 className='investor-heading'>Investor Relations</h1>
                <p className='investor-text'>All important information about the company’s financial development can be found in the Investor Relations section.</p>
            </div>
            <div className='investor-section'>
                <div className='investor-grid'>
                    <div className='investor-card'>
                        <img className='investor-image' src={Image31} alt="" />
                        <h3 className='investor-title'>Key financial figures</h3>
                        <p className='investor-description'>Here you can find the key financial figures of the Audi Group.</p>
                        <a className='investor-read-btn' href="#">Read more <RightOutlined /></a>
                    </div>
                    <div className='investor-card'>
                        <img className='investor-image icon-fix' src={Image32} alt="" />
                        <h3 className='investor-title'>Financial Publications</h3>
                        <p className='investor-description'>All annual reports, IR presentations and other relevant financial publications of the AUDI AG are available for download here.</p>
                        <a className='investor-read-btn' href="#">Read more <RightOutlined /></a>
                    </div>
                    <div className='investor-card'>
                        <img className='investor-image' src={Image33} alt="" />
                        <h3 className='investor-title'>Financial Calendar</h3>
                        <p className='investor-description'>Don’t miss a thing: save upcoming Investor Relations dates in your calendar.</p>
                        <a className='investor-read-btn' href="#">Read more <RightOutlined /></a>
                    </div>
                </div>
            </div>

            <div className='investor-container'>

                <div className='investor-container-grid'>

                    <h2 className='investor-divider-text'>Key figures Audi Group</h2>
                    <br />
                    <span className='investor-divider-text1'>January until June 2025</span>

                    <Row className='investor-row'>
                        <Col span={7} className='investor-item'>
                            <p className='investor-label'>Deliveries</p>
                            <h2 className='investor-number'>794,088</h2>
                            <p className='investor-label'>cars</p>
                        </Col>

                        <Divider type='vertical' className="vertical-divider" />
                        <Col span={7} className='investor-item'>
                            <p className='investor-label'>Operating profit</p>
                            <h2 className='investor-number'>1.1 <sub>EUR billion</sub> </h2>
                            <p className='investor-label'>(Operating margin: 3.3 %)</p>
                        </Col>

                        <Divider type='vertical' className="vertical-divider" />
                        <Col span={7} className='investor-item'>
                            <p className='investor-label'>Net cash flow</p>
                            <h2 className='investor-number'>0,9 <sub>EUR billion</sub> </h2>
                        </Col>
                    </Row>
                </div>
                <a className='investor-btn'>Learn more</a>
            </div>
            <div className='investor-section1'>
                <h2 className='investor-heading1'>Latest financial publications</h2>
                <div className='investor-grid1'>
                    <div className='investor-card1'>
                        <img className='investor-image1' src={Image34} alt="" />
                        <h3 className='investor-title1'>Quarterly Update Q2 2025</h3>
                        <p className='investor-description1'>PDF-Download | EN | 7,5 MB</p>
                        <a className='investor-download-btn' href="#">Download <RightOutlined /></a>
                    </div>
                    <div className='investor-card1'>
                        <img className='investor-image1' src={Image35} alt="" />
                        <h3 className='investor-title1'>Fact Pack Q2 2025</h3>
                        <p className='investor-description1'>XLSX-Download | EN | 1,4 MB</p>
                        <a className='investor-download-btn' href="#">Download <RightOutlined /></a>
                    </div>
                    <div className='investor-card1'>
                        <img className='investor-image1' src={Image36} alt="" />
                        <h3 className='investor-title1'>Q2 2025 Investor Relations Conference Call & Webcast</h3>
                        <p className='investor-description1'>PDF-Download | EN | 1,6 MB</p>
                        <a className='investor-download-btn' href="#">Download <RightOutlined /></a>
                    </div>
                </div>
                <div className='investor-btn1-div'>
                    <a className='investor-download-btn1'>To all downloads</a>
                </div>
            </div>
            <div className='investor-section2'>
                <div className='investor-image-container'>
                    <img className='investor-image2' src={Image20} alt="Audi A6 Avant e-tron driving on a road" />
                    <p className='investor-point'>
                        Audi A6 Avant e-tron performance: electric power consumption (combined): 17.0–14.8 kWh/100 km; CO₂ <br /> emissions (combined): 0 g/km; CO₂ class: A.
                    </p>
                </div>

                <div className='investor-grid2'>
                    <h2 className='investor-heading2'>Audi Report 2024</h2>
                    <h3 className='investor-heading3'>Annual and sustainability report</h3>
                    <p className='investor-description2'>
                        Welcome to the Audi Report 2024! The combined annual and sustainability report of Audi brings together the topics of strategy, finance as well as Environmental, Social and Governance (ESG).
                    </p>
                    <button className='investor-read-btn2'>Read more</button>
                </div>
            </div>
        </div>
    )
}

export default InvestorRelations