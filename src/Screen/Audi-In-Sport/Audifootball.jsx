import React from 'react'
import Image142 from '../../assets/image142.png'
import Image144 from '../../assets/image144.png'
import Image163 from '../../assets/image163.png'
import Image164 from '../../assets/image164.png'
import Image165 from '../../assets/image165.png'
import { Button } from 'antd'

// styling left 
function Audifootball() {
    return (
        <div>
            <div className='adf-section'>
                <h1 className='adf-heading'>Audi and football: an electrifying partnership</h1>
                <p className='adf-description'>Football and the Audi brand have a great deal in common: dynamic, enthusiastic and stylish, with a passion for perfection. We also know the competition, have to maintain focus and must stay onside. As a partner of successful international football clubs such as FC Bayern Munich, we don’t just want to create electrifying moments on the road, but in the stadiums of Europe’s top clubs too.</p>
            </div>

            <div className='adf-section1'>
                <img className='adf-image1' src={Image142} alt="" />
                <span className='adf-title1'>Audi and FC Bayern: on the ball together since 2002</span>
                <p className='adf-description1'>The partnership between Audi and FC Bayern was established in 2002. The driving force behind this successful collaboration is the absolute will to win, the goal of being the best in one’s class – aspirations that both share.</p>
                <Button className='adf-btn1'>Read more</Button>
            </div>

            <div className='adf-section2'>

                <div className='adf-grid2'>

                    <div className='adf-card2'>
                        <img className='adf-image2' src={Image144} alt="" />
                        <span className='adf-date2'>03/10/2023</span>
                        <span className='adf-tile2'>A way to inspire — Audi & FC Bayern take Copenhagen</span>
                        <p className='adf-description2'>The partners are embarking on another journey together. This time, their destination is Copenhagen — a thrilling city bursting with inspirational stories and projects to share with the world. Join our team as they take the Audi RS e-tron GT FC Bayern concept for a spin and explore Copenhagen while they gear up for the FC Bayern match against FC Copenhagen at Parken Stadium.</p>
                        <a className='adf-link2' href="">Read more <i class="fa-solid fa-angle-right"></i></a>
                    </div>

                    <div className='adf-card2'>
                        <img className='adf-image2' src={Image163} alt="" />
                        <span className='adf-date2'>21/11/2022</span>
                        <span className='adf-tile2'>Closer than ever before — a new approach to our vehicle handover</span>
                        <p className='adf-description2'>Thirty lucky Audi employees were able to experience something very special at this year's vehicle handover to FC Bayern as they celebrated twenty years of partnership together.</p>
                        <a className='adf-link2' href="">Read more <i class="fa-solid fa-angle-right"></i></a>
                    </div>

                    <div className='adf-card2'>
                        <img className='adf-image2' src={Image164} alt="" />
                        <span className='adf-date2'>22/08/2022</span>
                        <span className='adf-tile2'>20 years of Audi and FC Bayern Munich</span>
                        <p className='adf-description2'>The 2022/23 Bundesliga season marks the 20th anniversary of the partnership between Audi and FC Bayern Munich. Two decades of outstanding success, countless emotional highlights, exceptional achievements, and innovations.</p>
                        <a className='adf-link2' href="">Read more <i class="fa-solid fa-angle-right"></i></a>
                    </div>
                </div>
            </div>

            <div className='adf-section3'>
                <img className='adf-image3' src={Image165} alt="" />
                <span className='adf-title3'>Electrified performance</span>
                <p className='adf-title3'>Experience the dawn of a new era with the Audi RS e-tron GT: extraordinary shapes, a sensuous feel, intuitive on-board technology and impressive electric performance.</p>
                <Button className='adf-btn3'>Learn more</Button>
                <span className='adf-point3'>Power consumption (combined)*: 21,1–18,4 kWh/100km; CO₂ emissions (combined)*: 0 g/km; CO₂ emission class*: A</span>
            </div>
        </div>
    )
}

export default Audifootball