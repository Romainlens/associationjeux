import "./header.css";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <>
          <header>
            <img src='./img/nom.png' alt="PROUT" />
            <nav>
              <Link to="/accueil">Accueil</Link>
              <Link to="/infos">Infos</Link>
              <Link to="/histoire">Notre histoire</Link>
              <Link to="/jeux">Jeux</Link>
              <Link to="/membres">Membres</Link>
              <Link to="/contact">Contact</Link>
            </nav>
            <button>
              <span class="material-symbols-outlined">
                menu
              </span>
            </button>
          </header>
        </>
    );
}
