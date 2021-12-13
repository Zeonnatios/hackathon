import axios from 'axios';
import { getLocalStorage } from './localStorage';

const getToken = () => {
  const persistRoot = getLocalStorage('persist:root');
  let token = '';
  if (persistRoot) {
    token = JSON.parse(persistRoot.auth).token;
  }
  return token;
};

export default () => {
  const instance = axios.create({
    baseURL: 'http://localhost:3001',
    headers: {
      'Content-Type': 'application/json',
      'Acess-Control-Allow-Origin': '*',
      Authorization: getToken(),
      Accept: 'application/json',
    },
  });

  return instance;
};
