import axios from '../../utils/index';

export default async function login({ email, password }) {
  const values = await axios().post('/login/', {
    email,
    password,
  });
  return values
}
