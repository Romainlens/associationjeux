import "./about.css";
import { Link } from "react-router-dom";

export default function About() {
    const ArrowR = "==>"

    return(
        <>
            <article className="aboutArticle">
                <h1 className="aboutH1"> Nos locaux ?</h1>
                <section className="aboutSection">
                    <p>Nous sommes basés en France sur Grenay à l'adresse suivante:</p>
                    <p>6 Rue Robespierre, 62160 Grenay</p>
                </section>
                <h2 className="aboutH2"> Nous contacter ?</h2>
                <section className="aboutSection">
                    <p>Redirige toi vers cette page {ArrowR} <Link to="/contact">Contact</Link></p>
                    </section>
            </article>
        </>
    )
}
