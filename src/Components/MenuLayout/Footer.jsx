import React from 'react';
import { Layout, Row, Col, Typography, Space, Divider, Button, Dropdown } from 'antd';
import { FacebookFilled, InstagramFilled, LinkedinFilled, TwitterOutlined, UpOutlined, GlobalOutlined, DownOutlined } from '@ant-design/icons';

const { Footer } = Layout;
const { Link, Text } = Typography;

const goUp = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

const items = [
  { key: 1, label: <a href=''>English</a> },
  { key: 2, label: <a href=''>Deustch</a> }
]

const FooterLinks = [
  {
    title: 'Topics',
    links: [<a style={{ textDecoration: 'none', color: '#cccccc' }} href="">Company</a>, <a style={{ textDecoration: 'none', color: '#cccccc' }} href="">Innovation</a>, <a style={{ textDecoration: 'none', color: '#cccccc' }} href="">Sustainability</a>, <a style={{ textDecoration: 'none', color: '#cccccc' }} href=''>Careers</a>, <a style={{ textDecoration: 'none', color: '#cccccc' }} href="">Audi in sport</a>],
  },
  {
    title: 'AUDI AG',
    links: [<a style={{ textDecoration: 'none', color: '#cccccc' }} href="">Audi Report 2024</a>, <a style={{ textDecoration: 'none', color: '#cccccc' }} href="">Documents & Policies</a>, <a style={{ textDecoration: 'none', color: '#cccccc' }} href="">Financial Calendar</a>, <a style={{ textDecoration: 'none', color: '#cccccc' }} href="">Management</a>, <a style={{ textDecoration: 'none', color: '#cccccc' }} href="">Locations</a>],
  },
  {
    title: 'Services',
    links: [<a style={{ textDecoration: 'none', color: '#cccccc' }} href="">myAudi</a>, <a style={{ textDecoration: 'none', color: '#cccccc' }} href="">Press</a>, <a style={{ textDecoration: 'none', color: '#cccccc' }} href="">Contact</a>, <a style={{ textDecoration: 'none', color: '#cccccc' }} href="">Job Portal</a>],
  },
];

const AppFooter = () => {
  return (
    <Footer style={{ backgroundColor: '#000000', color: 'white', padding: '48px 0', marginTop: '15em' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>

        <Row gutter={[16, 48]}>
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

          <Col xs={24} sm={12} md={6} lg={12} style={{ textAlign: 'right' }}>
            <Link
              className='goUp'
              onClick={goUp()}
              style={{
                textDecoration: 'none',
                color: '#ccc',
                fontSize: 14
              }}
              href=""
            >
              back to top <UpOutlined style={{ fontSize: 10, marginLeft: 4 }} />
            </Link>
          </Col>
        </Row>

        <Row justify="end" style={{ marginTop: 24, marginBottom: 16 }}>
          <Space size="large" className="social-icons">
            <Button type="text" href="#" icon={<LinkedinFilled style={{ color: '#ccc', fontSize: 16 }} />} />
            <Button type="text" href="#" icon={<InstagramFilled style={{ color: '#ccc', fontSize: 16 }} />} />
            <Button type="text" href="#" icon={<FacebookFilled style={{ color: '#ccc', fontSize: 16 }} />} />
            <Button type="text" href="#" icon={<TwitterOutlined style={{ color: '#ccc', fontSize: 16 }} />} />
          </Space>
        </Row>

        <Divider style={{ borderColor: '#444', margin: '0 0 24px 0' }} />

        <Row justify="space-between" align="middle" gutter={[16, 16]}>

          <Col xs={24} lg={12}>
            <Space size="large" wrap>
              <Text style={{ color: '#888', fontSize: 12 }}>
                © {new Date().getFullYear()} AUDI AG. All rights reserved.
              </Text>

              <Link href="#" style={{ color: '#888', fontSize: 12 }}>Legal notice</Link>
              <Link href="#" style={{ color: '#888', fontSize: 12 }}>Legal</Link>
              <Link href="#" style={{ color: '#888', fontSize: 12 }}>Whistleblower System</Link>
              <Link href="#" style={{ color: '#888', fontSize: 12 }}>Privacy Policy</Link>
              <Link href="#" style={{ color: '#888', fontSize: 12 }}>Cookie Policy</Link>
              <Link href="#" style={{ color: '#888', fontSize: 12 }}>Cookie Consent Options</Link>
            </Space>
          </Col>

          <Col xs={24} lg={12} style={{ textAlign: 'right' }}>
            <Dropdown menu={{ items }} trigger={['click']}>
              <a style={{ color: 'white', textDecoration: 'none' }} onClick={e => e.preventDefault(key)}>
                <Space>
                  <GlobalOutlined style={{ fontSize: '16px' }} />
                  English
                  <DownOutlined />
                </Space>
              </a>
            </Dropdown>
          </Col>
        </Row>

        <Row style={{ marginTop: 24 }}>
          <Col>
            <Text style={{ color: '#888', fontSize: 10 }}>
              Notice: All consumption and emission values are based on the characteristics of the German market.
            </Text>
          </Col>
        </Row>

      </div>
    </Footer>
  );
};

export default AppFooter;