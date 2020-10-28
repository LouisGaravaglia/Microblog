import React, {useState, useEffect} from "react";
import './App.css';
import Routes from "./Routes";
import NavBar from "./NavBar";
import BlogContext from "./BlogContext";
import {getPosts, getComments} from "./actionCreators";
import { useSelector, useDispatch } from "react-redux";





function App() {
const dispatch = useDispatch();
// const [infoLoaded, setInfoLoaded] = useState(false);
const posts = useSelector(store => store.posts);

//COURSE EXAMPLE IN HANDOUT:
// useEffect(() => {
//     dispatch(getTodosFromAPI())
//   }, [dispatch]);


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
