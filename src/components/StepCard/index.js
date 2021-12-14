import { Skeleton } from 'antd';
import React from 'react';
import { CardBody, CardData, CardDescription, CardFooter, Container, Description, Likes, UserNamer } from '../TrailCard/styles';

// import { Container } from './styles';

function StepCard({ title, description, avaliation, referencia, loading}) {
  const renderDescription = () => (
    <CardBody>
      <CardDescription>
        <Description>{description}</Description>
      </CardDescription>
      <CardFooter>
        <UserNamer>Referencia: {referencia}</UserNamer>
        <Likes>Avaliação: {avaliation}</Likes>
      </CardFooter>
    </CardBody>
  );

  return (
    <Container>
      <Skeleton loading={loading} active >
        <CardData
          title={title}
          description={renderDescription()}
        />
      </Skeleton>
    </Container>
  );
}

export default StepCard;