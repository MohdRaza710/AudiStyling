import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout, Menu, Row, Col } from 'antd';
import Logo from '../../assets/Logo.png'

const { Header } = Layout;

const menuItems = [
  {
    key: '1', label: `Company`,
    children: [
      { key: '1-1', label: <a href="/companyoverview">Overview</a> },
      { key: '1-2', label: <a href="/strategy">Strategy</a> },
      { key: '1-3', label: <a href="/profile">Profile</a> },
      { key: '1-4', label: <a href="/investorrelation">Invester Relations</a> },
      { key: '1-5', label: <a href="/compilanceriskmanagement">Compliance & risk management</a> },
      { key: '1-6', label: <a href="/pressmedia">Press & Media</a> }
    ]
  },

  {
    key: '2', label: `Innovation`,
    children: [
      { key: '2-1', label: <a href="/innovationoverview">Overview</a> },
      { key: '2-2', label: <a href="/productinnovation">Product Innovation</a> },
      { key: '2-3', label: <a href="/futuretechnologies">Future technologies</a> },
      { key: '2-4', label: <a href="/design">Design</a> },
      { key: '2-5', label: <a href="/digitalization">Digitalization</a> },
      { key: '2-6', label: <a href="/academiccooperation">Academic Cooperation</a> }
    ]
  },

  {
    key: '3', label: `Sustainability`,
    children: [
      { key: '3-1', label: <a href="/sustainabilityoverview">Overview</a> },
      { key: '3-2', label: <a href="/sustainabilityconcept">Sustainability Concept</a> },
      { key: '3-3', label: <a href="/environmentandresources">Environment & Resources</a> },
      { key: '3-4', label: <a href="/peopleandsociety">People & Society</a> },
      { key: '3-5', label: <a href="/ethicalleadership">Ethical leadership</a> }
    ]
  },

  {
    key: '4', label: `Careers`,
    children: [
      { key: '4-1', label: <a href="/careersoverview">Overview</a> },
      { key: '4-2', label: <a href="/jobportal">Job portal</a> },
      { key: '4-3', label: <a href="/workingataudi">Workng at Audi</a> },
      { key: '4-4', label: <a href="/schoolstudents">School Students</a> },
      { key: '4-5', label: <a href="/students">Students</a> },
      { key: '4-6', label: <a href="/graduates">Graduates</a> },
      { key: '4-7', label: <a href="/professionals">Professionals</a> },
      { key: '4-8', label: <a href="/karriereimautohaus">Karriere im Autohaus</a> },
    ]
  },

  {
    key: '5', label: `Audi in sport`,
    children: [
      { key: '5-1', label: <a href="/audisportoverview">Overview</a> },
      { key: '5-2', label: <a href="/audimotorsport">Audi in motorsport</a> },
      { key: '5-3', label: <a href="/audifootball">Audi in football</a> },
      { key: '5-4', label: <a href="/audiwintersport">Audi in winter sports</a> },
    ]
  }
];

const luxuryHeader = () => {
  return (
    <Header className="luxury-header-layout">
      <Row justify="space-between" align="middle" className="header-content-row">

        <Col className="header-logo">
          <a href="/">
            <img
              src={Logo}
              alt="Your Brand Logo"
              className="brand-logo-image"
            />
          </a>
        </Col>

        <Col flex="auto">
          <Menu
            triggerSubMenuAction='click'
            theme="light"
            mode="horizontal"
            items={menuItems}
            className="primary-menu"
          />
        </Col>
      </Row>
    </Header>
  );
};

export default luxuryHeader;