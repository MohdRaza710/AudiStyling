import React from 'react'
import Image140 from '../../assets/image140.png'
import Image141 from '../../assets/image141.png'
import Image142 from '../../assets/image142.png'
import Image143 from '../../assets/image143.png'
import Image144 from '../../assets/image144.png'
import { Button } from 'antd'

// Styling Left
function AudiSportOverview() {
    return (
        <div>
            <div>
                <img className='ads-image' src={Image140} alt="" />
                <span className='ads-paragraph'>Audi RS e-tron GT FC Bayern concept:Power consumption (combined) in kWh/100 km: 22.6–20.6CO₂ emissions (combined) in g/km: 0</span>
            </div>

            <div className='ads-section'>
                <h1 className='ads-heading'>Audi in sport</h1>
                <p className='ads-description'>Audi has been a close partner and sponsor of regional, national and international sport for decades, whether in the area of developing talent or in cooperation with established sportsmen and women or clubs. Audi supports people who pursue their vision. We provide fresh impetus and open up new horizons.</p>
                <span className='ads-point'>Audi RS e-tron GT FC Bayern concept:Power consumption (combined) in kWh/100 km: 22.6–20.6CO₂ emissions (combined) in g/km: 0</span>
            </div>

            <div className='ads-section1'>

                <div className='ads-grid1'>

                    <div className='ads-card1'>
                        <img className='ads-image1' src={Image141} alt="" />
                        <span className='ads-title1'>Vorsprung durch Motorport</span>
                        <p className='ads-description1'>The four rings and motorsport: a legendary combination. Audi continues to prepare to enter Formula 1 in 2026, and Audi Sport customer racing models compete worldwide in the hands of customer teams.</p>
                        <a className='ads-link1' href="">Read more <i class="fa-solid fa-angle-right"></i></a>
                    </div>

                    <div className='ads-card1'>
                        <img className='ads-image1' src={Image142} alt="" />
                        <span className='ads-title1'>Audi and FC Bayern: on the ball together since 2002</span>
                        <p className='ads-description1'>The partnership between Audi and FC Bayern was established in 2002. The driving force behind this successful collaboration is the absolute will to win, the goal of being the best in one’s class – aspirations that both share.</p>
                        <a className='ads-link1' href="">Read more <i class="fa-solid fa-angle-right"></i></a>
                    </div>

                    <div className='ads-card1'>
                        <img className='ads-image1' src={Image143} alt="" />
                        <span className='ads-title1'>Audi and winter sports: an enduring partnership</span>
                        <p className='ads-description1'>After almost four decades, AUDI AG is one of the longest-standing winter sports partners. Find out more about the company’s involvement with the International Ski Federation FIS, the national associations, the Hahnenkamm Races in Kitzbühel and the professional skier and brand ambassador Aleksander Aamodt Kilde.</p>
                        <a className='ads-link1' href="">Read more <i class="fa-solid fa-angle-right"></i></a>
                    </div>
                </div>
            </div>

            <div className='ads-section2'>
                <img className='ads-image2' src={Image144} alt="" />
                <span className='ads-date2'>03/10/2023</span>
                <span className='ads-title2'>A way to inspire — Audi & FC Bayern take Copenhagen</span>
                <p className='ads-description2'>The partners are embarking on another journey together. This time, their destination is Copenhagen — a thrilling city bursting with inspirational stories and projects to share with the world. Join our team as they take the Audi RS e-tron GT FC Bayern concept for a spin and explore Copenhagen while they gear up for the FC Bayern match against FC Copenhagen at Parken Stadium.</p>
                <Button className='ads-btn2'>Read more</Button>
            </div>
        </div>
    )
}

export default AudiSportOverview