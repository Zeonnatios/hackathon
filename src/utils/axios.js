import axios from 'axios';

export default (token) => {
  const instance = axios.create({
    baseURL: 'http://localhost:3001',
    headers: {
      'Content-Type': 'application/json',
      'Acess-Control-Allow-Origin': '*',
      Authorization: token,
      Accept: 'application/json',
    },
  });

  return instance;
};
