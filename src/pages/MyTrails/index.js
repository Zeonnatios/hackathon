import { Button, Col, Collapse, Empty, Row } from 'antd';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import AddTrailForm from '../../components/AddTrailForm';
import TrailCard from '../../components/TrailCard';
import { actions } from '../../redux/modules/trails';
import icons from '../../utils/icons';

import { Container } from './styles';

function MyTrails() {
  const dispatch = useDispatch();

  const trails = useSelector((state) => state.trails);
  const auth = useSelector((state) => state.auth);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    console.log(auth.user._id)
    dispatch(actions.getMyTrails(auth.user._id));
  }, []);
  return (
    <>
      <Row justify="center">
        <Col span={10}>
          <Button
            type="primary"
            block
            style={{ marginBottom: 15 }}
            onClick={() => setIsVisible(true)}
          >
            Criar uma trilha
          </Button>
        </Col>
      </Row>
      <Collapse defaultActiveKey={['1']} style={{ marginBottom: '10px' }}>
        <Collapse.Panel header="Trilhas criadas por mim" key="1">
          <Container>
            {trails.myTrails.length > 0 ? (
              trails.myTrails.map((trail) => {
                const image = icons.find(
                  ({ name }) => name === trail?.technologies[0]?.tech,
                );
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
            ) : (
              <Empty />
            )}
          </Container>
        </Collapse.Panel>

        <Collapse.Panel header="Trilhas que sigo" key="2">
          <Container>
            {trails.followedTrails.length > 0 ? (
              trails.followedTrails.map((trail) => {
                const image = icons.find(
                  ({ name }) => name === trail?.technologies[0]?.tech,
                );
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
            ) : (
              <Empty />
            )}
          </Container>
        </Collapse.Panel>
      </Collapse>
      <AddTrailForm isVisible={isVisible} setIsVisible={setIsVisible} />
    </>
  );
}

export default MyTrails;
