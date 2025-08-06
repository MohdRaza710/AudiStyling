import React from 'react'
import Image2 from '../../assets/image2.png'
import Image3 from '../../assets/image3.png'
import Image4 from '../../assets/image4.png'
import Image5 from '../../assets/image5.png'
import Image6 from '../../assets/image6.png'
import Image7 from '../../assets/image7.png'
import { Button } from 'antd'
// import { useNavigate } from 'react-router-dom'

const MeticulouDetail = () => {
    // const navigate = useNavigate()

    return (
        <div>
            <div className='frImage'>
                <div className='frText'>
                    <h1 className='frText1'>Meticulous detail</h1>
                    <span className='frText2'>The aerodynamic design of the new Audi A6 Sedan</span> <br />
                    <Button type='default' className='learn-more'>Learn More</Button>
                </div>
            </div>
            <div>
                <p className='frText3'>Audi A6 Sedan: Combined fuel consumption in l/100 km: 7.8–4.8; combined CO₂ emissions in g/km: 177–126; CO₂ class: G–D</p>
            </div>

            <div className='articles-section'>
                <h2 className='section-title'>Current topics from the world of Audi</h2>

                <div className='articles-grid'>
                    <div className='article-card'>
                        <img className='article-image' src={Image2} alt="" />
                        <p className='article-date'>17/07/2025</p>
                        <h3 className='article-title'>All charged up! Cruising across Scandinavia with the Audi A6 Sportback e-tron</h3>
                        <p className='article-description'>A fully electric drive with the Audi A6 Sportback e-tron through Denmark, Sweden, and Norway.Efficiency, comfort, and innovation from Copenhagen to Bergen.</p>
                        <Button className='read-more-link'>Read More <i class="fa fa-arrow-right"></i></Button>
                        <p className='article-fine-print'>Audi A6 Sportback e-tron performance: Electric power consumption(combined): 16–14,0 kWh/100 km; CO₂ emissions (combined): 0 g/km; CO₂ class: A.</p>
                    </div>

                    <div className='article-card'>
                        <img className='article-image' src={Image3} alt="" />
                        <p className='article-date'>09/07/2025</p>
                        <h3 className='article-title'>Smooth sailing through the toll stations</h3>
                        <p className='article-description'>With the toll box from Audi and Tolltickets, you can travel comfortably through Europe – no need to stop, no need for cash, just a completely convenient in-car experience.</p>
                        <Button className='read-more-link'>Read More <i class="fa fa-arrow-right"></i></Button>
                    </div>

                    <div className='article-card'>
                        <img style={{ width: '50%' }} src={Image4} alt="" />
                        <p className='article-date'>10/06/2025</p>
                        <h3 className='article-title'>Into the future with software – reimagining the car</h3>
                        <p className='article-description'>Audi is working on software-defined vehicles. SDVs mark the next milestone on the road to the car of the future.</p>
                        <Button className='read-more-link'>Read More <i class="fa fa-arrow-right"></i></Button>
                    </div>
                </div>
            </div>
            <div>
                
            </div>
        </div>
    )
}

export default MeticulouDetail