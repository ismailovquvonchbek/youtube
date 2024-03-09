import React from 'react';
import "./Menu.scss"
import Home from "../../Images/home.svg"
import Trending from "../../Images/trending.svg"
import Subscriptions from "../../Images/subscribe.svg"

import library from "../../Images/library.svg"
import history from "../../Images/history.svg"
import watch from "../../Images/watch.svg"
import Star from "../../Images/Star.svg"
import Heart from "../../Images/heart.svg"
import music from "../../Images/music.svg"
import Games from "../../Images/games.svg"
import chevron from "../../Images/chevron.svg"
import { NavLink } from 'react-router-dom';
import axios from 'axios';

const menuItems = [
    { id: 1, name: "Home", icon: Home, link: "users" },
    { id: 2, name: "Trending", icon: Trending, link: "coming" },
    { id: 3, name: "Subscriptions", icon: Subscriptions, link: "coming" },
    { id: 4, name: "Library", icon: library, link: "coming" },
];

const menuItemsTwo = [
    { id: 1, name: "History", icon: history, link: "coming" },
    { id: 2, name: "Watch later", icon: watch, link: "coming" },
    { id: 3, name: "Favourites", icon: Star, link: "coming" },
    { id: 4, name: "Liked videos", icon: Heart, link: "coming" },
    { id: 5, name: "Music", icon: music, link: "coming" },
    { id: 6, name: "Games", icon: Games, link: "coming" },
    { id: 7, name: "Show more", icon: chevron, link: "coming" },
];

function Menu({ showText, width }) {
    const [infos, setInfo] = React.useState([]);

    React.useEffect(() => {
        axios.get("https://reqres.in/api/users?page=1")
            .then(response => {
                setInfo(response.data.data);
            })
            .catch(error => {
                console.error("Ma'lumotlarni olishda xatolik:", error);

            });
    }, []);

    return (
        <section className="menu" style={{ width: width }}>
            <div className="container__menu">
                <ul className="menu__list">
                    {menuItems.map(item => (
                        <li key={item.id} className="menu__item">
                            <NavLink className="menu__link" to={item.link}>
                                <img className='menu__icon' src={item.icon} alt={`${item.name} Icon`} />
                                {showText && item.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>
                <ul className="menu__itemtwo">
                    {menuItemsTwo.map(item => (
                        <li key={item.id} className="menu__item">
                            <NavLink className="menu__link" to={item.link}>
                                <img className='menu__icon' src={item.icon} alt={`${item.name} Icon`} />
                                {showText && item.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>

                <h3 className='menu__title'>{showText && "Subscriptions"}</h3>



                <ul className='profile__lists'>
                    {infos.length > 0 && infos.map((info) => (
                        <NavLink key={info.id} className={"profile__links"} to={"/channel/" + info.id}>
                            <li key={info.id} className='profile__items'>
                                <img src={info.avatar} alt={info.last_name} className='profile__users' />
                                <h2 className='profile__name'>{showText && info.last_name + " " + info.first_name}</h2>
                            </li>
                        </NavLink>
                    ))}
                </ul>

            </div>
        </section>
    );
}

export default Menu;