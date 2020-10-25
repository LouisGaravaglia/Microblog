import React from "react";
import {NavLink} from "react-router-dom";

import './App.css';

function Routes() {
  return (
    <div className="Routes">
        <NavLink exact path="/">BLOG</NavLink>
        <NavLink exact path="/">ADD A NEW POST</NavLink>
    </div>
  );
}

export default Routes;
