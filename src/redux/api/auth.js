import axios from '../../utils/index';

export async function login({ email, password }) {
  const values = await axios().post('/login/', {
    email,
    password,
  });
  return values
}

export async function signin({ name, email, password }) {
  const values = await axios().post('/users/', {
    name,
    email,
    password,
  });

  return values
}