import React from 'react'
import Image114 from '../../assets/Image114.png'

function SchoolStudents() {
  return (
    <div>
        <div>
            <img className='school-image' src={Image114} alt="" />
        </div>

        <div className='school-section'>
            <h1 className='school-heading'>School students</h1>
            <p className='school-description'>Are you someone who loves making a difference? Then Audi is your future. We live a lead in technologies and offer you an exciting career with long-term prospects.</p>
        </div>

        <div className='school-section1'>
            <span className='school-description1'> <b>Freedom for your first professional experience:</b> internship, vocational training or one of our dual study programmes – whatever path you take at Audi, you will be at the heart of the action straight away, as an important part of the team, individually supervised and treated as an equal from the start.</span>
        </div>

        <div className='school-section2'>
            <span className='school-description2'>Do you have any questions concerning your application?</span>
            <span className='school-description2.1'>You can find our FAQ here.</span>
            <a className='school-button2' href="">To the FAQ <i class="fa-solid fa-angle-right"></i></a>
        </div>
    </div>
  )
}

export default SchoolStudents