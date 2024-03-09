import menu from "../../Images/Menu.svg"

import React from 'react';

function MenuButton({ onClick }) {
  return (
    <button className="menu__btn" onClick={onClick}>
      <img src={menu} alt="Menu_icon" />
    </button>
  );
}

export default MenuButton;