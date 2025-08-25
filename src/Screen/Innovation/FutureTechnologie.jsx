import React from 'react'
import Image40 from '../../assets/image40.png'
import Image51 from '../../assets/Image51.png'
import Image52 from '../../assets/Image52.png'
import Image53 from '../../assets/Image53.png'
import { Button } from 'antd'

// styling left
function FutureTechnologie() {
    return (
        <div>
            <div>
                <img className='tech-image' src={Image40} alt='' />
            </div>
            <div>
                <h1 className='tech-heading'>Fututre technologies</h1>
                <p className='tech-description'>Autonomous driving, virtual reality or artificial intelligence: For Audi, the term mobility encompasses much more than just getting from point A to point B. In this way, Audi wants to help ensure that new technological possibilities can be used responsibly.</p>
            </div>
            <div className='tech-section1'>
                <img className='tech-image1' src={Image53} alt="" />
                <span className='tech-title1'>Artificial Intelligence</span>
                <p className='tech-description1'>Artificial intelligence plays a key role in autonomous and automated driving. It helps make driving safer – and: it is always learning. The possible new functions can significantly expand the role of the automobile as an emotional, comfortable and modern living space.</p>
                <Button className='tech-read-btn1'>Read More</Button>
            </div>
            <div className='tech-section2'>
                <h2>Topics from the area of future technology</h2>

                <div className='tech-grid2'>
                    <div className='tech-card2'>
                        <img className='tech-image2' src={Image51} alt="" />
                        <span className='tech-date2'>11/03/2022</span>
                        <span className='tech-title2'>Audi using mixed reality to blaze new trails in communication</span>
                        <p className='techdescription2'>Technical communication using mixed reality: Audi A8 presentation delights viewers thanks to the virtual vehicle on air. To use the format, all you need is a smartphone or tablet.</p>
                        <a className='tech-read-btn2' href="">Read more</a>
                    </div>

                    <div className='tech-card2'>
                        <img className='tech-image2' src={Image52} alt="" />
                        <span className='tech-date2'>05/08/2021</span>
                        <span className='tech-title2'>AI in production at Audi: “A perfect field of application”</span>
                        <p className='techdescription2'>Artificial intelligence in production processes is nothing new to Audi. AI experts Rüdiger Eck and Stefan Keckl discuss how Audi uses AI and why people remain indispensable.</p>
                        <a className='tech-read-btn2' href="">Read more</a>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default FutureTechnologie