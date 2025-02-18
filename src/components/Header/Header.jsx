import "./Header.scss";
import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../../assets/logo/logo.png";
import gear from "../../assets/icons/gear.svg";

export default function Header() {
  return (
    <header className="header">
      <nav className="header__container">
        <NavLink to={"/"} className="header__logo">
          <img src={logo} alt="logo Instock" className="header__logo--icon" />
          <span className="header__logo--text">Budget Bloom</span>
        </NavLink>
        <NavLink to={"/account"} className="account">
          <p className="account__user-name">Joice</p>
          <img
            src={gear}
            alt="gear icon for going to account settings"
            className="account__icon"
          />
        </NavLink>
      </nav>
    </header>
  );
}
