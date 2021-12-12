import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';
import AppRoutes from './App.routes';
import AuthRoutes from './Auth.routes';

function Router() {
  const auth = useSelector((state) => state.auth);
  console.log(auth);
  return (
    <BrowserRouter>{auth.token ? <AppRoutes /> : <AuthRoutes />}</BrowserRouter>
  );
}

export default Router;
