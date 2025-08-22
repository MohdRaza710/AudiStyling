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
                <img src={Image39} alt="" />
            </div>

            <div>
                <h1 className='pro-heading'>Product Innovation</h1>
                <p className='pro-description'>Audi is shaping the sustainable mobility of tomorrow, combining innovative technologies with progressive design along the way. Now is exactly the right moment for courageous and creative minds to ask unfamiliar questions and leave well-trodden paths.</p>
            </div>

            <div className='pro-section1'>

                <div className='pro-gird1'>

                    <div className='pro-card1'>
                        <img className='pro-image1' src={Image50} alt="" />
                        <span className='pro-title1'>Technologies</span>
                        <p className='pro-description1'>Technological leadership is as much a part of the Audi DNA as the iconic four rings. Every day, Audi employees work to ensure that technical progress reaches the road. At the heart of our innovative strength is a unique driving experience. But we go even further: Thanks to future-proof technologies and services, we ensure an unparalleled customer experience.</p>
                        <a className='pro-read-btn1' href="#">Read more </a>
                    </div>

                    <div className='pro-card1'>
                        <img className='pro-image1' src={Image47} alt="" />
                        <span className='pro-title1'>E-Mobility</span>
                        <p className='pro-description1'>We are merging the new world of electric mobility with more than a century of experience in premium vehicle manufacturing. Audi’s vision of sustainable mobility extends far beyond the usual horizons of the automotive industry.</p>
                        <a className='pro-read-btn1' href="#">Read more </a>
                        <span className='pro-point'>Power consumption (combined): 18.9–15.6 kWh/100km; CO₂ emissions (combined): 0 g/km; CO₂ emission class: A</span>
                    </div>
                </div>
            </div>

            <div className='pro-section2'>
                <img className='pro-image2' src={Image48} alt="" />
                <span className='pro-title2'>Anyone who knows Audi knows quattro.</span>
                <p className='pro-description2'>Moreover, you will not want to drive anything else once you have been on the road with quattro. The quattro cutting-edge technology offers dynamism and safety.</p>
                <Button className='pro-read-btn2'>Read more</Button>
            </div>

            <div className='pro-section3'>
                <h2 className='pro-heading3'>You might also be interested in </h2>

                <div className='pro-grid3'>
                    <div className='pro-card3'>
                        <img src="" alt="" />
                        <span></span>
                        <span></span>
                        <p></p>
                        <a href=""></a>
                        <span></span>
                    </div>

                    <div className='pro-card3'>
                        <img src="" alt="" />
                        <span></span>
                        <span></span>
                        <p></p>
                        <a href=""></a>
                    </div>

                    <div className='pro-card3'>
                        <img src="" alt="" />
                        <span></span>
                        <span></span>
                        <p></p>
                        <a href=""></a>
                        <span></span>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ProductInnovation