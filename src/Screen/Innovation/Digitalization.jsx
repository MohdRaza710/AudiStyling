import React from 'react'
import Image3 from '../../assets/image3.png'
import Image41 from '../../assets/image41.png'
import Image54 from '../../assets/image54.png'
import Image55 from '../../assets/image55.png'
import Image56 from '../../assets/image56.png'
import Image57 from '../../assets/image57.png'
import { RightOutlined } from '@ant-design/icons';

function Digitalization() {
    return (
        <div>
            <div>
                <img className='digi-image' src={Image41} alt="" />
            </div>

            <div className='digi-content'>
                <h1 className='digi-heading'>Digialization</h1>
                <p className='digi-description'>Audi is systematically driving forward the digitization of the vehicle and the customer experience. And Production is also working on the Smart Factory, the intelligent, digitally networked factory of the future.</p>
            </div>

            <div className='digi-section1'>
                <div className='digi-grid1'>
                    <div className='digi-card1'>
                        <img className='digi-image1' src={Image54} alt="" />
                        <h3 className='digi-title1'>Digitale Infrastruktur</h3>
                        <p className='digi-description1'>Eine hochmoderne Mobilitätsinfrastruktur bildet die essenzielle Grundlage einer vor allem von digitalen Innovationen geprägten Zukunft. Audi investiert in diese Zukunft und arbeitet an einem konsistenten, nahtlosen und kundenzentrierten Premiumerlebnis auf allen Ebenen.</p>
                        <a className='digi-read-btn1' href="">Read more <RightOutlined /></a>
                    </div>

                    <div className='digi-card1'>
                        <img className='digi-image1' src={Image55} alt="" />
                        <h3 className='digi-title1'>Digitale Produkte</h3>
                        <p className='digi-description1'>Eine hochmoderne Mobilitätsinfrastruktur wie zum Beispiel schnelle 5G- oder 6G-Mobilfunknetze bildet die essenzielle Grundlage einer vor allem von digitalen Innovationen geprägten Zukunft. Audis Investment in diese Zukunft garantiert ein konsistentes, nahtloses und kundenzentriertes Premiumerlebnis auf allen Ebenen.</p>
                        <a className='digi-read-btn1' href="">Read more <RightOutlined /></a>
                    </div>

                </div>
                <div className='digi-section2'>
                    <div className='digi-heading-content'>
                        <h2 className='digi-heading2'>Yo might also be interested in</h2>
                    </div>


                    <div className='digi-grid2'>
                        <div className='digi-card2'>
                            <img className='digi-image2' src={Image3} alt="" />
                            <span className='digi-date2'>09/07/2025</span>
                            <span className='digi-title2'>Smooth sailing through the toll stations</span>
                            <p className='digi-description2'>With the toll box from Audi and Tolltickets, you can travel comfortably through Europe – no need to stop, no need for cash, just a completely convenient in-car experience.</p>
                            <a className='digi-read-btn1' href="">Read more <RightOutlined /></a>
                        </div>

                        <div className='digi-card2'>
                            <img style={{height: '214px'}} className='digi-image2' src={Image56} alt="" />
                            <span className='digi-date2'>16/03/2023</span>
                            <span className='digi-title2'>It’s the inner values that count</span>
                            <p className='digi-description2'>In the interior, digitalisation and the use of sustainable materials are driving a major change. A look into the past, present and future reveals the details that matter.</p>
                            <a className='digi-read-btn1' href="">Read more <RightOutlined /></a>
                        </div>

                        <div className='digi-card2'>
                            <img className='digi-image2' src={Image57} alt="" />
                            <span className='digi-title2'>Audi digital services</span>
                            <p className='digi-description2'>The car of tomorrow can do more than just drive – it is part of the digital world. Audi is continuously expanding its connect services in all models.</p>
                            <a className='digi-read-btn1' href="">Read more <RightOutlined /></a>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Digitalization