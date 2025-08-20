import React from 'react'
import Image19 from '../../assets/image19.png'
import Image23 from '../../assets/image23.png'
import Image24 from '../../assets/image24.png'
import Image25 from '../../assets/image25.png'

// styling left
function CompilanceRiskManagement() {
  return (
    <div>
      <div>
        <img src={Image19} alt="" />
      </div>

      <div>
        <h1>Compliance & Risk Management</h1>
        <p>Our entrepreneurial actions are based on a forward looking Risk Management, group-wide uniform frameworks, which are based on a Compliance Management system, as well as a Board of Management and employees who act with integrity. This is how we secure our company’s good reputation, our customers’ and business partners’ trust and the wellbeing of our employees.</p>
      </div>

      <div className='risk-section'>
        <h3 className='risk-heading'>You might also be interested</h3>

        <div className='risk-grid'>
          <div className='risk-card'>
            <img className='risk-image' src={Image23} alt="" />
            <span className='risk-title'>Compliance & Integrity</span>
            <p className='risk-description'>The elements of compliance and integrity are firmly anchored in our strategy and culture. They are the basis of our actions at Audi. Our aim is to make decisions in accordance with the relevant laws, internal regulations, and values.</p>
            <a href="#" className='risk-more-btn'>Read more</a>
          </div>
          <div className='risk-card'>
            <img className='risk-image' src={Image24} alt="" />
            <span className='risk-title'>Risk Management</span>
            <p className='risk-description'>Our Risk Management System (RMS) / Internal Control System (ICS) is based on the internationally recognized COSO framework for enterprise risk management.</p>
            <a href="#" className='risk-more-btn'>Read more</a>
          </div>
          <div className='risk-card'>
            <img className='risk-image' src={Image25} alt="" />
            <span className='risk-title'>Whistleblower system</span>
            <p className='risk-description'>Protection, fairness and trust for whistleblowers, parties implicated and involved – principles of the Audi Investigation Office and its whistleblowing system</p>
            <a href="#" className='risk-more-btn'>Read more</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CompilanceRiskManagement