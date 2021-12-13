import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Principal from '../pages/Principal';

function Router() {
  return (
    <Routes>
      <Route path="/" element={ <Principal /> } />
      <Route path="/perfil" />
      <Route path="/cadastro" />
      <Route path="/trilhas" />
      <Route path="/trilhas/:id" />
      <Route path="/*" element={ <Navigate to="/" /> } />
    </Routes>
  );
}

export default Router;
