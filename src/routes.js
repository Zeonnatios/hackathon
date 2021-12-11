import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Principal from './pages/principal';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Principal /> } />
        <Route path="/login" />
        <Route path="/perfil" />
        <Route path="/cadastro" />
        <Route path="/trilhas" />
        <Route path="/trilhas/:id" />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
