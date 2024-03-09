import "./Channel.scss";
import Channel_img from "../../Images/channel__img.png"
import { NavLink, useParams } from "react-router-dom";
import React from "react";
import Bilidirishnoma from "../../Images/notification.svg"
import Lupa from "../../Images/Shape.png"
import Channel_video from "../../Images/Channel_Video.png"

import user1 from "../../Images/user-chanel1.png"
import user2 from "../../Images/user-chanel2.png"
import user3 from "../../Images/user-chanel3.png"
import axios from "axios";


function Channel() {
    const [user, setuser] = React.useState()
    const [loading, setloading] = React.useState(true)
    const { user_id } = useParams()

    React.useEffect(() => {
        fetch("https://reqres.in/api/users/" + user_id)
            .then((res) => res.json())
            .then((data) => {
                if (data?.data) {
                    setuser(data?.data)
                    setloading(false)
                }
            })
    }, [])



    const [foods, setFoods] = React.useState([]);

    React.useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/photos")
            .then(response => {
                setFoods(response.data.slice(100, 150));
            })
            .catch(error => {
                console.error("Ma'lumotlarni olishda xatolik:", error);
            });
    }, []);

    return (
        <>
            <section className="channel">
                <div className="container">
                    <img src={Channel_img} alt="Img" />

                    <ul className="channel__list">
                        <li className="channel__item">
                            {user && (
                                <div className="channel__profile">
                                    <img src={user.avatar} alt={user.last_name} className="channel__profImg" />
                                    <div className="channel__titleBox">
                                        <h2 className="channel__profTitle">{user.first_name + "" + user.last_name}</h2>
                                        <a className="channel__mail" href={`mailto:` + user.email}>{user.email}</a>
                                    </div>
                                </div>
                            )}
                            {loading && <h1>Loading...</h1>}
                        </li>

                        <li className="channel__item">
                            <img src={Bilidirishnoma} alt="Notif icon" />
                            <button className="video__oneBtn">Subscribe2.3m</button>
                        </li>
                    </ul>

                    <div className="channel__infoBiggest">

                        <div className="channel__infoSmall">

                            <ul className="channel__infoLists">
                                <li className="channel__infoItems">
                                    <NavLink to={"coming"} className={"channel__navLink"}>
                                        Home
                                    </NavLink>
                                </li>

                                <li className="channel__infoItems">
                                    <NavLink to={"coming"} className={"channel__navLink"}>
                                        Videos
                                    </NavLink>
                                </li>

                                <li className="channel__infoItems">
                                    <NavLink to={"coming"} className={"channel__navLink"}>
                                        Playlists
                                    </NavLink>
                                </li>

                                <li className="channel__infoItems">
                                    <NavLink to={"coming"} className={"channel__navLink"}>
                                        Channels
                                    </NavLink>
                                </li>

                                <li className="channel__infoItems">
                                    <NavLink to={"coming"} className={"channel__navLink"}>
                                        Discussion
                                    </NavLink>
                                </li>

                                <li className="channel__infoItems">
                                    <NavLink to={"coming"} className={"channel__navLink"}>
                                        About
                                    </NavLink>
                                </li>

                                <li>
                                    <img src={Lupa} alt="Icon Search" />
                                </li>
                            </ul>

                            <div className="channel__infoSmaller">
                                <img className="channel__videoImg" src={Channel_video} alt="Img" width={490} height={230} />

                                <div className="channel_infoTitlebox">
                                    <h3 className="channel__infoTitle">Choosing The Best Audio Player Software For Your Computer</h3>
                                    <p className="channel__infoP">
                                        Your cheap internet-based banner advertising will become one of the sought for ads there are. Today, the world of Internet advertising is rapidly evolving beyond banner ads and intrusive pop-ups. Bayles A common medium for advertising on the Internet is the use of banner ads.
                                    </p>
                                    <span className="channel__infoSpan">
                                        11k views  ·  6 months ago
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="channel__infoItem">
                            <h4 className="channel__infoHeading">Recommended channel</h4>

                            <div className="chanel__infoUsersAll">
                                <img src={user1} alt="user icon" />
                                <h5 className="channel__infoTitS">Flora Benson</h5>
                            </div>

                            <div className="chanel__infoUsersAll">
                                <img src={user2} alt="user icon" />
                                <h5 className="channel__infoTitS">Violet Cobb</h5>
                            </div>

                            <div className="chanel__infoUsersAll">
                                <img src={user3} alt="user icon" />
                                <h5 className="channel__infoTitS">Phillip Mullins</h5>
                            </div>
                        </div>
                    </div>

                    <h6 className="channel__titleFinal">Margaret Phelps videos</h6>


                    <ul className="channel__listTwo">
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
        </>
    )
}


export default Channel;