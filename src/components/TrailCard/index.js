import React from 'react';
import PropTypes from 'prop-types';
import { Skeleton } from 'antd';
import {
  CardData,
  Container,
  CardBody,
  Description,
  UserNamer,
  Likes,
  CardFooter,
  CardDescription,
} from './styles';
import { useNavigate } from 'react-router-dom'


function TrailCard({
  _id,
  title,
  description,
  userName,
  likes,
  loading,
  icon,
}) {
  const navigate = useNavigate();
  const renderDescription = () => (
    <CardBody>
      <CardDescription>
        <Description>{description}</Description>
      </CardDescription>
      <CardFooter>
        <UserNamer>Criador: {userName}</UserNamer>
        <Likes>Curtidas: {likes}</Likes>
      </CardFooter>
    </CardBody>
  );

  return (
    <Container onClick={() => navigate(`/trilhas/${_id}`)} hoverable>
      <Skeleton loading={loading} active avatar>
        <CardData
          title={title}
          description={renderDescription()}
          avatar={icon || false}
        />
      </Skeleton>
    </Container>
  );
}

TrailCard.propTypes = {
  _id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  likes: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  icon: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
    .isRequired,
};
export default TrailCard;
