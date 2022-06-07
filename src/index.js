import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Games from './components/games/Games';
import InfoGame from './components/infogame/InfoGame';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>

    <Header />

    <main>

      <App />

    </main>

    <Footer />

  </BrowserRouter>
);
