import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Routes,Route } from "react-router-dom";
import Games from './components/games/Games';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Games />} />
      <Route path="games" element={<Games />} />
    </Routes>
  </BrowserRouter>
);