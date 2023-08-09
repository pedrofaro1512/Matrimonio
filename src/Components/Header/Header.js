import React, { useState } from "react";
import "./Header.css";
import { Menu } from "antd";
import { Link } from "react-scroll";

const items = [
  {
    label: "Nosotros",
    key: "nosotros",
  },
  {
    label: "Cúando y dónde",
    key: "cronometro",
  },
  {
    label: "Nuestros momentos",
    key: "momentos",
  },
  {
    label: "Confirmación",
    key: "confirmacion",
  },
];

const Header = () => {
  const [current, setCurrent] = useState("null");
  const onClick = (event) => {
    setCurrent(event.key);
  };

  return (
    <div className="menu-container">
      <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal">
        {items.map((item) => (
          <Menu.Item key={item.key}>
            <Link
              to={item.key}
              spy={true}
              smooth={true}
              duration={1500}
              offset={-10}
            >
              {item.label}
            </Link>
          </Menu.Item>
        ))}
      </Menu>
    </div>
  );
};

export default Header;
