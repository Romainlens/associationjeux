import "./games.css";
import ReadMore from "../readmore/ReadMore";
import { Link } from "react-router-dom";
import GamesInfo from "../../bd/games.json"

export default function Games() {
<<<<<<< HEAD
    const [game,setGame] = useState("");
    const [posts,setPosts] = useState(null);
    useEffect(() => {
        getAllData() ;

},[]) ;
const getAllData = () => {
        axios.get("/bd/games.json")
        .then(res =>{
            const p = res.data;
            setPosts( p );
        });
    } 

=======
>>>>>>> 3cdcad8526d33b894289273a2d5a46a2db7e76b8
    return (
        <div className="games"> 
            <section className="tableGames">{
                GamesInfo.map( game => {
                    return(
<<<<<<< HEAD
                        <article className="articleGames" key={g.id}>
                                <a>
                                    <h3>{g.name}</h3>
                                </a>
                                <img className="imgGames" src={g.image} alt={g.name}></img>
                                
                        </article>        
                    )
                })}     
=======
                        <article className="articleGames" key={game.id}>
                                <h3><Link to={game.name}>{game.name}</Link></h3>
                            <img className="imgGames" src={game.image} alt={game.name}></img>
                            <ReadMore>{game.description}</ReadMore>
                        </article>
                        )
                    })}
>>>>>>> 3cdcad8526d33b894289273a2d5a46a2db7e76b8
            </section>
        </div>
    );
}   

