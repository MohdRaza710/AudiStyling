import React from 'react'
import Image134 from '../../assets/image134.png'
import Image136 from '../../assets/image136.png'
import Image5 from '../../assets/image5.png'
import Image6 from '../../assets/image6.png'
import Image7 from '../../assets/image7.png'
import Image8 from '../../assets/image8.png'
import Image9 from '../../assets/image9.png'
import Image10 from '../../assets/image10.png'
import Image11 from '../../assets/image11.png'
import Image178 from '../../assets/image178.png'
import Image179 from '../../assets/image179.png'
import { Button } from 'antd'
// import { useNavigate } from 'react-router-dom'

const MeticulouDetail = () => {
    // const navigate = useNavigate()

    return (
        <div>
            <div className='frImage'>
                <div className='frContainer'>
                    <h1 className='frText'>Vehicle safety at Audi</h1>
                    <span className='frText1'>When milliseconds count</span> <br />
                    <Button type='default' className='learn-more'>Discover more</Button>
                </div>
            </div>
            {/* <div>
                <p className='frText3'>Audi A6 Sedan: Combined fuel consumption in l/100 km: 7.8–4.8; combined CO₂ emissions in g/km: 177–126; CO₂ class: G–D</p>
            </div> */}

            <div className='LeftPanelSection'>
                <div className='LeftPanelColumn'>
                    <img className='LeftPanelImage' src={Image179} alt="" />
                    <p className='LeftPanelPoint'>The vehicle shown is a concept vehicle that is not available as a production vehicle.</p>
                </div>

                <div className='LeftPanelContainer'>
                    <h2 className='LeftPanelHeading'>Notes From the future</h2>
                    <p className='LeftPanelDescription'>"Clarity, focus, and commitment to implementation – that's how we are reshaping design and the company", – this is the message of CEO Gernot Döllner in notes from the future.</p>
                    <a className='LeftPanelBtn' href="">Learn More</a>
                </div>

            </div>

            <div className='articles-section'>
                <h2 className='section-title'>Current topics from the world of Audi</h2>

                <div className='articles-grid'>
                    <div className='article-card'>
                        <img className='article-image' src={Image178} alt="" />
                        <p className='article-date'>20/10/2025</p>
                        <h3 className='article-title'>Data Science and Complex Driving Systems: the Keys to Tomorrow’s Mobility</h3>
                        <p className='article-description'>Jan Totz, data scientist specializing in autonomous driving and parking, in an interview.</p>
                        <a className='read-more-link'>Read More <i class="fa fa-arrow-right"></i></a>
                    </div>

                    <div className='article-card'>
                        <img className='article-image' src={Image134} alt="" />
                        <h3 className='article-title'>Strive for clarity</h3>
                        <p className='article-description'>The brightest moments in Audi history involved daring leaps of imagination and innovation, cutting-edge technology, and groundbreaking design. The new design philosophy "The Radical Next" builds on this legacy and is based on four principles: clear, technical, intelligent, and emotional. Through the way Audi designs its vehicles, clarity will shape the company.</p>
                        <a className='read-more-link'>Read More <i class="fa fa-arrow-right"></i></a>
                        <p className='article-fine-print'>The vehicle referred to is a concept car that is not available in series production.</p>
                    </div>

                    <div className='article-card'>
                        <img className='article-image' src={Image136} alt="" />
                        <p className='article-date'>07/09/2025</p>
                        <h3 className='article-title'>Clarity is a way of life</h3>
                        <p className='article-description'>„Strive for clarity“ ist ein Leitmotiv für Audi. Dieses Mindset wird im Audi Concept C erlebbar – und von Schauspieler Harris Dickinson gelebt.</p>
                        <a className='read-more-link'>Read More <i class="fa fa-arrow-right"></i></a>
                        <p className='article-fine-print'>The vehicle referred to is a concept car that is not available in series production.</p>
                    </div>
                </div>
            </div>
            <div>
                <div className='audi-work-section'>
                    <img className='audi-work-image' src={Image5} alt="" />
                    <h3 className='audi-work-heading'>Driven by tech. Driven by people.</h3>
                    <p className='audi-work-description'>Progress is more than just a matter of technology. It begins in the mind – driven by people who are passionate about what they do, who think ahead, and who don’t let setbacks steer them off course. These people define who we are, and these are the people we need. Progress. Driven by you.</p>
                    <Button className='learn-more1'>Learn More</Button>
                </div>
            </div>
            <div>
                <div className='audi-innovation-section'>
                    <img className='audi-innovation-image' src={Image6} alt="" />
                    <h3 className='audi-innovation-heading'>Innovation</h3>
                    <p className='audi-innovation-description'>Audi is changing. Continuously. Discover here how our innovations ensure "Vorsprung durch Technik," how modern technology and progressive thinking characterize Audi, which processes are behind them and how our engineers work to further develop the existing.</p>
                    <Button className='learn-more1'>Learn More</Button>
                </div>
            </div>
            <div>
                <div className='audi-work-section'>
                    <img className='audi-work-image' src={Image7} alt="" />
                    <h3 className='audi-work-heading'>Sustainability</h3>
                    <p className='audi-work-description'>Audi takes economic, ecological and social responsibility and has made sustainable business operations an integral part of all of its decisions and products. Find out more about how Audi is shaping the mobility of the future on the basis of a clear strategy.</p>
                    <Button className='learn-more2'>Learn More</Button>
                    <p className='audi-work-point'>Power consumption (combined)*: 16,5–13,6 kWh/100km; CO₂ emissions (combined)*: 0 g/km; CO₂ emission class*: A</p>
                </div>
            </div>
            <div className='md-color'>
                <div className='md-container'>
                    <h2 className='md-heading'>Audi Report 2024</h2>
                    <p className='md-text' >Audi wants to shape the mobility of the future and, in the process, be the most progressive premium car manufacturer. Read the Audi Report 2024 to find out how it plans to achieve this. The combined annual and sustainability report from Audi brings together the topics of strategy, finance as well as environmental, social and governance.</p>

                    <div className='button-container'>
                        <Button className='btn btn-light'>Learn more</Button>
                        <Button className='btn btn-dark'>Download</Button>
                    </div>
                </div>
            </div>

            <div className='press-section'>
                <h2 className='sections-title'>Press releases</h2>

                <div className='press-grid'>
                    <div className='press-card'>
                        <img className='press-image' src={Image8} alt="" />
                        <h3 className='press-title'>Warning: scam in the used-car trade</h3>
                        <Button className='press-btn'>To the press release</Button>
                    </div>

                    <div className='press-card'>
                        <img className='press-image' src={Image9} alt="" />
                        <h3 className='press-title'>Harmony in motion: inside the new Audi Q3</h3>
                        <Button className='press-btn'>To the press release</Button>
                    </div>

                    <div className='press-card'>
                        <img className='press-image' src={Image10} alt="" />
                        <h3 className='press-title'>Revolut becomes title partner of the future Audi F1 Team</h3>
                        <Button className='press-btn'>To the press release</Button>
                    </div>
                </div>
                <div className='btn-container'>
                    <Button className='press-btn1'>To the Audi MediaCenter</Button>
                </div>
            </div>
            <div>
                <div className='audi-innovation-section'>
                    <img className='audi-innovation-image' src={Image11} alt="" />
                    <h3 className='audi-innovation-heading'>At Audi you’ll find the right vehicle for every requirement</h3>
                    <p className='audi-innovation-description'>Sporty, luxurious, or compact – at Audi you will find the right vehicle for every requirement. Discover and configure our series models now.</p>
                    <span className='audi-work-point'>Power consumption (combined): 18.6–17.5 kWh/100km; CO₂ emissions (combined): 0 g/km; CO₂ emission class: A</span>
                </div>
            </div>
        </div>
    )
}

export default MeticulouDetail