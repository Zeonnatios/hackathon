import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Col, Input, Modal, Row, Form, Select } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../../redux/modules/trails';

// import { Container } from './styles';

function AddTrailForm({ isVisible, setIsVisible }) {
  const dispatch = useDispatch();
  const trails = useSelector((state) => state.trails);
  const [form] = Form.useForm();

  const validationSchema = () =>
    Yup.object().shape({
      title: Yup.string()
        .required('Por favor informe um titulo')
        .min(8, 'O titulo precisa ser maior'),
      description: Yup.string()
        .required('Informe uma descrição')
        .min(10, 'Sua descrição precisa ser maior'),
      technology: Yup.string().required('Escolha uma tecnologia'),
    });
  
  return (
    <Modal
      visible={isVisible}
      onCancel={() => setIsVisible(!isVisible)}
      title="Criação de trilha"
      okText="Enviar"
      cancelText="Cancelar"
      onOk={() => form.submit()}
    >
      <Formik
        validationSchema={validationSchema}
        initialValues={{ title: '', description: '', technology: '' }}
        onSubmit={(values) => {
          const technologies = trails.technologies.find(
            (tech) => tech._id === values.technology,
          );
          dispatch(
            actions.createTrail(values.title, values.description, [
              technologies,
            ]),
          );
        }}
      >
        {({ values, handleSubmit, handleChange, setFieldValue }) => (
          <Form onFinish={handleSubmit} layout="vertical" form={form}>
            <Row>
              <Col span={24}>
                <Form.Item label="Titulo">
                  <Input
                    name="title"
                    value={values.title}
                    onChange={handleChange}
                    size="large"
                  />
                </Form.Item>
              </Col>{' '}
              <Col span={24}>
                <Form.Item label="Descrição">
                  <Input.TextArea
                    name="description"
                    value={values.description}
                    onChange={handleChange}
                    size="large"
                  />
                </Form.Item>
              </Col>
              <Col span={24}>
                <Form.Item label="Tecnologia Principal">
                  <Select
                    name="technology"
                    value={values.technology}
                    onChange={(e) => setFieldValue('technology', e)}
                    size="large"
                  >
                    {trails.technologies.map((technology) => (
                      <Select.Option value={technology._id}>
                        {technology.name}
                      </Select.Option>
                    ))}
                  </Select>
                </Form.Item>
              </Col>
            </Row>
          </Form>
        )}
      </Formik>
    </Modal>
  );
}

export default AddTrailForm;
