import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import Landing from './pages/Landing';
import Cadastro from './pages/Cadastro';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/landingpage' element={<Landing/>}                   />
        <Route path='/cadastrousuario' element={<Cadastro/>}              />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

