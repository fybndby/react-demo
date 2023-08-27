import React from 'react';
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Menu } from 'antd';
import { Link } from 'react-router-dom'; // 导入Link组件
const menuItems = [
  { key: '1', icon: <UserOutlined />, label: 'nav 1', to: '/home' },
  { key: '2', icon: <VideoCameraOutlined />, label: 'nav 2', to: '/echarts' },
  { key: '3', icon: <UploadOutlined />, label: 'nav 3', to: '/todo-list' },
];

const Home: React.FC = () => {
  return (
    <Menu
      theme="dark"
      mode="inline"
      defaultSelectedKeys={['1']}
    >
      {menuItems.map(item => (
        <Menu.Item key={item.key} icon={item.icon}>
          <Link to={item.to}>{item.label}</Link>
        </Menu.Item>
      ))}
    </Menu>
  );
};

export default Home;
