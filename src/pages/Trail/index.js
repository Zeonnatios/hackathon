import React, { useEffect } from 'react';
import { Collapse, Empty } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { Container } from '../Principal/styles';
import { actions } from '../../redux/modules/trails';
import { Title } from '../Principal/styles';
import { Container as StepContainer} from '../MyTrails/styles';

import {
  TrailHeader,
  Description,
  Technologies,
  TechnologiesTags,
} from './styles';
import StepCard from '../../components/StepCard';

function Trail() {
  const params = useParams();
  const dispatch = useDispatch();
  const trails = useSelector((state) => state.trails);
  useEffect(() => {
    dispatch(actions.getTrailById(params.id));
  }, []);
  return (
    <Container>
      <TrailHeader>
        <Title>{trails?.currentTrail?.title}</Title>
        <Description>{trails?.currentTrail?.description}</Description>
        <Technologies>
          {trails?.currentTrail?.technologies?.map((technolgy) => (
            <TechnologiesTags color="geekblue">
              {technolgy.tech}
            </TechnologiesTags>
          ))}
        </Technologies>
      </TrailHeader>

      <Collapse defaultActiveKey={['1']} style={{ marginBottom: '10px' }}>
        <Collapse.Panel header="Steps" key="1">
          <StepContainer>
            {trails?.currentTrail?.steps?.length > 0 ? (
              trails?.currentTrail?.steps?.map((step, index) => {
                return (
                  <StepCard
                    key={index}
                    _id={step._id}
                    title={step.title}
                    loading={trails.isLoading}
                    description={step.description}
                    referencia={step.referencia}
                    avaliation={step.avaliation}
                  />
                );
              })
            ) : (
              <Empty />
            )}
          </StepContainer>
        </Collapse.Panel>
      </Collapse>
    </Container>
  );
}

export default Trail;
