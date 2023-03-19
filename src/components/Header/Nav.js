import React from "react";
import { NavLink } from "react-router-dom";
import style from "./style.module.css";

const Nav = () => {
  return (
    <nav>
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
    </nav>
  );
};

export default Nav;
