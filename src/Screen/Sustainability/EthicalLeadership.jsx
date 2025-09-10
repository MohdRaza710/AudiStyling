import React from 'react'
import Image94 from '../../assets/Image94.png'
import Image95 from '../../assets/Image95.png'
import Image19 from '../../assets/Image19.png'
import Image23 from '../../assets/Image23.png'

// styling left
function EthicalLeadership() {
    return (
        <div>
            <div>
                <img src={Image94} alt="" />
            </div>
            <div>
                <h1 className='eth-heading'>Ethical Leadership</h1>
                <p className='eth-description'>Compliance, integrity and culture in harmony: Responsible leadership and a corporate culture based on values are decisive success factors for Audi. They give employees and stakeholders security and transparency.</p>
            </div>

            <div className='eth-section1'>
                <div className='eth-grid1'>

                    <div className='eth-card1'>'
                        <img className='eth-image1' src={Image23} alt="" />
                        <span className='eth-title1'>Integrity</span>
                        <p className='eth-description1'>Doing what is right out of personal conviction: Behaving with integrity is not just an aspiration for Audi, but a central pillar of its corporate culture. Discover the most important facts and learn how Audi succeeds in permanently ingraining integrity in its employees’ minds and behavior.</p>
                        <a className='eth-link1' href="">Read more </a>
                    </div>

                    <div className='eth-card1'>'
                        <img className='eth-image1' src={Image19} alt="" />
                        <span className='eth-title1'>Compliance & risk management</span>
                        <p className='eth-description1'>Effective compliance management, responsible risk management and ethical behavior are the cornerstones of our business activity. They help strengthen our stakeholders’ trust, our company’s reputation and our sustainable commercial success.</p>
                        <a className='eth-link1' href="">Read more </a>
                    </div>

                    <div className='eth-card1'>'
                        <img className='eth-image1' src={Image94} alt="" />
                        <span className='eth-title1'>Documents & policies</span>
                        <p className='eth-description1'>Statements of principle, voluntary commitments and the Code of Conduct are the backbone of Audi’s sustainability management. They ensure that we act lawfully and ethically, while at the same time making our business activities transparent. You can find the most important documents here.</p>
                        <a className='eth-link1' href="">Read more </a>
                    </div>
                </div>
            </div>

            <div className='eth-section2'>
                <img className='eth-image2' src={Image95} alt="" />
                <span className='eth-title2'>Business & human rights</span>
                <p className='eth-description2'>The Audi Group considers respect for human rights to be one of its key responsibilities. As a provider of premium vehicles and mobility services, the Audi brand group employs around 88,000 people in its own companies worldwide and places orders with around 12,400 suppliers and business partners in 62 countries. Our value chain is therefore multi-layered and in many places interwoven with the processes of the Volkswagen Group. In this complex environment, it is our responsibility to create economic value and employment while at the same time contributing to a sustainable future.</p>
                <a className='eth-link2' href="">Read more</a>
            </div>
        </div>
    )
}

export default EthicalLeadership