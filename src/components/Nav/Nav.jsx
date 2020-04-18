import React from "react";
import ClassNav from "./Nav.module.css";
import { NavLink } from "react-router-dom";

const Nav = (props) => {
  // console.log(props);
  return (
    <nav className={ClassNav.nav}>
      <div className={ClassNav.items}>
        <div className={ClassNav.item}>
          <NavLink to="/profile" activeClassName={ClassNav.active}>
            <h4>Profile</h4>
          </NavLink>
        </div>
        <div className={ClassNav.item}>
          <NavLink to="/dialogs" activeClassName={ClassNav.active}>
            <h4>Message</h4>
          </NavLink>
        </div>
        <div className={ClassNav.item}>
          <NavLink to="/users" activeClassName={ClassNav.active}>
            <h4>Users</h4>
          </NavLink>
        </div>
        <div className={ClassNav.item}>
          <NavLink to="/news" activeClassName={ClassNav.active}>
            <h4>News</h4>
          </NavLink>
        </div>
        <div className={ClassNav.item}>
          <NavLink to="/music" activeClassName={ClassNav.active}>
            <h4>Music</h4>
          </NavLink>
        </div>
        <div className={ClassNav.item}>
          <NavLink to="/settings" activeClassName={ClassNav.active}>
            <h4>Settings</h4>
          </NavLink>
        </div>
        <div className="login-block">
          <NavLink to={"/login"} style={{ color: "white" }}>
            {props.isAuth ? props.login : "login"}
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
