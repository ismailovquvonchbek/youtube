import React from "react";
import "./Video.scss"
import { NavLink, useParams } from "react-router-dom";
import Like from "../../Images/Like.svg"
import DissLike from "../../Images/DissLike.svg"
import Share from "../../Images/Share.svg"
import More from "../../Images/More.svg"
import Fruit from "../../Images/Oval_fruit.png"
// import Video__Two from "./Video__Two";
import axios from "axios";



function Video() {
  const { user_id } = useParams();
  const [user, setUser] = React.useState(false);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos/" + user_id)
      .then((res) => res.json())
      .then((data) => {
        if (!data?.data) {
          setUser(data);
          setLoading(false);
        }
      });
  }, [user_id]);


  const [films, setFilm] = React.useState([]);

  React.useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/photos")
      .then(response => {
        setFilm(response.data.slice(0,7));
      })
      .catch(error => {
        console.error("Ma'lumotlarni olishda xatolik:", error);
      });
  }, []);

  return (
    <>

      <section className="video">
        <div className="container">

          <div className="video__info">

            <div className="video__play">
              {user && (
                <div className="video__box">
                  <img
                    className="video__bigImg"
                    src={user.url}
                    alt={user.title + "ning rasmi"}
                    width={850}
                    height={500}
                  />
                  <h2 className="video__title">{user.title}</h2>
                </div>
              )}
              {loading && <h2>Loading...</h2>}
            </div>

            <div className="video__textBox">
              <p className="video__p">123k views</p>

              <div className="video__buttonsBox">
                <button className="video__button">
                  <img src={Like} alt="Icon_Like" className="video__icon" width={14} height={13} /> 123k
                </button>

                <button className="video__button">
                  <img src={DissLike} alt="Icon_Like" className="video__icon" width={14} height={13} /> 435k
                </button>

                <button className="video__button">
                  <img src={Share} alt="Icon_DissLike" className="video__icon" width={14} height={13} /> Share
                </button>

                <img src={More} alt="Icon_More" />
              </div>
            </div>

            <span className="video__span"></span>

            <ul className="video__oneList">
              <li className="video__oneItem">
                <img src={Fruit} alt="Icon_Fruit" className="video__oneIcon" width={80} height={80} />

                <div className="video__oneDiv">
                  <h3 className="video__oneTitle">Food & Drink</h3>
                  <span className="video__oneSpan">Published on 14 Jun 2019</span>
                  <p className="video__oneP">
                    A successful marketing plan relies heavily on the pulling-power of advertising copy. Writing result-oriented ad copy is difficult, as it must appeal to, entice, and convince consumers to take action. There is no magic formula to write perfect ad copy; it is based on a number of factors, including ad placement, demographic, even the consumer’s mood when they see your ad.
                  </p>

                  <a className="video__oneLink" href="#link">Show more...</a>
                </div>

              </li>

              <li className="video__oneItem">
                <button className="video__oneBtn">Subscribe2.3m</button>
              </li>
            </ul>
          </div>

          <ul className="video__list">
           
           {films.map(film => (
             <NavLink key={film.id} to={'/video/' + film.id} className={"linkOne"}>
               <li key={film.id} className="head__item">
                 <img 
                    className="head__imgOne" 
                    src={film.thumbnailUrl} 
                    alt={film.title + "ning rasmi"} />
                 <h2 className="head__titleOne">{film.title}</h2>
                 <p className="head__pOne">80k views  ·  3 days ago  Dollie Blair</p>
               </li>
             </NavLink>
           ))}
         
       </ul>

        </div>
      </section></>




  );
}

export default Video;

