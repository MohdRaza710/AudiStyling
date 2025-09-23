import { useState } from 'react'
import { Menu, Button } from 'antd'
import { MenuOutlined, CloseOutlined } from '@ant-design/icons';

function Header() {

  const items = [
    {
      key: '1',
      label: `Company ${<i class="fa-solid fa-angle-right"></i>}`,
      children: [
        {
          key: '1-1',
          label: `Overview`
        },
        {
          key: '1-2',
          label: `Strategy`
        },
        {
          key: '1-3',
          label: `Profile`
        },
        {
          key: '1-4',
          label: `Invester Relations`
        },
        {
          key: '1-5',
          label: `Compliance & isk management`
        },
        {
          key: '1-6',
          label: `Press & Media`
        },
      ]
    },

    {
      key: '2',
      label: `Innovation ${<i class="fa-solid fa-angle-right"></i>}`,
      children: [
        {
          key: '2-1',
          label: `Overview`
        },
        {
          key: '2-2',
          label: `Product Innovation`
        },
        {
          key: '2-3',
          label: `Future technologies`
        },
        {
          key: '2-4',
          label: `Design`
        },
        {
          key: '2-5',
          label: `Digitalization`
        },
        {
          key: '2-6',
          label: `Academic Cooperation`
        }
      ]
    },

    {
      key: '3',
      label: `Sustainability ${<i class="fa-solid fa-angle-right"></i>}`,
      children: [
        {
          key: '3-1',
          label: `Overview`
        },
        {
          key: '3-2',
          label: `Sustainability Concept`
        },
        {
          key: '3-3',
          label: `Environment & Resources`
        },
        {
          key: '3-4',
          label: `People & Society`
        },
        {
          key: '3-5',
          label: `Ethical leadership`
        }
      ]
    },

    {
      key: '4',
      label: `Careers ${<i class="fa-solid fa-angle-right"></i>}`,
      children: [
        {
          key: '4-1',
          label: `Overview`
        },
        {
          key: '4-2',
          label: `Job portal`
        },
        {
          key: '4-3',
          label: `Workng at Audi`
        },
        {
          key: '4-4',
          label: `School students`
        },
        {
          key: '4-5',
          label: `Students`
        },
        {
          key: '4-6',
          label: `Graduates`
        },
        {
          key: '4-7',
          label: `Professionals`
        },
        {
          key: '4-8',
          label: `Karriere im Autohaus`
        },
      ]
    },

    {
      key: '5',
      label: `Audi in sport ${<i class="fa-solid fa-angle-right"></i>}`,
      children: [
        {
          key: '5-1',
          label: `Overview`
        },
        {
          key: '5-2',
          label: `Audi in motorsport`
        },
        {
          key: '5-3',
          label: `Audi in football`
        },
        {
          key: '5-4',
          label: `Audi in winter sports`
        },
      ]
    }
  ]
  const [collapsed, setCollapsed] = useState(true);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  return (
    <div style={{ width: 256 }}>
      <Button type="primary" onClick={toggleCollapsed} >
        {collapsed ? < MenuOutlined /> : <CloseOutlined />}
      </Button>
      <Menu
        theme="dark"
        inlineCollapsed={collapsed}
        items={items}
      />
    </div>
  );
}

export default Header