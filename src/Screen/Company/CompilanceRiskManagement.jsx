import React from 'react'
import Image19 from '../../assets/image19.png'
import Image23 from '../../assets/image23.png'
import Image24 from '../../assets/image24.png'
import Image25 from '../../assets/image25.png'
import { RightOutlined } from '@ant-design/icons'

// styling left
function CompilanceRiskManagement() {
  return (
    <div>
      <div>
        <img className='risk-frImage' src={Image19} alt="" />
      </div>

      <div className='risk-frContent'>
        <h1 className='risk-frHeading'>Compliance & Risk Management</h1>
        <p className='risk-frDescription'>Our entrepreneurial actions are based on a forward looking Risk Management, group-wide uniform frameworks, which are based on a Compliance Management system, as well as a Board of Management and employees who act with integrity. This is how we secure our company’s good reputation, our customers’ and business partners’ trust and the wellbeing of our employees.</p>
      </div>

      <div className='risk-section'>
        <h2 className='risk-heading-content'>
          <span className='risk-heading'>You might also be interested</span>
        </h2>

        <div className='risk-grid'>
          <div className='risk-card'>
            <img style={{width: '400px'}} className='risk-image image-fix' src={Image23} alt="" />
            <h3 className='risk-title'>Compliance & Integrity</h3>
            <p className='risk-description'>The elements of compliance and integrity are firmly anchored in our strategy and culture. They are the basis of our actions at Audi. Our aim is to make decisions in accordance with the relevant laws, internal regulations, and values.</p>
            <a href="#" className='risk-more-btn'>Read more <RightOutlined className='anticon' /></a>
          </div>
          <div className='risk-card'>
            <img style={{width: '400px'}} className='risk-image' src={Image24} alt="" />
            <h3 className='risk-title'>Risk Management</h3>
            <p className='risk-description'>Our Risk Management System (RMS) / Internal Control System (ICS) is based on the internationally recognized COSO framework for enterprise risk management.</p>
            <a href="#" className='risk-more-btn'>Read more <RightOutlined className='anticon' /></a>
          </div>
          <div className='risk-card'>
            <img style={{width: '400px'}} className='risk-image' src={Image25} alt="" />
            <h3 className='risk-title'>Whistleblower system</h3>
            <p className='risk-description'>Protection, fairness and trust for whistleblowers, parties implicated and involved – principles of the Audi Investigation Office and its whistleblowing system</p>
            <a href="#" className='risk-more-btn'>Read more <RightOutlined className='anticon' /></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CompilanceRiskManagement