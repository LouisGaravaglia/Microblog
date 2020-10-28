import React, {useEffect} from "react";
import './App.css';
import Routes from "./Routes";
import NavBar from "./NavBar";
import {getPosts, getComments} from "./actionCreators";
import {  useDispatch } from "react-redux";





function App() {
  const dispatch = useDispatch();
  useEffect(()=> {
      dispatch(getPosts());
      dispatch(getComments());
  },[dispatch])
  return (
    <div className="App">
    <NavBar/>
    <Routes/>
    </div>
  )
}

export default App;
