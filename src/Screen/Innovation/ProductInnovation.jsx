import React from 'react'
import Image2 from '../../assets/image2.png'
import Image39 from '../../assets/image39.png'
import Image45 from '../../assets/image45.png'
import Image47 from '../../assets/image47.png'
import Image48 from '../../assets/image48.png'
import Image49 from '../../assets/image49.png'
import Image50 from '../../assets/image50.png'
import { Button } from 'antd'

// styling left
function ProductInnovation() {
    return (
        <div>
            <div>
                <img className='pro-image' src={Image39} alt="" />
            </div>

            <div className='pro-content'>
                <h1 className='pro-heading'>Product Innovation</h1>
                <p className='pro-description'>Audi is shaping the sustainable mobility of tomorrow, combining innovative technologies with progressive design along the way. Now is exactly the right moment for courageous and creative minds to ask unfamiliar questions and leave well-trodden paths.</p>
            </div>

            <div className='pro-section1'>

                <div className='pro-gird1'>

                    <div className='pro-card1'>
                        <img className='pro-image1' src="https://emea-dam.audi.com/adobe/assets/urn:aaid:aem:23daa54f-c351-4dae-a745-8da7bac7238b/as/1920x1080_innovation_PI_technologien_05_A230543_large.jpg?width=1920" alt="" />
                        <h3 className='pro-title1'>Technologies</h3>
                        <p className='pro-description1'>Technological leadership is as much a part of the Audi DNA as the iconic four rings. Every day, Audi employees work to ensure that technical progress reaches the road. At the heart of our innovative strength is a unique driving experience. But we go even further: Thanks to future-proof technologies and services, we ensure an unparalleled customer experience.</p>
                        <a className='pro-read-btn1' href="#">Read more <i class="fa-solid fa-angle-right"></i></a>
                    </div>

                    <div className='pro-card1'>
                        <img style={{ height: '330px' }} className='pro-image1' src={Image47} alt="" />
                        <h3 className='pro-title1'>E-Mobility</h3>
                        <p className='pro-description1'>We are merging the new world of electric mobility with more than a century of experience in premium vehicle manufacturing. Audi’s vision of sustainable mobility extends far beyond the usual horizons of the automotive industry.</p>
                        <a className='pro-read-btn1' href="#">Read more <i class="fa-solid fa-angle-right"></i></a>
                        <p className='pro-point'>Power consumption (combined): 18.9–15.6 kWh/100km; CO₂ emissions (combined): 0 g/km; CO₂ emission class: A</p>
                    </div>
                </div>
            </div>

            <div className='pro-section2'>
                <div className='pro-image-container2'>
                    <img className='pro-image2' src={Image48} alt="Person looking at an orange Audi car parked outside a modern home in the snow" />
                </div>

                <div className='pro-content2'>
                    <h3 className='pro-title2'>Anyone who knows Audi knows quattro.</h3>
                    <p className='pro-description2'>
                        Moreover, you will not want to drive anything else once you have been on the road with quattro. The quattro cutting-edge technology offers dynamism and safety.
                    </p>
                    <a className='pro-read-btn2'>Read more</a>
                </div>
            </div>

            <div className='pro-section3'>

                <div className='pro-heading-content3'>
                    <h2 className='pro-heading3'>You might also be interested in </h2>
                </div>

                <div className='pro-grid3'>
                    <div className='pro-card3'>
                        <img className='pro-image3' src={Image2} alt="" />
                        <p className='pro-date3'>17/07/2025</p>
                        <h3 className='pro-title3'>All charged up! Cruising across Scandinavia with the Audi A6 Sportback e-tron</h3>
                        <p className='pro-description3'>A fully electric drive with the Audi A6 Sportback e-tron through Denmark, Sweden, and Norway. Efficiency, comfort, and innovation from Copenhagen to Bergen.</p>
                        <a className='pro-read-btn3' href="">Read more <i class="fa-solid fa-angle-right"></i></a>
                        <p className='pro-point3'>Audi A6 Sportback e-tron performance: Electric power consumption (combined): 16–14,0 kWh/100 km; CO₂ emissions (combined): 0 g/km; CO₂ class: A.</p>
                    </div>

                    <div className='pro-card3'>
                        <img className='pro-image3' src={Image49} alt="" />
                        <p className='pro-date3'>27/05/2025</p>
                        <h3 className='pro-title3'>Fueled by love</h3>
                        <p className='pro-description3'>From icons to innovation: Discover the history of the Audi C-Series – from the classic Audi 100 to the brand-new Audi A6 Avant and Limousine.</p>
                        <a className='pro-read-btn3' href="">Read more <i class="fa-solid fa-angle-right"></i></a>
                    </div>

                    <div className='pro-card3'>
                        <img style={{height: '214px'}} className='pro-image3' src={Image45} alt="" />
                        <p className='pro-date3'>10/09/2024</p>
                        <h3 className='pro-title3'>Record-breaking aerodynamics</h3>
                        <p className='pro-description3'>The Audi A6 Sportback e-tron combines aerodynamics and energy efficiency for range and performance. Find out more now.</p>
                        <a className='pro-read-btn3' href="">Read more <i class="fa-solid fa-angle-right"></i></a>
                        <p className='pro-point3'>Audi A6 Sportback e-tron performance: Combined electric power consumption in kWh/100 km (62.1 mi): 15.9-14.0; combined CO2 emissions in g/km (g/mi): 0 (0) CO2-class: A</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ProductInnovation