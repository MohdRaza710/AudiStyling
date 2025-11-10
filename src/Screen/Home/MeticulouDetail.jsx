import React from 'react'
import Image134 from '../../assets/image134.png'
import Image136 from '../../assets/image136.png'
import Image180 from '../../assets/image180.png'
import Image181 from '../../assets/image181.png'
import Image182 from '../../assets/image182.png'
import Image183 from '../../assets/image183.png'
import Image184 from '../../assets/image184.png'
import Image185 from '../../assets/image185.png'
import Image187 from '../../assets/image187.png'
import Image188 from '../../assets/image188.png'
import Image20 from '../../assets/image20.png'
import Image102 from '../../assets/image102.png'
import Image6 from '../../assets/image6.png'
import Image7 from '../../assets/image7.png'
import Image8 from '../../assets/image8.png'
import Image9 from '../../assets/image9.png'
import Image10 from '../../assets/image10.png'
import Image11 from '../../assets/image11.png'
import Image178 from '../../assets/image178.png'
import Image179 from '../../assets/image179.png'
// import { useNavigate } from 'react-router-dom'

const MeticulouDetail = () => {
    // const navigate = useNavigate()

    return (
        <div>
            <div className='frImage'>
                <div className='frContainer'>
                    <h1 className='frText'>Vehicle safety at Audi</h1>
                    <span className='frText1'>When milliseconds count</span> <br />
                    <a href="#" type='default' className='learn-more'>Discover more</a>
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


            {/* <div>
                <div className='audi-innovation-section'>
                    <img className='audi-innovation-image' src={Image6} alt="" />
                    <h3 className='audi-innovation-heading'>Innovation</h3>
                    <p className='audi-innovation-description'>Audi is changing. Continuously. Discover here how our innovations ensure "Vorsprung durch Technik," how modern technology and progressive thinking characterize Audi, which processes are behind them and how our engineers work to further develop the existing.</p>
                    <a href="#" className='learn-more1'>Learn More</a>
                </div>
            </div>

            <div>
                <div className='audi-work-section'>
                    <img className='audi-work-image' src={Image7} alt="" />
                    <h3 className='audi-work-heading'>Sustainability</h3>
                    <p className='audi-work-description'>Audi takes economic, ecological and social responsibility and has made sustainable business operations an integral part of all of its decisions and products. Find out more about how Audi is shaping the mobility of the future on the basis of a clear strategy.</p>
                    <a href="#" className='learn-more2'>Learn More</a>
                    <p className='audi-work-point'>Power consumption (combined)*: 16,5–13,6 kWh/100km; CO₂ emissions (combined)*: 0 g/km; CO₂ emission class*: A</p>
                </div>
            </div> */}


            <div className='press-section'>
                <h2 className='sections-title'>Press releases</h2>

                <div className='press-grid'>
                    <div className='press-card'>
                        <img className='press-image' src={Image188} alt="" />
                        <h3 className='press-title'>Dynamics meet team spirit: FC Bayern Munich women choose Audi Q3</h3>
                        <a href="#" className='press-btn'>To the press release</a>
                        <p className='press-point'>Audi Q3 SUV: Fuel consumption (combined): 9.0–5.3 l/100 km; CO₂ emissions (combined): 205–137 g/km; CO₂ classes: G–E</p>
                    </div>

                    <div className='press-card'>
                        <img className='press-image' src={Image8} alt="" />
                        <h3 className='press-title'>Warning: scam in the used-car trade</h3>
                        <a href="#" className='press-btn'>To the press release</a>
                    </div>

                    <div className='press-card'>
                        <img className='press-image' src={Image185} alt="" />
                        <h3 className='press-title'>Audi Group: first nine months marked by challenging conditions and strategic realignment</h3>
                        <a href="#" className='press-btn'>To the press release</a>
                        <p className='press-point'>Audi S6 Sportback e-tron: Electric power consumption (combined): 16.7–15.7 kWh/100 km; CO2 emissions (combined): 0 g/km; CO2 class: A Audi S6 Avant e-tron: Electric power consumption (combined): 17.4–16.4 kWh/100 km; CO2 emissions (combined): 0 g/km; CO2 class: A</p>
                    </div>
                </div>

                <div className='btn-container'>
                    <a href="#" className='press-btn1'>To the Audi MediaCenter</a>
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