import React from 'react'
import Image7 from '../../assets/image7.png'
import Image20 from '../../assets/image20.png'
import Image27 from '../../assets/image27.png'
import Image63 from '../../assets/image63.png'
import Image64 from '../../assets/image64.png'
import Image65 from '../../assets/image65.png'
import Image66 from '../../assets/image66.png'
import Image67 from '../../assets/image67.png'
import Image68 from '../../assets/image68.png'
import Image69 from '../../assets/image69.png'
import Image70 from '../../assets/image70.png'
import Image71 from '../../assets/image71.png'
import Image72 from '../../assets/image72.png'
import Image73 from '../../assets/image73.png'
import { Button, Divider, Row, Col } from 'antd'

// styling left
function SustainabilityOverview() {
    return (
        <div>
            <div>
                <img className='sus-image' src={Image7} alt="" />
            </div>
            <div>
                <h1 className='sus-heading'>Sustainability</h1>
                <p className='sus-description'>Climate change mitigation, the responsible use of resources, societal advancement and social justice are among the great challenges of our time. Audi takes economic, ecological and social responsibility and has made sustainable business operations an integral part of all of its decisions and products. Find out more about how Audi is shaping the mobility of the future on the basis of a clear strategy.</p>
            </div>
            <div className='sus-section1'>
                <h2 className='sus-title1'>Audi Annual and Sustainability Report 2024</h2>
                <a className='sus-link1' href="#">To the report <i class="fa-solid fa-angle-right"></i></a>
            </div>

            <div className='sus-section2'>

                <div className='sus-grid2'>

                    <div className='sus-card2'>
                        <img className='sus-image2' src={Image27} alt="" />
                        <h3 className='sus-title2'>Sustainability concept</h3>
                        <p className='sus-description2'>Clear ESG criteria, smart stakeholder engagement and dedicated reporting: here you can find out more about the subtleties of sustainability management at Audi.</p>
                        <a className='sus-link2' href="">Learn more <i class="fa-solid fa-angle-right"></i></a>
                    </div>

                    <div className='sus-card2'>
                        <img className='sus-image2' src={Image63} alt="" />
                        <h3 className='sus-title2'>Environment & Resources</h3>
                        <p className='sus-description2'>What is Audi doing every day to make its products, its value chain and its production processes more sustainable? You can find the most important questions and answers on decarbonization, electrification and circular economy here.</p>
                        <a className='sus-link2' href="">Learn more <i class="fa-solid fa-angle-right"></i></a>
                        <p className='sus-point'>The vehicle illustrated is a prototype that is not available as a series-production vehicle.</p>
                    </div>

                    <div className='sus-card2'>
                        <img className='sus-image2' src={Image64} alt="" />
                        <h3 className='sus-title2'>People & Society</h3>
                        <p className='sus-description2'>Find out in detail how Audi takes responsibility for its supply chain, advocates for human rights, engages in civil society and promotes diversity and inclusion.</p>
                        <a className='sus-link2' href="">Learn more <i class="fa-solid fa-angle-right"></i></a>
                    </div>

                    <div>
                        <img className='sus-image2' src={Image65} alt="" />
                        <h3 className='sus-title2'>Ethical leadership</h3>
                        <p className='sus-description2'>Value oriented and sustainable: at Audi, business and ethics aren’t opposing ideas, but rather go hand in hand. Read about how compliance and integrity are firmly anchored in the business processes at Audi.</p>
                        <a className='sus-link2' href="">Learn more <i class="fa-solid fa-angle-right"></i></a>
                    </div>
                </div>
            </div>

            <div className='sus-section3'>
                <div className='sus-heading-content3'>
                    <h2 className='sus-heading3'>Three sustainability key figures for Audi</h2>
                </div>


                <Row className='sus-row'>
                    <Col span={7} className='sus-item'>
                        <p className='sus-label'>Since</p>
                        <h2 className='sus-number'>2025</h2>
                        <p className='sus-label'>Production at all Audi sites* has been net carbon-neutral**</p>
                    </Col>

                    <Divider type='vertical' className="vertical-divider" />

                    <Col span={7} className='sus-item'>
                        <p className='sus-label'>Around</p>
                        <h2 className='sus-number'>400 <sub>million euros</sub></h2>
                        <p className='sus-label'>is the total amount that AUDI AG has invested in the training and development of its employees over the past three years.</p>
                    </Col>

                    <Divider type='vertical' className="vertical-divider" />

                    <Col span={7} className='sus-item'>
                        <p className='sus-label'>Up to</p>
                        <h2 className='sus-number'>756 <sub>Kilometers</sub></h2>
                        <p className='sus-label'>makes the Audi A6 Sportback e-tron*** the model with the longest range in its segment.</p>
                    </Col>
                </Row>
                <p className='sus-point3.1'>*Audi production sites in Ingolstadt and Neckarsulm (Germany), Brussels (Belgium), Győr (Hungary), San José Chiapa (Mexico). Production at the Brussels plant was discontinued at the end of February 2025.</p>
                <p className='sus-point3.2'>** Audi regards net carbon neutrality as a state in which, following the exhaustion of other possible measures aimed at reducing the still remaining CO₂ emissions caused by the products or activities of Audi and/or currently unavoidable CO₂ emissions within the scope of the supply chain, manufacturing and recycling of Audi vehicles, at least quantitative compensation is provided through voluntary and globally conducted compensation projects. Throughout the utilization phase of a vehicle, meaning from when a vehicle is delivered to a customer, CO₂ emissions produced are not taken into account.</p>
                <p className='sus-point3.3'>*** Audi A6 Sportback e-tron performance: Power consumption (combined): 15,9–14,0 kWh/100 km; CO₂ emissions (combined): 0 g/km; CO₂ emission class: A</p>
            </div>

            <div className='sus-section3-1'>
                <div className='sus-text-container3-1'>
                    <h2 className='sus-title3-1'>“Holistic sustainability at Audi goes beyond the product. We are convinced that a sustainable business model includes taking social responsibility in addition to ecological criteria.”</h2>
                    <p className='sus-description3-1'>– Jürgen Rittersberger, Member of the Board of Management of AUDI AG for Finance, Legal Affairs and IT</p>
                </div>

                <div className='sus-image-container3-1'>
                    <img className='sus-image3-1' src={Image66} alt="" />
                </div>
            </div>


            <div className='sus-section4'>
                <h2 className='sus-heading4'>You might also be interested in</h2>

                <div className='sus-grid4'>

                    <div className='sus-card4'>
                        <img className='sus-image4' src={Image67} alt="" />
                        <p className='sus-date4'>16/04/2025</p>
                        <h3 className='sus-title4'>Responsibility with a passion: Audi dealership Augsburg</h3>
                        <p className='sus-description4'>In the Augsburg region, Michael Agsteiner is driving sustainability at Audi dealerships – including green roofs, water treatment and ergonomic workplaces. In an interview with Heiko Schmidt, he discusses responsibility.</p>
                        <a className='sus-link4' href="">Read more <i class="fa-solid fa-angle-right"></i></a>
                    </div>

                    <div className='sus-card4'>
                        <img className='sus-image4' src={Image68} alt="" />
                        <p className='sus-date4'>22/01/2025</p>
                        <h3 className='sus-title4'>Active safety functions: driver assist systems of the future</h3>
                        <p className='sus-description4'>Audi engineers work hard every day to ensure that the vehicles they develop meet high standards of safety. A visit to the Active Safety Functions development team.</p>
                        <a className='sus-link4' href="">Read more <i class="fa-solid fa-angle-right"></i></a>
                        <p className='sus-point4'>Assist systems can only assist the driver in the task of driving within the respective system limits. The driver is always responsible for driving the vehicle and is required to be attentive at all times.</p>
                    </div>

                    <div className='sus-card4'>
                        <img className='sus-image4' src={Image69} alt="" />
                        <p className='sus-date4'>02/12/2024</p>
                        <h3 className='sus-title4'>Rethink: thinking about the end right from the start</h3>
                        <p className='sus-description4'>As part of Design for Circularity, Audi promotes the circular economy in the early phases of product development. According to the Rethink principle, components in the concept phase are already designed with their recyclability in mind.</p>
                        <a className='sus-link4' href="">Read more <i class="fa-solid fa-angle-right"></i></a>
                    </div>
                </div>
            </div>

            <div className='sus-section5'>
                <div className='sus-heading-content5'>
                    <h2 className='sus-heading5'>Downloads</h2>
                </div>
                <div className='sus-grid5'>

                    <div className='sus-card5'>

                        <img className='sus-image5' src={Image20} alt="" />
                        <h3 className='sus-title5'>Audi Report 2024 – Audi on the offensive</h3>
                        <p className='sus-description5'>The Audi Report 2024 – the combined annual and sustainability report from AUDI AG – brings together the topics of strategy, finance as well as environmental, social and governance.</p>
                        <a className='sus-link5' href="">Read more <i class="fa-solid fa-angle-right"></i></a>
                        <p className='sus-point5'>Audi A6 Avant e-tron performance: electric power consumption (combined): 17.0–14.8 kWh/100 km; CO₂ emissions (combined): 0 g/km; CO₂ class: A.</p>
                    </div>

                    <div className='sus-card5'>
                        <img className='sus-image5' src={Image20} alt="" />
                        <h3 className='sus-title5'>Sustainability reports</h3>
                        <p className='sus-description5'>Read the collected Audi Sustainability reports and learn more about the implementation of the company’s strategy.</p>
                        <a className='sus-link5' href="">Read more <i class="fa-solid fa-angle-right"></i></a>
                    </div>

                    <div className='sus-card5'>
                        <img className='sus-image5' src={Image71} alt="" />
                        <h3 className='sus-title5'>Documents & policies</h3>
                        <p className='sus-description5'>Voluntary undertakings and principles that apply across the Group form the basis and backbone of our strategic sustainability objectives.</p>
                        <a className='sus-link5' href="">Read more <i class="fa-solid fa-angle-right"></i></a>
                    </div>
                </div>
            </div>

            <div className='sus-section6-1'>
                <h2 className='sus-heading6-1'>Find out more</h2>
                <p className='sus-description6-1'>
                    Audi has set itself the task of providing comprehensive information on the topic of sustainability via a wide variety of media. Here you can find further sources of information on the topic of sustainability at Audi.
                </p>
            </div>

            <div className='sus-section6'>
                <div className='sus-grid6'>

                    <div className='sus-card6'>
                        <img className='sus-image6' src={Image72} alt="" />
                        <h3 className='sus-title6'>Audi Media Center</h3>
                        <a className='sus-link6' href="#">To the sustainablity hub <i class="fa-solid fa-angle-right"></i></a>
                    </div>

                    <div className='sus-card6'>
                        <img className='sus-image6' src={Image73} alt="" />
                        <h3 className='sus-title6'>audi.de</h3>
                        <a className='sus-link6' href="#">To Audi Germany <i class="fa-solid fa-angle-right"></i></a>
                    </div>

                    <div className='sus-card6'>
                        <img className='sus-image6' src={Image20} alt="" />
                        <h3 className='sus-title6'>Audi report 2024</h3>
                        <a className='sus-link6' href="#">To the annual and sustainability report <i class="fa-solid fa-angle-right"></i></a>
                    </div>
                </div>
            </div>

            <div className='sus-section7'>
                <h2 className='sus-heading7'>Contact</h2>
                <p className='sus-description7'>Do you have any questions or suggestions on the subject of sustainability? Send us your message to sustainability@audi.de. The team will be happy to help you!</p>
            </div>
            <div className='sus-button-content7'>
                <a href="#" className='sus-btn7'>Send e-mail</a>
            </div>

        </div>
    )
}

export default SustainabilityOverview