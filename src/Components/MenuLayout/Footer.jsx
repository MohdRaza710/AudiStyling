import React from 'react';
import { Layout, Row, Col, Typography, Space, Divider, Input, Button } from 'antd';
import { FacebookFilled, InstagramFilled, LinkedinFilled, TwitterOutlined } from '@ant-design/icons';

const { Footer } = Layout;
const { Link, Text } = Typography;

const FooterLinks = [
  {
    title: 'Models',
    links: [<a style={{textDecoration: 'none', color: '#cccccc'}} href="">Company</a>, <a style={{textDecoration: 'none', color: '#cccccc'}} href="">Innovation</a>, <a style={{textDecoration: 'none', color: '#cccccc'}} href="">Sustainability</a>, <a style={{textDecoration: 'none', color: '#cccccc'}} href=''>Careers</a>, <a style={{textDecoration: 'none', color: '#cccccc'}} href="">Audi in sport</a>],
  },
  {
    title: 'AUDI AG',
    links: [<a style={{textDecoration: 'none', color: '#cccccc'}} href="">Audi Report 2024</a>, <a style={{textDecoration: 'none', color: '#cccccc'}} href="">Documents & Policies</a>, <a style={{textDecoration: 'none', color: '#cccccc'}} href="">Financial Calendar</a>, <a style={{textDecoration: 'none', color: '#cccccc'}} href="">Management</a>, <a style={{textDecoration: 'none', color: '#cccccc'}} href="">Locations</a>],
  },
  {
    title: 'Services',
    links: [<a style={{textDecoration: 'none', color: '#cccccc'}} href="">myAudi</a>, <a style={{textDecoration: 'none', color: '#cccccc'}} href="">Press</a>, <a style={{textDecoration: 'none', color: '#cccccc'}} href="">Contact</a>, <a style={{textDecoration: 'none', color: '#cccccc'}} href="">Job Portal</a>],
  },
];

const AppFooter = () => {
  return (
    // The main Footer container from Ant Design Layout
    <Footer style={{ backgroundColor: '#212121', color: 'white', padding: '48px 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>

        {/* --- Top Section: Links & Newsletter/Social --- */}
        <Row gutter={[16, 48]}>
          
          {/* Link Columns */}
          {FooterLinks.map((section) => (
            <Col xs={12} sm={6} md={6} lg={4} key={section.title}>
              <Text style={{ color: 'white', fontWeight: 'bold', display: 'block', marginBottom: 16 }}>
                {section.title}
              </Text>
              <Space direction="vertical" size={8}>
                {section.links.map((text) => (
                  <Link href="#" key={text} style={{ color: '#ccc', fontSize: 14 }}>
                    {text}
                  </Link>
                ))}
              </Space>
            </Col>
          ))}

          {/* Newsletter/Social Column - This typically takes up more space */}
          <Col xs={24} sm={12} md={12} lg={8}>
            <Text style={{ color: 'white', fontWeight: 'bold', display: 'block', marginBottom: 16 }}>
              Stay Updated
            </Text>
            
            {/* Newsletter Input/Button */}
            <Input
              placeholder="Enter your email address"
              // The style here is to mock the dark/sleek Audi aesthetic
              style={{ background: 'transparent', color: 'white', borderColor: '#444', marginBottom: 24, padding: '10px 12px' }}
              suffix={
                <Button 
                    type="primary" 
                    // Again, using inline styles for a quick dark theme look
                    style={{ background: '#DD0000', borderColor: '#DD0000', color: 'white' }}
                >
                    Subscribe
                </Button>
              }
            />

            <Text style={{ color: 'white', fontWeight: 'bold', display: 'block', marginBottom: 16 }}>
              Connect with us
            </Text>
            
            {/* Social Media Icons */}
            <Space size="middle">
              <Button type="text" href="#" icon={<FacebookFilled style={{ color: '#ccc', fontSize: 20 }} />} />
              <Button type="text" href="#" icon={<TwitterOutlined style={{ color: '#ccc', fontSize: 20 }} />} />
              <Button type="text" href="#" icon={<InstagramFilled style={{ color: '#ccc', fontSize: 20 }} />} />
              <Button type="text" href="#" icon={<LinkedinFilled style={{ color: '#ccc', fontSize: 20 }} />} />
            </Space>
          </Col>
        </Row>
        
        {/* Divider to separate main links from legal section */}
        <Divider style={{ borderColor: '#444', margin: '48px 0 24px 0' }} />

        {/* --- Bottom Section: Legal & Copyright --- */}
        <Row justify="space-between" align="middle">
          
          {/* Logo and Copyright */}
          <Col xs={24} md={12}>
            {/* Placeholder for the Audi Logo/SVG */}
            <div style={{ height: 30, width: 80, backgroundColor: '#DD0000', marginBottom: 10 }}>
                {/* Your actual logo/SVG goes here */}
            </div>
            <Text style={{ color: '#888', fontSize: 12 }}>
              © {new Date().getFullYear()} Generic Automotive Company AG. All rights reserved.
            </Text>
          </Col>
          
          {/* Legal Links */}
          <Col xs={24} md={12}>
            <Space 
                size="large" 
                // Adjust alignment for mobile/desktop
                style={{ float: 'right', marginTop: '10px' }}
            >
              <Link href="#" style={{ color: '#888', fontSize: 12 }}>
                Legal Notice
              </Link>
              <Link href="#" style={{ color: '#888', fontSize: 12 }}>
                Privacy Policy
              </Link>
              <Link href="#" style={{ color: '#888', fontSize: 12 }}>
                Cookie Policy
              </Link>
              <Link href="#" style={{ color: '#888', fontSize: 12 }}>
                Sitemap
              </Link>
            </Space>
          </Col>
        </Row>
      </div>
    </Footer>
  );
};

export default AppFooter;