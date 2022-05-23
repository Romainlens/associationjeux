import "./infoGame.css"
import { useState, useEffect } from "react";
import axios from "axios";
export default function InfoGame () {

    const [infoGame,setInfoGame] = useState("");

    useEffect ( () => {
        getAllData() ;
    },[]) ;

    const getAllData = () => {
        axios.get("/bd/games.json")
        .then(res => {
            const i = res.data;
            setInfoGame( i );
        });
    }


    <div className="infoGame">
        <datalist id="infoGame">
            {infoGame && infoGame.map( i => {
                return (
                    <option key={i.id} value={i.title}>{i.title}</option>
                )
            })}
        </datalist>
        <section className="infoGame">
            {infoGame && infoGame.filter(infoGame => {
                if (infoGame === ""){
                return infoGame;
                }
            }).map( i => {
                return(
                    <article className="articleInfoGame" key={i.id}>
                        <h3> {i.name}</h3>
                        <img className="imgInfoGame" src={i.image} alt={i.name}></img>
                        <describe>{i.description}</describe>
                    </article>
                )
            })}
        </section>
    </div>
};