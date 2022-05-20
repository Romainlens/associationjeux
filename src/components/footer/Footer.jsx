import "./footer.css";

export default function Header() {
    return (
        <>
          <footer>
            <img src="img/logo.png" alt="" />
            <nav>
              <a href="/boutique">Boutique</a>
              <a href="">Contact</a>
              <a href="">À propos</a>
            </nav>
            <div className="copyrights">
              <p>Copyright © 2022 · Registered in France.</p>
            </div>
          </footer>
        </>
    );
}
