import "./users.css";
import { useEffect, useState } from "react";
import axios from "axios";
export default function Users() {
  const [user, setUsers] = useState("");
  const [posts, setPosts] = useState(null);
  useEffect(() => {
    getAllData();
  }, []);
  const getAllData = () => {
    axios.get("/bd/users.json").then((res) => {
      const p = res.data;
      setPosts(p);
    });
  };
  return (
    <div className="users">
      <datalist id="users">
        {posts &&
          posts.map((p) => {
            return (
              <option key={p.id} value={p.title}>
                {p.title}
              </option>
            );
          })}
      </datalist>
      <section className="tableUsers">
        {posts &&
          posts
            .filter((post) => {
              if (user === "") {
                return post;
              } else if (post.name.toLowerCase().includes(user.toLowerCase())) {
                return post;
              }
            })
            .map((g) => {
               return ( 
                <article className="articleUsers" key={g.id}>
                  <h3>Nom : {g.firstname}</h3>
                  <h3>Prénom: {g.name}</h3>
                  <h3>Age: {g.age} ans</h3>
                  <h3>Admin : {g.admin}</h3>
                </article>

              );
            })}
      </section>
    </div>
  );
}
