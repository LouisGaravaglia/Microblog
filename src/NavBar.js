import React from "react";
import {NavLink} from "react-router-dom";

import './App.css';

function NavBar() {
  return (
    <div className="NavBar">
        <h1>MICROBLOG</h1>
        <h5>Dive into the world of blogging.</h5>
        <NavLink className="NavBarLink" to="/">BLOG</NavLink>
        <NavLink className="NavBarLink" to="/new">ADD A NEW POST</NavLink>
    </div>
  );
}

export default NavBar;
