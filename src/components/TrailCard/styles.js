import { Card } from 'antd';
import styled from 'styled-components';

export const Container = styled(Card)`
  min-height: 180px;
  min-width: 350px;
  max-width: 350px;
  margin-bottom: 25px;
`;

export const CardData = styled(Card.Meta)``;

export const CardBody = styled.div``;
export const CardDescription = styled.div`
  display: inline-block;
  max-height: 80px;
`;

export const Description = styled.p`
  width: 100%;
`;

export const CardFooter = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  border-top: 1px solid #d9d9d9;
  padding: 3px;
`;

export const UserNamer = styled.span`
  display: inline-block;
  margin-right: 10px;
`;

export const Likes = styled.p``;
