import "./header.css";
import { Link } from "react-router-dom";
import React, { useState } from "react";

export default function Header() {

  const [isActive, setActive] = useState("false");
  const handleToggle = () => {
    setActive(!isActive);  };

    return (
        <>
          <header>
            <img src='./img/nom.png' alt="PROUT" />
            <nav className={isActive ? "hiddenMenu" : null}>
              <Link to="/">Accueil</Link>
              <Link to="/infos">Infos</Link>
              <Link to="/histoire">Notre histoire</Link>
              <Link to="/jeux">Jeux</Link>
              <Link to="/membres">Membres</Link>
              <Link to="/contact">Contact</Link>
            </nav>
            <span className="material-symbols-outlined" onClick={handleToggle}>
              menu
            </span>
          </header>
        </>
    );
}
