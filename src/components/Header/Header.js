import React from "react";
import logo from "../../assets/img/logo.jpg";
import style from "./style.module.css";
import Nav from "./Nav";

const Header = () => {
  return (
    <header className={style.header}>
      <div className={style["logo-title"]}>
        <figure>
          <img className={style.logo} src={logo} alt="logo Wealth Health" />
        </figure>
        <h1 className={style.title}>HRnet</h1>
      </div>
      <Nav />
    </header>
  );
};

export default Header;
