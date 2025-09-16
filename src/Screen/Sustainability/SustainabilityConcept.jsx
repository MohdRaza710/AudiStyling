import React from 'react'
import Image70 from '../../assets/image70.png'
import Image71 from '../../assets/image71.png'
import Image74 from '../../assets/image74.png'
import Image75 from '../../assets/image75.png'
import Image20 from '../../assets/image20.png'
import Image67 from '../../assets/image67.png'
import Image68 from '../../assets/image68.png'
import Image69 from '../../assets/image69.png'
import Image18 from '../../assets/image18.png'

// styling Left
function SustainabilityConcept() {
    return (
        <div>
            <div>
                <img src={Image18} alt="" />
            </div>

            <div className='cont-section'>
                <h1 className='cont-heading'>Sustainability Concept</h1>
                <p className='cont-description'>Sustainability is not just a nice-to-have for Audi – it is at the focus of our corporate activity and the basis of our actions. Discover more about the sustainability concept of Audi and how the company is driving forward its transformation from car manufacturer to mobility provider.</p>
            </div>

            <div className='cont-section1'>

                <div className='cont-grid1'>

                    <div className='cont-card1'>
                        <img className='cont-image1' src={Image74} alt="" />
                        <span className='cont-title1'>Stakeholder Management</span>
                        <p className='cont-description1'>Sustainable mobility is one of society’s primary necessities. Audi works closely with its stakeholders to offer tailor-made products and services. It’s all about understanding requirements – in order to shape the future of mobility together.</p>
                        <a className='cont-link1' href="">Learn more <i class="fa-solid fa-angle-right"></i></a>
                    </div>

                    <div className='cont-card1'>
                        <img className='cont-image1' src={Image75} alt="" />
                        <span className='cont-title1'>Materiality analysis</span>
                        <p className='cont-description1'>Audi relies on the materiality analysis to help it understand its impact on the environment and society better. This evaluates the effects of Audi’s actions as well as the relevance of certain topics for the company’s stakeholders.</p>
                        <a className='cont-link1' href="">Learn more <i class="fa-solid fa-angle-right"></i></a>
                    </div>
                </div>
            </div>

            <div className='cont-section2'>
                <img className='cont-image2' src={Image20} alt="" />
                <h2 className='cont-heading2'>Audi Report 2024</h2>
                <span className='cont-title2'>Annual and sustainability report</span>
                <p className='cont-description2'>Welcome to the Audi Report 2024! The combined annual and sustainability report of Audi brings together the topics of strategy, finance as well as Environmental, Social and Governance (ESG).</p>
                <a className='cont-link2' href="">Read more</a>
                <span className='cont-point2'>Audi A6 Avant e-tron performance: electric power consumption (combined): 17.0–14.8 kWh/100 km; CO₂ emissions (combined): 0 g/km; CO₂ class: A.</span>
            </div>

            <div className='cont-section3'>
                <h2 className='cont-heading3'>You might also be interested in</h2>

                <div className='cont-grid3'>

                    <div className='cont-card3'>
                        <img className='cont-image3' src={Image67} alt="" />
                        <span className='cont-date3'>16/04/2025</span>
                        <span className='cont-title3'>Responsibility with a passion: Audi dealership Augsburg</span>
                        <p className='cont-description3'>In the Augsburg region, Michael Agsteiner is driving sustainability at Audi dealerships – including green roofs, water treatment and ergonomic workplaces. In an interview with Heiko Schmidt, he discusses responsibility.</p>
                        <a className='cont-link3' href="">Read more <i class="fa-solid fa-angle-right"></i></a>
                    </div>

                    <div className='cont-card3'>
                        <img className='cont-image3' src={Image68} alt="" />
                        <span className='cont-date3'>22/01/2025</span>
                        <span className='cont-title3'>Active safety functions: driver assist systems of the future</span>
                        <p className='cont-description3'>Audi engineers work hard every day to ensure that the vehicles they develop meet high standards of safety. A visit to the Active Safety Functions development team.</p>
                        <a className='cont-link3' href="">Read more <i class="fa-solid fa-angle-right"></i></a>
                        <span className='cont-point3'>Assist systems can only assist the driver in the task of driving within the respective system limits. The driver is always responsible for driving the vehicle and is required to be attentive at all times.</span>
                    </div>

                    <div className='cont-card3'>
                        <img className='cont-image3' src={Image69} alt="" />
                        <span className='cont-date3'>02/12/2024</span>
                        <span className='cont-title3'>Rethink: thinking about the end right from the start</span>
                        <p className='cont-description3'>As part of Design for Circularity, Audi promotes the circular economy in the early phases of product development. According to the Rethink principle, components in the concept phase are already designed with their recyclability in mind.</p>
                        <a className='cont-link3' href="">Read more <i class="fa-solid fa-angle-right"></i></a>
                    </div>
                </div>
            </div>

            <div className='cont-section4'>
                <h2 className='cont-heading4'>Downloads</h2>

                <div className='cont-grid4'>

                    <div className='cont-card4'>
                        <img className='cont-image4' src={Image20} alt="" />
                        <span className='cont-title4'>Audi Report 2024 – Audi on the offensive</span>
                        <p className='cont-description4'>The Audi Report 2024 – the combined annual and sustainability report from AUDI AG – brings together the topics of strategy, finance as well as environmental, social and governance.</p>
                        <a className='cont-link4' href="">Read more <i class="fa-solid fa-angle-right"></i>`</a>
                        <span className='cont-point4'>Audi A6 Avant e-tron performance: electric power consumption (combined): 17.0–14.8 kWh/100 km; CO₂ emissions (combined): 0 g/km; CO₂ class: A.</span>
                    </div>

                    <div className='cont-card4'>
                        <img className='cont-image4' src={Image70} alt="" />
                        <span className='cont-title4'>Sustainability reports</span>
                        <p className='cont-description4'>Read the collected Audi Sustainability reports and learn more about the implementation of the company’s strategy.</p>
                        <a className='cont-link4' href="">Read more <i class="fa-solid fa-angle-right"></i></a>
                    </div>

                    <div className='cont-card4'>
                        <img className='cont-image4' src={Image71} alt="" />
                        <span className='cont-title4'>Documents & policies</span>
                        <p className='cont-description4'>Voluntary undertakings and principles that apply across the Group form the basis and backbone of our strategic sustainability objectives.</p>
                        <a className='cont-link4' href="">Read more <i class="fa-solid fa-angle-right"></i></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SustainabilityConcept