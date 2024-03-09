import React from "react";
import "./Head.scss";
import axios from "axios";
import Oval__sister from "../../Images/sister_oval.png";
import { NavLink } from "react-router-dom";
import Fruits from "../../Images/Oval_fruit.png";

function Head() {
    const [users, setUsers] = React.useState([]);
    const [recommed, setRecommed] = React.useState([]);
    const [foods, setFoods] = React.useState([]);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/photos")
            .then(response => {
                setUsers(response.data.slice(0, 10));
                setRecommed(response.data.slice(10, 20));
                setFoods(response.data.slice(20, 30));
                setLoading(false);
            })
            .catch(error => {
                console.error("Ma'lumotlarni olishda xatolik:", error);
                setLoading(false);
            });
    }, []);

    return (
        <section className="head">
            <div className="container">


                <div className="head__info">
                    <img src={Oval__sister} alt="oval__sister" />
                    <h1 className="head__title">Dollie Blair</h1>
                </div>
                {loading && <h2>Loading...</h2>}

                <ul className="head__list">
                    {users.map(user => (
                        <NavLink key={user.id} to={'/video/' + user.id} className={"linkOne"}>
                            <li key={user.id} className="head__item">
                                <img className="head__imgOne" src={user.thumbnailUrl} alt={user.title + "ning rasmi"} />
                                <h2 className="head__titleOne">{user.title}</h2>
                                <p className="head__pOne">80k views  ·  3 days ago  Dollie Blair</p>
                            </li>
                        </NavLink>
                    ))}
                </ul>

                <h2 className="head__titleTwo">Recommended</h2>

                <ul className="head__listTwo">
                    {recommed.map(recUser => (
                        <NavLink key={recUser.id} to={'/video/' + recUser.id} className={"linkOne"}>
                            <li key={recUser.id} className="head__itemTwo">
                                <img className="head__imgTwo" src={recUser.url} alt={recUser.title + "ning rasmi"} />
                                <h2 className="head__titleOne">{recUser.title}</h2>
                                <p className="head__pOne">34k views  ·  5 months ago</p>
                            </li>
                        </NavLink>
                    ))}
                </ul>


                <div className="head__infoThree">
                    <img src={Fruits} alt="oval__sister" />
                    <h2 className="head__titleTwo">Food & Drink</h2>
                    <p className="head__pThree">Recommended channel for you</p>
                </div>

                <ul className="head__listTwo">
                    {foods.map(foodUser => (
                        <NavLink key={foodUser.id} to={'/video/' + foodUser.id} className={"linkOne"}>
                            <li key={foodUser.id} className="head__itemThree">
                                <img className="head__imgThree" src={foodUser.thumbnailUrl} alt={foodUser.title + "ning rasmi"} />
                                <h2 className="head__titleThree">{foodUser.title}</h2>
                                <p className="head__pThree">34k views  ·  5 months ago</p>
                            </li>
                        </NavLink>
                    ))}
                </ul>

            </div>
        </section>
    );
}

export default Head;
