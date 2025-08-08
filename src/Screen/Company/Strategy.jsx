import React from 'react'
import Image27 from '../../assets/Image27.png'
import Image8 from '../../assets/Image8.png'
import Image13 from '../../assets/Image13.png'
import Image21 from '../../assets/Image21.png'
import Image22 from '../../assets/Image22.png'
import Image23 from '../../assets/Image23.png'
import Image24 from '../../assets/Image24.png'
import Image25 from '../../assets/Image25.png'
import Image26 from '../../assets/Image26.png'
import { Button } from 'antd'



function Strategy() {
    return (
        <div>
            <div>
                <img className='strategy-fr-image' src={Image27} alt="" />
            </div>
            <div className='company-section'>
                <h1 className='company-title'>Strategy</h1>
                <p className='company-text'>Sustainable success is based on long-term vision and innovative strategy. A clear commitment to electric mobility is essential to Audi's strategy. Within the next five years, the company will expand its EV portfolio: In the medium term, the brand with the four rings plans to offer a fully electric vehicle in all core segments. Audi is accelerating its transformation into the leading provider of sustainable e-mobility.</p>
            </div>
            <div className='articles-section'>
                <div className='articles-grid'>
                    <div className='article-card'>
                        <img className='article-image' style={{ width: '97%' }} src={Image8} alt="" />
                        <h4 className='article-title'>Management</h4>
                        <p className='article-description'>The corporate management of AUDI AG draws on its expertise and leadership to promote the interests of the Audi customers and more than 87,000 employees around the globe.</p>
                        <a className='read-more-link' href="#">Read more<i class="fa-solid fa-angle-right"></i></a>
                    </div>
                    <div className='article-card'>
                        <img className='article-image' style={{ width: '97%' }} src={Image13} alt="" />
                        <h4 className='article-title'>Locations of the Audi Group</h4>
                        <p className='article-description'>At its production sites worldwide, Audi stands for "Vorsprung durch Technik”. Through innovative logistics processes, modern manufacturing technologies and efficient production systems, highly qualified employees set uniform standards as part of the Audi production system.</p>
                        <a className='read-more-link' href="#">Read more<i class="fa-solid fa-angle-right"></i></a>
                    </div>
                    <div className='article-card'>
                        <img className='article-image' src={Image21} alt="" />
                        <h4 className='article-title'>Participations and services</h4>
                        <p className='article-description'>Vorsprung durch Technik: Each brand stands for outstanding performance, pioneering technologies, fascinating design and tremendous emotion. Audi and the three traditional Italian brands Lamborghini, Ducati und Italdesign together make up the Audi Group.</p>
                        <a className='read-more-link' href="#">Read more<i class="fa-solid fa-angle-right"></i></a>
                    </div>
                </div>
            </div>
            <div>
                <div className='strategy-section1'>
                    <img className='strategy-image1' src={Image22} alt="" />
                    <h3 className='strategy-heading1'>Audi in China: Pioneering spirit that has lasted for decades</h3>
                    <p className='strategy-description1'>Audi was the first global premium manufacturer in China to demonstrate its pioneering spirit. That was over 35 years ago. And that spirit endures today.</p>
                    <Button className='strategy-more-btn1'>Read More</Button>
                </div>
            </div>
            <div className='strategy-section2'>
                <div className='strategy-grid2'>
                    <img className='strategy-image2' src={Image23} alt="" />
                    <h3 className='strategy-heading2'>Compliance & Integrity</h3>
                    <p className='strategy-description2'>The elements of compliance and integrity are firmly anchored in our strategy and culture. They are the basis of our actions at Audi. Our aim is to make decisions in accordance with the relevant laws, internal regulations, and values.</p>
                    <Button className='strategy-more-btn2'>Read More</Button>
                </div>
            </div>

            <div className='strategy-section3'>
                <div className='strategy-grid3'>
                    <img className='strategy-image3' src={Image26} alt="" />
                    <h3 className='strategy-heading3'>Responsibility in the supply chain</h3>
                    <p className='strategy-description3'>In addition to demanding high standards as regards quality, technological expertise as well as performance and competitiveness, the Audi Group expects its suppliers to strictly comply with sustainability requirements.</p>
                    <Button className='strategy-more-btn3'>Read More</Button>
                </div>
            </div>
            <div className='strategy-section4'>
                <h2 className='strategy-title4'>You might also be interested in</h2>
                <div className='strategy-grid4'>
                    <div className='strategy-card4'>
                        <img className='strategy-image4' src={Image24} alt="" />
                        <h4 className='strategy-title4'>Risk Management</h4>
                        <span className='strategy-description4'>Our Risk Management System (RMS) / Internal Control System (ICS) is based on the internationally recognized COSO framework for enterprise risk management.</span>
                        <a className='strategy-more-btn4' href="#">Read more<i class="fa-solid fa-angle-right"></i></a>
                    </div>
                    <div className='strategy-card4'>
                        <img className='strategy-image4' src={Image23} alt="" />
                        <h4 className='strategy-title4'>Compliance & Integrity</h4>
                        <span className='strategy-description4'>The elements of compliance and integrity are firmly anchored in our strategy and culture. They are the basis of our actions at Audi. Our aim is to make decisions in accordance with the relevant laws, internal regulations, and values.</span>
                        <a className='strategy-more-btn4' href="#">Read more<i class="fa-solid fa-angle-right"></i></a>
                    </div>
                    <div className='strategy-card4'>
                        <img className='strategy-image4' src={Image25} alt="" />
                        <h4 className='strategy-title4'>Whistleblower system</h4>
                        <span className='strategy-description4'>Protection, fairness and trust for whistleblowers, parties implicated and involved – principles of the Audi Investigation Office and its whistleblowing system</span>
                        <a className='strategy-more-btn4' href="#">Read more<i class="fa-solid fa-angle-right"></i></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Strategy