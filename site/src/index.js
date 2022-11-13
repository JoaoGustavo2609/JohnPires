import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import LandingPage from './pages/landingpage'
import CadastroUsuario from './pages/cadastrousuario'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/landingpage' element={<LandingPage/>}                   />
        <Route path='/cadastrousuario' element={<CadastroUsuario/>}           />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

