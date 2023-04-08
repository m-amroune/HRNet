import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import style from "./style.module.css";

const Nav = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {
    const changeWidth = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);
  return (
    <nav>
      {(toggleMenu || width > 680) && (
        <ul className={style.nav}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? style["nav-active"] : style["nav-link"]
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/table"
              className={({ isActive }) =>
                isActive ? style["nav-active"] : style["nav-link"]
              }
            >
              Current Employees
            </NavLink>
          </li>
        </ul>
      )}
      <button onClick={toggleNav} className={style.btnMenu}>
        Menu
      </button>
    </nav>
  );
};

export default Nav;
