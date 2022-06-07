import "./users.css";
import UsersInfo from "../../bd/users.json";


export default function Users() {
            return (
              <div className="users">
                  <section className="tableUsers">{
                   UsersInfo.map( user => {
                    return(
                        <article className="articleUsers" key={user.id}>
                           <p>Nom:{user.firstname}</p>
                              <p>Prénom:{user.name}</p>
                              <p>Age:{user.age}</p>
                      
 </article>
)})}
                  </section>
              </div>
            )
}
