import React from 'react';
import { Layout, Menu } from 'antd';
import { useNavigate } from 'react-router';
import { Logo } from './styles';
import { useDispatch } from 'react-redux';
import { actions } from '../../redux/modules/auth';

function MainHeader() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const signout = () => {
    dispatch(actions.logout());
    navigate('/login');
  };
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
        <Menu.Item key="4" onClick={ () => signout() }>
          Sair
        </Menu.Item>
      </Menu>
    </Layout.Header>
  );
}

export default MainHeader;
