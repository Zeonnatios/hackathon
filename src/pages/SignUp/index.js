import React, { useEffect } from 'react';
import * as Yup from 'yup';
import { Layout, Form, Input, Button } from 'antd';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { Formik } from 'formik';
import { actions as authActions } from '../../redux/modules/auth';
import { Container, FormContainer } from '../Login/styles';

function Login() {
  const { Content } = Layout;
  const auth = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const EIGHT = 8;

  useEffect(() => {
    if (auth.token) {
      navigate('/main');
    }
    // eslint-disable-next-line
  }, [auth]);

  const validationSchema = () => (
    Yup.object().shape({
      name: Yup.string().required('Campo obrigatório'),
      email: Yup.string()
        .required('Por favor preencha seu e-mail')
        .email('O e-mail informado é inválido'),
      password: Yup.string().required('Por favor digite sua senha')
        .min(EIGHT, 'A senha precisa ter 8 caracteres'),
      rePassword: Yup.string().required('Digite novamente a senha')
        .oneOf([Yup.ref('password'), null], 'Senhas não coincidem'),
    })
  );

  const submitValues = ({ name, email, password }) => {
    dispatch(authActions.sigin(name, email, password));
  };

  const initialValues = {
    name: '',
    email: '',
    password: '',
    rePassword: '',
  };

  return (
    <Layout>
      <Content>
        <Container>
          <FormContainer>
            <Formik
              validationSchema={ validationSchema }
              initialValues={ initialValues }
              onSubmit={ (values) => submitValues(values) }
            >
              {/* eslint-disable-next-line */ }
              {({ values, errors, touched, handleChange, handleSubmit, isValid, dirty }) => (
                <Form onFinish={ handleSubmit }>
                  <Form.Item
                    validateStatus={ errors.name && touched.name ? 'error' : '' }
                    help={ errors.name }
                    label="Como você prefere ser chamado?"
                    labelCol={ { span: 24 } }
                  >
                    <Input
                      name="name"
                      value={ values.name }
                      onChange={ handleChange }
                      size="large"
                    />
                  </Form.Item>
                  <Form.Item
                    validateStatus={ errors.email && touched.email ? 'error' : '' }
                    help={ errors.email }
                    label="Email"
                    labelCol={ { span: 24 } }
                  >
                    <Input
                      name="email"
                      value={ values.email }
                      onChange={ handleChange }
                      size="large"
                    />
                  </Form.Item>
                  <Form.Item
                    validateStatus={ errors.password
                      && touched.password ? 'error' : '' }
                    help={ errors.password }
                    label="Senha"
                    labelCol={ { span: 24 } }
                  >
                    <Input.Password
                      name="password"
                      value={ values.password }
                      onChange={ handleChange }
                      size="large"
                    />
                  </Form.Item>
                  <Form.Item
                    validateStatus={ errors.rePassword
                      && touched.rePassword ? 'error' : '' }
                    help={ errors.rePassword }
                    label="Digite a senha novamente"
                    labelCol={ { span: 24 } }
                  >
                    <Input.Password
                      name="rePassword"
                      value={ values.rePassword }
                      onChange={ handleChange }
                      size="large"
                    />
                  </Form.Item>
                  <Button
                    type="primary"
                    size="large"
                    htmlType="submit"
                    block
                    style={ { marginBottom: '15px' } }
                    disabled={ !(isValid && dirty) }
                  >
                    Cadastre-se
                  </Button>
                  <Button
                    type="ghost"
                    size="large"
                    block
                    onClick={ () => navigate('/login') }
                  >
                    Já possuo uma conta
                  </Button>
                </Form>
              )}
            </Formik>
          </FormContainer>
        </Container>
      </Content>
    </Layout>
  );
}

export default Login;
