import React from "react";
import {Route, Redirect, Switch} from "react-router-dom";
import BlogList from "./BlogList";
import BlogForm from "./BlogForm";
import './App.css';

function Routes() {
  return (
    <div className="Routes">
    <Switch>
        <Route to="/"><BlogList/></Route>
        <Route to="/post"><BlogForm/></Route>
        <Redirect to="/"/>
    </Switch>
    </div>
  );
}

export default Routes;
