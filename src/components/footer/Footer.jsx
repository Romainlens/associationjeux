import "./footer.css";

export default function Footer() {
    return (
        <>
          <footer>
            <img src="img/logo.png" alt="" />
            <nav>
              <a href="/boutique">Boutique</a>
              <a href="../contact">Contact</a>
              <a href="/">À propos</a>
            </nav>
            <div className="copyrights">
              <p>Copyright © 2022 · Registered in France.</p>
            </div>
          </footer>
        </>
    );
}
