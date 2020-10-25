import React, {useState} from "react";
import './App.css';
import Routes from "./Routes";
import NavBar from "./NavBar";
import BlogContext from "./BlogContext";
import { useSelector } from "react-redux";





function App() {
  const [posts, setPosts] = useState([]);
    const addPost = (post) => {
        setPosts(p => ([...p, post]));
    }
  return (
    <div className="App">
    <BlogContext.Provider value={{addPost, posts}}>
    <NavBar/>
    <Routes/>
    </BlogContext.Provider>
    </div>
  )
}

export default App;
