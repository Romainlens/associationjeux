import "./infoGame.css";
import { useParams } from "react-router-dom";
import GamesInfo from "../../bd/games.json";

export default function InfoGame() {
    const { name } = useParams();
    const result = GamesInfo.filter((game) => game.name === name);
    console.log(result);

    return (
    <div className="games">
        <section className="tableInfoGames">
        {result.map((game) => {
            return (
            <article className="articleInfoGames" key={game.id}>
                <h3 className="h3InfoGames"><span>{game.name}</span></h3>
                <img className="imgInfoGames" src={game.image} alt={game.name}></img>
                <h3 className="h3InfoGames">yolo</h3>
                <h3 className="h3InfoGames">Description :</h3>
                <p className="pDescription">{game.description}</p>
            </article>
            );
        })}
        </section>
    </div>
    );
}
