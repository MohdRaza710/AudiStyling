import React from 'react'
import Image127 from '../../assets/image127.png'
import Image128 from '../../assets/image128.png'
import Image129 from '../../assets/image129.png'
import Image130 from '../../assets/image130.png'
import Image131 from '../../assets/image131.png'
import Image132 from '../../assets/image132.png'
import Image133 from '../../assets/image133.png'
import { Button } from 'antd'

function KarriereImAutohaus() {
    return (
        <div>
            <div>
                <img className='kar-image' src={Image127} alt="" />
            </div>

            <div className='kar-section'>
                <h1 className='kar-heading'>Career in a car dealership</h1>
                <p className='kar-description'>Our Audi partners are always looking for dedicated and qualified career starters, experienced professionals, and managers. Challenging, varied, and with bright prospects.</p>
            </div>

            <div className='kar-section1'>
                <p className='kar-title1'>In this section you will find information about your career opportunities at Audi dealershps and services partners in Germany.</p>
                <a className='kar-link1' href="">To the career pages of AUDI AG </a>
            </div>

            <div className='kar-section2'>
                Audi has been one of the most successful automakers in the premium segment for years. We achieve this success together with our qualified and motivated employees at Audi dealerships. Our Audi partners are always looking for committed and qualified career starters, experienced professionals, and management positions. Challenging, varied, and with excellent prospects – start your career at an Audi dealership with a friendly team.
                <br />
                <b>You. Us. Audi</b>. - It's all in the tone: Join an Audi dealership and become part of a successful and friendly team. A wide range of career opportunities await you in service, sales, or the commercial sector.
                <br />
                <a className='kar-link2' href=""><i class="fa-solid fa-angle-right"></i> Current job vacancies and contact</a>
            </div>

            <div className='kar-section3'>

                <div className='kar-grid3'>

                    <div className='kar-card3'>
                        <img className='kar-image3' src={Image128} alt="" />
                        <span className='kar-title3'>Pupils</span>
                        <a className='kar-link3' href="">Learn more <i class="fa-solid fa-angle-right"></i></a>
                    </div>

                    <div className='kar-card3'>
                        <img className='kar-image3' src={Image129} alt="" />
                        <span className='kar-title3'>Experienced professionals</span>
                        <a className='kar-link3' href="">Learn more <i class="fa-solid fa-angle-right"></i></a>
                    </div>

                    <div className='kar-card3'>
                        <img className='kar-image3' src={Image130} alt="" />
                        <span className='kar-title3'>Management</span>
                        <a className='kar-link3' href="">Learn more <i class="fa-solid fa-angle-right"></i></a>
                    </div>
                </div>
            </div>

            <div className='kar-section4'>

                <div className='kar-grid4'>

                    <div className='kar-card4'>
                        <img className='kar-image4' src={Image131} alt="" />
                        <span className='kar-title4'>Working world at Audi dealerships</span>
                        <a className='kar-link4' href="">Learn more <i class="fa-solid fa-angle-right"></i></a>
                    </div>

                    <div className='kar-card4'>
                        <img className='kar-image4' src={Image132} alt="" />
                        <span className='kar-title4'>Application and contact</span>
                        <a className='kar-link4' href="">Learn more <i class="fa-solid fa-angle-right"></i></a>
                    </div>
                </div>
            </div>

            <div className='kar-section5'>
                <img className='kar-image5' src={Image133} alt="" />
            </div>

            <div className='kar-section6'>
                <span className='kar-title6'>Click here to fo to the job portal</span>
                <Button className='kar-btn6'>For trainees and interns</Button>
                <Button className='kar-btn6.1'>For specialists and managers</Button>
            </div>
        </div>
    )
}

export default KarriereImAutohaus