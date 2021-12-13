import React from 'react';
import { Layout } from 'antd';
import PropTypes from 'prop-types';
import MainHeader from '../MainHeader';

import { Content, Footer, FooterText } from './styles';

function MainLayout({ children }) {
  return (
    <Layout>
      <MainHeader />
      <Content>
        {children}
      </Content>
      <Footer>
        <FooterText>
          Feito com React, Redux, Styled-Components e 💗
        </FooterText>
      </Footer>
    </Layout>
  );
}

MainLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
export default MainLayout;
