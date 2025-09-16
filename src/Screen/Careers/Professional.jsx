import React from 'react'
import Image123 from '../../assets/image123.png'
import Image124 from '../../assets/image124.png'
import Image125 from '../../assets/image125.png'
import Image126 from '../../assets/image126.png'
import Image99 from '../../assets/image99.png'
import Video1 from '../../assets/video1.mp4'
import { Button } from 'antd'


// Styling left
function Professional() {
    return (
        <div>
            <div>
                <img className='prf-image' src={Image126} alt="" />
            </div>

            <div className='prf-section'>
                <h1 className='prf-heading'>Professionals</h1>
                <p className='prf-description'>Autonomous driving, electromobility, AI, digitalization – you really will be working on the future of mobility with us as part of an open innovation culture in which teamwork and new thinking matter. We encourage honest and respectful collaboration and offer you the freedom to work in the way that is best for you, your area of activities and the people in your team.</p>
            </div>

            <div className='prf-section1'>
                <span className='prf-title1'>Find the right job at Audi</span>
                <Button className='prf-description1'>To the jobs</Button>
            </div>

            <div className='prf-section2'>

                <div className='prf-grid2'>

                    <div className='prf-card2'>
                        <img className='prf-image2' src={Image} alt="" />
                        <span className='prf-title2'>IT & Technology</span>
                    </div>

                    <div className='prf-card2'>
                        <img className='prf-image2' src={Image} alt="" />
                        <span className='prf-title2'>Development opportunities</span>
                    </div>
                </div>
            </div>

            <div className='prf-section3'>
                <video className='prf-video3' src={Video1} />
                <span className='prf-title3'>Driven by tech. Driven by people</span>
                <p className='prf-description3'>The transformation of mobility is changing the world. And we are changing with it. Boosted by a strength that has always been anchored in the DNA of our company: the strength to lead. Today, more than ever, we aspire to lead the way and inspire through premium technology. With people who share this desire and wish to join us in shaping the future together. Our Tech Stories introduce these people and show how they work hard every day - from the development of the front camera to the high-voltage battery.</p>
                <Button className='prf-btn3'>Learn more</Button>
            </div>

            <div className='prf-section4'>
                <span className='prf-'>News from the world of Audi</span>

                <div className='prf-grid4'>

                    <div className='prf-card4'>
                        <img className='prf-image4' src={Image} alt="" />
                        <span className='prf-date4'>10/05/2024</span>
                        <span className='prf-title4'>Women in Tech: how Audi women are shaping the future</span>
                        <p className='prf-description4'>Artificial intelligence (AI) in Audi production, sustainable motorsport, and reinventing the car: Audi women talk about their daily lives as tech experts at Audi.</p>
                        <a className='prf-link4' href="">Read more <i class="fa-solid fa-angle-right"></i></a>
                    </div>

                    <div className='prf-card4'>
                        <img className='prf-image4' src={Image} alt="" />
                        <span className='prf-date4'>12/01/2023</span>
                        <span className='prf-title4'>We are on fire for Formula 1. With no fossil fuels.</span>
                        <p className='prf-description4'>From 2026, Audi will compete in the Formula 1 World Championship and prove just how powerful electrified drives are.</p>
                        <a className='prf-link4' href="">Read more <i class="fa-solid fa-angle-right"></i></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Professional