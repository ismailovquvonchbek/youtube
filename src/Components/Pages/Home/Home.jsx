import "./Home.scss"
import React from "react";
import logotip from "../../Images/Black.svg"
import Lupa from "../../Images/Shape.png"
import UserPicture from "../../Images/Userpic.png"
import Combined_Shape from "../../Images/Combined_Shape.svg"
import notification from "../../Images/notification.svg"
import camera from "../../Images/camera.svg"
import MenuButton from "./MenuButton";


function Api({ onMenuClick }) {
  const [count, setCount] = React.useState(0);
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header__info">

            <div>
              <MenuButton onClick={onMenuClick} />
            </div>

            <a className="header__logo" href="#link">
              <img className="header__logotip" src={logotip} alt="Logotip" />
            </a>

            <div className="header__inputs">
              <input type="text" className="header__inp" placeholder="Search" />
              <img src={Lupa} alt="Icon__Shape" className="header__shape" />
            </div>
          </div>


          <div className="header__item">
            <select className="header__localization">
              <option value="uz">UZ</option>
              <option value="en">EN</option>
              <option value="ru">RU</option>
            </select>



            <select className="header__theme">
              <option value="dark">dark</option>
              <option value="light">light</option>
            </select>

            <img className="header__cam" src={camera} alt="Icons_cam" />
            <img className="header__combined" src={Combined_Shape} alt="Icons_menu" />

            <div className="notif__info">
              <p className="count__p">{count}</p>
              <img src={notification} alt="Icons_notification" onClick={() => setCount((num) => num === 3 ? 0 : num + 1)} />
            </div>

            <img src={UserPicture} alt="Icons_User" />
          </div>
        </div>
      </header>
    </>
  );
}

export default Api;