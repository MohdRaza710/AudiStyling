import React from 'react'
import Image58 from '../../assets/image58.png'
import Image59 from '../../assets/image59.png'
import Image60 from '../../assets/image60.png'
import Image61 from '../../assets/image61.png'
import Image62 from '../../assets/image62.png'
import { Button } from 'antd'

function AcademicCooperation() {
    return (
        <div>
            <div>
                <img className='acad-image' src={Image58} alt="" />
            </div>

            <div className='acad-content'>
                <h1 className='acad-heading'>Academic Cooperation</h1>
                <p className='acad-description'>Cooperation with scientific institutions contributes in important ways to achieving the strategic goals of AUDI AG. It is particularly important in this context to understand our partnerships with scientific institutions as exceptional relationships that secure the future of AUDI AG and that require special rules and standards for transparent, fair and honest cooperation.</p>
            </div>

            <div className='acad-section1'>
                <h3 className='acad-title1'>Forms of Cooperation</h3>
                <p className='acad-description1'>The forms of cooperation are diverse. Examples of this include joint research projects in which scientists research future topics relevant to Audi. Audi also supports employees who are involved in teaching and who consequently give students an insight into industrial practices.</p>
                <br />
                <p className='acad-description1'>Furthermore, Audi promotes research and teaching at colleges and universities by endowing professorships. Examples of other forms of cooperation include student projects, public funding projects, theses, the Audi doctorate program, sponsorships, entrepreneurship, etc.</p>
            </div>

            <div className='acad-section2'>
                <div className='acad-text-content'>
                    <h3 className='acad-title2'>Research projects with PhD students</h3>
                    <p className='acad-description2'>Young academics cooperate with colleges and universities to conduct research on technical and non-technical topics of the future. </p>
                    <a className='acad-read-btn2' href="">Read more</a>
                </div>

                <div className='acad-image-content'>
                    <img className='acad-image2' src={Image59} alt="" />
                </div>
            </div>

            <div className='acad-section3'>
                <div className='acad-image-content3'>
                    <img className='acad-image3' src={Image60} alt="" />
                </div>

                <div className='acad-text-content3'>
                    <h3 className='acad-title3'>Automotive Initiative 2025</h3>
                    <p className='acad-description3'>AI25 sees itself as a leading innovation and competence network. The partners share the conviction that the digital transformation can best be advanced through working together and in a powerful ecosystem of companies and scientific institutions.</p>
                    <a className='acad-read-btn3' href="">Read more</a>
                </div>
            </div>

            <div className='acad-section4'>
                <div className='acad-text-content4'>
                    <h2 className='acad-title4'>Endowed professorship procurement</h2>
                    <p className='acad-tpoint4'>Christian von Deimling</p>
                    <p className='acad-description4'>Universität der Bundeswehr München, Faculty of Economics and Organizational Sciences, General Business Administration, in particular Procurement and Supply Management</p>
                </div>

                <div className='acad-image-content4'>
                    <img className='acad-image4' src={Image61} alt="" />
                    <p className='acad-point4'>(© Universität der Bundeswehr Munich, Foto: Press, Editing: Nietsch)</p>
                </div>
            </div>

            <div className='acad-section5'>
                <div className='acad-image-content5'>
                    <img className='acad-image5' src={Image62} alt="" />
                    <p className='acad-point5'>(Foto: photoresque)</p>
                </div>

                <div className='acad-text-content5'>
                    <h3 className='acad-title5'>Endowed professorship AI methods in production</h3>
                    <p className='acad-tpoint5'>Jürgen Bock</p>
                    <p className='acad-description5'>Technische Hochschule Ingolstadt, Faculty of Industrial Engineering and Management, AI Applications in Innovative Production and Logistics Systems</p>
                </div>
            </div>

            <div className='acad-section6'>
                <h2 className='acad-title6'>Are you interested in working with Audi?</h2>
                <p className='acad-description6'>Please feel free to contact us via wissenschaftskooperationen@audi.de</p>
                <a href='mailto:wissenschaftskooperationen@audi.de' className='acad-contact-btn6'>Contact us now</a>
            </div>

        </div>
    )
}

export default AcademicCooperation