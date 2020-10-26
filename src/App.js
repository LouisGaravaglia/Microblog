import React, {useState, useEffect} from "react";
import './App.css';
import Routes from "./Routes";
import NavBar from "./NavBar";
import BlogContext from "./BlogContext";
import {getPosts} from "./actionCreators";
import { useSelector, useDispatch } from "react-redux";





function App() {
const dispatch = useDispatch();
// const [infoLoaded, setInfoLoaded] = useState(false);
const posts = useSelector(store => store.posts);

//COURSE EXAMPLE IN HANDOUT:
// useEffect(() => {
//     dispatch(getTodosFromAPI())
//   }, [dispatch]);

//ATTEMP 1
useEffect(()=> {
    dispatch(getPosts());
    console.log("POSTS", posts);
},[dispatch])

//ATTEMPT 2
// useEffect(()=> {
//   try {
//     dispatch(() => {
//       getPosts
//     });
//     console.log("POSTS", posts);
//   } catch(e) {

//   }

// },[dispatch])


  return (
    <div className="App">

    <NavBar/>
    <Routes/>

    </div>
  )
}

export default App;
