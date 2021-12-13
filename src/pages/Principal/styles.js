import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 10px;
  border-radius: 9px;
  min-height: 350px;
  background-color: white;
  border: 1px solid #D9D9D9;
`;

export const Title = styled.h1`
  font-weight: bold;
  text-align: center;
`;

export const TrailsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-around;
`;
