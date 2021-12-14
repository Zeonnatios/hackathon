import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import MainLayout from '../components/Layout';
import MyTrails from '../pages/MyTrails';
import Principal from '../pages/Principal';
import Trail from '../pages/Trail';

function Router() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={ <Principal /> } />
        <Route path="/perfil" />
        <Route path="/trilhas" element={<MyTrails />} />
        <Route path="/trilhas/:id" element={<Trail />} />
        <Route path="/*" element={ <Navigate to="/" /> } />
      </Routes>
    </MainLayout>
  );
}

export default Router;
