import "./games.css";
import { useEffect, useState } from "react";
import axios from "axios";
import ReadMore from "../readmore/ReadMore";
import Content from "../readmore/ReadMore";

export default function Games() {
    const [game,setGame] = useState("");
    const [posts,setPosts] = useState(null);

    useEffect( () => {
        getAllData() ;

},[]) ;

    const getAllData = () => {
        axios.get("/bd/games.json")
        .then(res => {
            const p = res.data;
            setPosts( p );
        });
    }
    return (
        <div className="games">
            <datalist id="games">
                {posts && posts.map( p => {
                    return (
                        <option key={p.id} value={p.title}>{p.title}</option>
                    )
                })}
            </datalist>
            <nav>
                <a href="/games">Games</a>
                <a href="">Accueil</a>
            </nav>
            <grid>
                {posts && posts.filter(post => {
                    if (game ===""){
                        return post;
                    } else if (post.name.toLowerCase().includes(game.toLowerCase())) {
                        return post;
                    }
                }).map( g => {
                    return(
                        <article className="article" key={g.id}>
                            <h3>{g.name}</h3>
                            <img src={g.image} alt={g.name}></img>
                            <ReadMore>{g.description}</ReadMore>
                        </article>
                    )
                })}
            </grid>
        </div>
    )
}