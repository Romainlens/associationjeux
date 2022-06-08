import "./history.css";

export default function History() {
    return (
        <>
        <div className="landing">
          <div>
            <h1 className="h1history">Notre histoire</h1>
          </div>
        </div>
        <div className="firstSection">
          <div className="firstLeft">
            <div className="niktmor">
              <h3 className="h3history">Notre enseigne !</h3>
             <div className="flex">
             <img src="https://www.rom-game.fr/multimedia/news/191118_shop.jpg" alt=""  />
                     <img src="https://www.cageauxtrolls.com/img/cms/Boutique/boutique-de-jeux-de-societe-levis-350.jpg" alt=""  />
                     <img src="https://cdn-europe1.lanmedia.fr/var/europe1/storage/images/europe1/societe/departements-confines-les-magasins-de-jeux-video-vont-finalement-pouvoir-ouvrir-4033260/56896007-1-fre-FR/Departements-confines-les-magasins-de-jeux-video-vont-finalement-pouvoir-ouvrir.jpg" alt=""  />
             </div>
            </div>
          </div>
        </div>
        <div className="firstSection">
          <div className="firstLeft">
            <div className="niktmor">
              <h2>Qui somme nous ?</h2>
              <p className="phistory">
                  On est une équipe de 4 membres tous passioner de jeux, <br /> bsoit de découvert et d'echange c'est pour cette raison que nous avons pris la decision d'ouvert un espace de jeux 
                  Mais pas seulement des jeux mais egalement des divertisement acompagner de conseil et des divertisement a la hauteur des attentes 
                  plus de 15 000 jeux certain plus connue que dautre mais tous certifier des meilleurs jeux a faire entre ami ou famille pour toute age.
              </p>
            </div>
          </div>
        </div>
        <div className="secondSection">
          <div className="secondLeft">
            <img src="https://previews.123rf.com/images/jaaakworks/jaaakworks1509/jaaakworks150900026/44830860-cartoon-%C3%A9quipe-d-affaires-heureux.jpg" alt="" />
          </div>
          <div className="secondRight">
            <h3 className="h3history">notre equipe</h3>
            <ul>
              <li>
                <img src="https://upload.wikimedia.org/wikipedia/commons/4/40/USS_Enterprise_NCC-1701-A.png" alt="" />
                <a href="/">Tu souhaites rejoindre notre équipage ?</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="thirdSection">
          
          <div className="thirdInner">
            <div className="thirdInnerFirst">
              <img  src="https://assets.asana.biz/m/2945c24cc5afd1fd/original/article-leadership-icebreaker-questions-team-building-2x.jpg" alt="" style={{width:"500px",height:"300px"}}/>
              <h3 className="h3history">Une question ou recommandation ?</h3>
              <p className="phistory">Notre équipe s'engage a vous répondrez dans les plus bref délai du lundi au vendredi de 8h à 12h.</p>
              <button>contactez-nous par mail</button>
            </div>
          </div>
        </div>
        </>
      );
}

