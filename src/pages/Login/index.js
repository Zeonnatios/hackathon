import React, { useEffect } from 'react';
import * as Yup from 'yup';
import { Layout, Form, Input, Button } from 'antd';
import { useLocation, useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { Formik } from 'formik';
import { actions as authActions } from '../../redux/modules/auth';
import { Container, FormContainer } from './styles';

function Login() {
  const { Content } = Layout;
  const auth = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    const from = location.state?.from?.pathname || '/';
    if (auth.token) {
      navigate(from);
    }
    // eslint-disable-next-line
  }, [auth]);

  const validationSchema = () => (
    Yup.object().shape({
      email: Yup.string()
        .required('Por favor preencha seu e-mail')
        .email('O e-mail informado é inválido'),
      password: Yup.string().required('Por favor digite sua senha'),
    })
  );

  const submitValues = ({ email, password }) => {
    dispatch(authActions.login(email, password));
  };

  return (
    <Layout>
      <Content>
        <Container>
          <FormContainer>
            <Formik
              validationSchema={ validationSchema }
              initialValues={ { email: '', password: '' } }
              onSubmit={ (values) => submitValues(values) }
            >
              {({ values, errors, touched, handleChange, handleSubmit }) => (
                <Form onFinish={ handleSubmit }>
                  <Form.Item
                    validateStatus={ errors.email && touched.email ? 'error' : '' }
                    help={ errors.email }
                    label="Email"
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
                    label="Password"
                  >
                    <Input.Password
                      name="password"
                      value={ values.password }
                      onChange={ handleChange }
                    />
                  </Form.Item>
                  <Button
                    type="primary"
                    size="large"
                    htmlType="submit"
                    block
                    style={ { marginBottom: '15px' } }
                    disabled={ errors.email || errors.password }
                  >
                    Entrar
                  </Button>
                  <Button
                    type="text"
                    size="large"
                    block
                    onClick={ () => console.log('ok') }
                  >
                    Cadastre-se
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
