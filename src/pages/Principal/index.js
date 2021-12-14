import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Col, Collapse, Empty, Row } from 'antd';
import TrailFilter from '../../components/TrailFilter';
import { actions as trailsActions } from '../../redux/modules/trails';
import { Container, Title, TrailsContainer } from './styles';
import TrailCard from '../../components/TrailCard';
import Icons from '../../utils/icons';

// eslint-disable
function Principal() {
  const trails = useSelector((state) => state.trails);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(trailsActions.getAllTrails());
    dispatch(trailsActions.getAllTechnologies());
  }, [dispatch]);
  return (
    <>
      <Collapse defaultActiveKey={['1']} style={{ marginBottom: '10px' }}>
        <Collapse.Panel header="Filtro" key="1">
          <TrailFilter
            technologies={trails.technologies}
            isLoading={trails.isLoadingTechnologies}
          />
        </Collapse.Panel>
      </Collapse>
      <Container>
        <Row align="center">
          <Col span={24}>
            <Title>Trilhas</Title>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <TrailsContainer>
              {
                trails.allTrails.length > 0 ? 
                  trails.allTrails.map((trail) => {
                    const image = Icons.find(({ name }) => name === trail?.technologies[0]?.tech)
                    return (
                      <TrailCard
                        key={trail._id}
                        _id={trail._id}
                        title={trail.title}
                        loading={trails.isLoading}
                        description={trail.description}
                        userName={trail.userName}
                        likes={trail.likes}
                        icon={image?.icon || false}
                      />
                    );
                  })
                : (
                  <Empty />
                )
              }
            </TrailsContainer>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Principal;
