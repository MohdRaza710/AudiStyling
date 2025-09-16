import React from 'react'
import Image120 from '../../assets/image120.png'
import Image121 from '../../assets/image121.png'
import Image122 from '../../assets/image122.png'
import Image93 from '../../assets/image93.png'
import Image97 from '../../assets/image97.png'
import Image102 from '../../assets/image101.png'
import { Button } from 'antd'

function Graduates() {
    return (
        <div>
            <div>
                <img className='grd-image' src={Image97} alt="" />
            </div>

            <div className='grd-section'>
                <h1 className='grd-heading'>Graduates</h1>
                <p className='grd-description'>So you’ve graduated from university? Congratulations! We can offer you career and development opportunities all around the world. Our graduate programs give you a comprehensive overview of the entire company as well as plenty of possibilities to work in interdisciplinary teams and network.</p>
            </div>

            <div className='grd-section1'>
                <span className='grd-title1'>Find the right job at audi</span>
                <Button className='grd-btn1'>To the jobs</Button>
            </div>

            <div className='grd-section2'>

                <div className='grd-grid2'>

                    <div className='grd-card2'>
                        <img className='grd-image2' src={Image120} alt="" />
                        <span className='grd-title2'>Audi Global Graduates Program</span>
                    </div>

                    <div className='grd-card2'>
                        <img className='grd-image2' src={Image121} alt="" />
                        <span className='grd-title2'>PhD Program</span>
                    </div>
                </div>
            </div>

            <div className='grd-section3'>
                <span className='grd-title3'>Do you have any questions concerning your application?</span>
                <span className='grd-title3.1'>You can find our FAQ here</span>
                <Button className='grd-btn3'>To the FAQ</Button>
            </div>

            <div className='grd-section4'>
                <h1 className='grd-heading4'>You might also be interested in</h1>

                <div className='grd-grid4'>

                    <div className='grd-card4'>
                        <img className='grd-image4' src={Image122} alt="" />
                        <span className='grd-title4'>Audi Benefits</span>
                        <a className='grd-link4' href="">Read more <i class="fa-solid fa-angle-right"></i></a>
                    </div>

                    <div className='grd-card4'>
                        <img className='grd-image4' src={Image93} alt="" />
                        <span className='grd-title4'>Working at Audi</span>
                        <a className='grd-link4' href="">Read more <i class="fa-solid fa-angle-right"></i></a>
                    </div>
                </div>
            </div>

            <div className='grd-section5'>
                <img className='grd-image5' src={Image102} alt="" />
                <span className='grd-title5'>Career-related events</span>
                <p className='grd-description5'>You will recieve further information about career opportunities at our events. We are looking forward to seeing you!</p>
                <Button className='grd-btn5'>Read more</Button>
            </div>
        </div>
    )
}

export default Graduates