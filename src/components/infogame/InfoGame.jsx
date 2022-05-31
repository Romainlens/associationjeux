import "./infoGame.css";
import { useParams } from "react-router-dom";
import GamesInfo from "../../bd/games.json"

export default function InfoGame() { 

    const { name } = useParams();
    const result = GamesInfo.filter(game => game.name === name)
    console.log(result)
    
    return (
        <div className="infoGames"> 
            <section className="tableInfoGame">{
                result.map( game => {
                    return(
                        <article className="articleInfoGame" key={game.id}>
                            {/* <div className="bgInfoGames"></div>
                            <img className="bgInfoGames" src={game.bgImg} alt=""></img> */}
                                <h3>{game.name}</h3>
                            <img className="imgInfoGames" src={game.image} alt={game.name}></img>
                            <p className="pDif"> {game.difficult} / 5 difficulté</p>
                            <p className="pDif"> A partir de ({game.userYears}) ans.</p>
                            <p className="pDif">Entre {game.peopleMin} à {game.peopleMax} personnes.</p>
                            <p className="pDif">Pour {game.time} minutes de temps de jeu</p>
                            <div className="hr"></div>
                            <p className="pDif">Description du produits </p>
                            <p className="pDescription">{game.description}</p>
                            <p className="pDescription">Produits par : {game.editor}</p>
                        </article>
                        )
                    })}
            </section>
        </div>
    );
}
// "userYears":"10+",