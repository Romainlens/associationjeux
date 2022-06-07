import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/home/Home';
import About from './components/about/About';
import History from './components/history/History';
import Users from './components/users/Users';
import Contact from './components/contact/Contact';
import Games from './components/games/Games';
import InfoGame from './components/infogame/InfoGame';

export default function App() {
  
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="jeux" element={<Games />} />
      <Route path="infos" element={<About />} />
      <Route path="histoire" element={<History />} />
      <Route path="membres" element={<Users />} />
      <Route path="contact" element={<Contact />} />
      <Route path="jeux/:name" element={<InfoGame />} />
    </Routes>
  );
}
