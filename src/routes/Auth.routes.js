import React from 'react';
import { useLocation } from 'react-router';
import { Route, Routes, Navigate } from 'react-router-dom';
import Login from '../pages/Login';
import Signin from '../pages/SignUp';

function Router() {
  const location = useLocation();

  return (
    <Routes>
      <Route path="/login" element={ <Login /> } />
      <Route path="/cadastro" element={ <Signin /> } />
      <Route
        path="/*"
        element={ <Navigate to="/login" state={ { from: location } } /> }
      />
    </Routes>
  );
}

export default Router;
