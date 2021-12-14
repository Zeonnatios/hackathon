import { Formik } from 'formik';
import { Button, Col, Form, Select, Row } from 'antd';
import React from 'react';
import { useDispatch } from 'react-redux';
import { actions } from '../../redux/modules/trails';

// import { Container } from './styles';

function TrailFilter({ technologies, isLoading }) {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{ technology: '' }}
      onSubmit={(values) =>
        dispatch(actions.getTrailsByTechnology(values.technology))
      }
      onReset={() => dispatch(actions.getAllTrails())}
    >
      {({ values, setFieldValue, handleReset, handleSubmit }) => (
        <Form onFinish={handleSubmit} layout="vertical">
          <Row gutter={16}>
            <Col span={24} lg={8}>
              <Form.Item label="Tecnologia">
                <Select
                  name="technology"
                  value={values.technology}
                  onChange={(e) => setFieldValue('technology', e)}
                  loading={isLoading}
                  disabled={isLoading}
                  size="large"
                >
                  {technologies.map((technology) => (
                    <Select.Option value={technology._id}>
                      {technology.name}
                    </Select.Option>
                  ))}
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col sm={24} lg={8}>
              <Button
                type="primary"
                htmlType="submit"
                style={{ marginRight: '10px', marginBottom: '5px' }}
              >
                Filtrar
              </Button>
              <Button type="default" onClick={() => handleReset()}>
                Remover Fitros
              </Button>
            </Col>
          </Row>
        </Form>
      )}
    </Formik>
  );
}

export default TrailFilter;
