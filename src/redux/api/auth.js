import axios from '../../utils/index';

export default async function login({ email, password, token }) {
  const values = await axios(token).post('/login/', {
    email,
    password,
  });
  return values
}
