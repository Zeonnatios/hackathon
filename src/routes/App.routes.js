import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import MainLayout from '../components/Layout';
import Principal from '../pages/Principal';

function Router() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={ <Principal /> } />
        <Route path="/perfil" />
        <Route path="/trilhas" />
        <Route path="/trilhas/:id" />
        <Route path="/*" element={ <Navigate to="/" /> } />
      </Routes>
    </MainLayout>
  );
}

export default Router;
