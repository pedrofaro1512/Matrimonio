import React, {useState} from 'react';
import "./Header.css";
import { Menu } from 'antd';
const items = [
  {
    label: 'Nosotros',
    key: 'mail',
  },
  {
    label: 'Cúando y dónde',
    key: 'app',
  },
  {
    label: 'Nuestros momentos',
    key: 'SubMenu',
  },
  {
    label: 'Confirmación',
    key: 'alipay',
  },
];

const Header = () => {
  const [current, setCurrent] = useState('mail');
  const onClick = (e) => {
    setCurrent(e.key);
  };
  return (
    <div className='menu-container'>
      <Menu
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
      >
      {items.map((item) => (
          <Menu.Item key={item.key}>
            {item.label}
          </Menu.Item>
        ))}
        </Menu>
    </div>
  )
}

export default Header;