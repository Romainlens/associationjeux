import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import About from './components/about/About';
import History from './components/history/History';
import Users from './components/users/Users';
import Contact from './components/contact/Contact';
import Games from './components/games/Games';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>

    <Header />

    <main>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="jeux" element={<Games />} />
        <Route path="infos" element={<About />} />
        <Route path="histoire" element={<History />} />
        <Route path="membres" element={<Users />} />
        <Route path="contact" element={<Contact />} />
      </Routes>

    </main>

    <Footer />

  </BrowserRouter>
);
