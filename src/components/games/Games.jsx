import "./games.css";
import ReadMore from "../readmore/ReadMore";
import { Link } from "react-router-dom";
import GamesInfo from "../../bd/games.json"

export default function Games() {
    return (
        <div className="games"> 
            <section className="tableGames">{
                GamesInfo.map( game => {
                    return(
                        <article className="articleGames" key={game.id}>
                                <h3><Link style={{color:'#434544',}} to={game.name} >{game.name}</Link></h3>
                                <Link to={game.name}>
                            <img className="imgGames" src={game.image} alt={game.name}></img></Link>
                            <ReadMore>{game.description}</ReadMore>
                           
                        </article>
                        )
                    })}
            </section>
        </div>
    );
}   

 //peopleMin