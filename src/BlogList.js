import React from "react";
import BlogPost from "./BlogPost";
import { useSelector } from "react-redux";
import './App.css';




function BlogList() {
    const posts = useSelector(store => store.posts);
    return (
      <div className="BlogList">
          {posts.map((p, idx) => <BlogPost key={idx} id={p.id} title={p.title} description={p.description} votes={p.votes}/>)}
      </div>
    )
}

export default BlogList;
