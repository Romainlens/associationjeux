import "../../components/games/games.css";
import { useParams } from "react-router-dom";
import GamesInfo from "../../bd/games.json"

export default function InfoGame() { 

    const { name } = useParams();
    const result = GamesInfo.filter(game => game.name === name)
    console.log(result)
    
    return (
        <div className="games"> 
            <section className="tableGames">{
                result.map( game => {
                    return(
                        <article className="articleGames" key={game.id}>
                                <h3>{game.name}</h3>
                            <img className="imgGames" src={game.image} alt={game.name}></img>
                            
                        </article>
                        )
                    })}
            </section>
        </div>
    );
}