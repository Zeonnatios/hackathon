import { Layout } from 'antd';
import styled from 'styled-components';

export const Container = styled.div`
  text-align: center;
`;

export const Content = styled(Layout.Content)`
  min-height: 80vh;
  padding: 25px;
`;

export const Footer = styled(Layout.Footer)`
  background-color: #001529;
  text-align: center;
`;

export const FooterText = styled.p`
  color: #f1f3f9;
  font-size: 16px;
`;
