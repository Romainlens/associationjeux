import "./users.css";
import showAdmin from "../../bd/games.json";
import {useParams} from "react-router-dom";


export default function Showadmin(){

        const { admin } = useParams();
        const result = showAdmin.filter(admin=> admin.id === true)
        console.log(result)
    
return(
               <div className="admin">
                   <section className="id">{
                       result.map( admin=>{
                           result(
                               <article className="articleAdmin" key={admin.id}>
                                       <h3>{admin.id}</h3>          
                               </article>
                         )
                           }
                            )
                        }                     
                   </section>
               </div>
);
                    }
