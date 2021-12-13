import React from 'react';
import { Layout, Menu } from 'antd';
import { useNavigate } from 'react-router';
import { Logo } from './styles';

function MainHeader() {
  const navigate = useNavigate();
  return (
    <Layout.Header>
      <Logo />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={ ['1'] }>
        <Menu.Item key="1" onClick={ () => navigate('/') }>
          Home
        </Menu.Item>
        <Menu.Item key="2" onClick={ () => navigate('/trilhas') }>
          Minhas Trilhas
        </Menu.Item>
        <Menu.Item key="3" onClick={ () => navigate('/perfil') }>
          Perfil
        </Menu.Item>
      </Menu>
    </Layout.Header>
  );
}

export default MainHeader;
