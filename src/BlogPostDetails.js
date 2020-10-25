import React, {useContext} from "react";
import {useParams} from "react-router-dom";
import BlogContext from "./BlogContext";
import './App.css';

function BlogPostDetails() {
  const {posts} = useContext(BlogContext);
  const {id} = useParams();
  const post = posts.filter(p => p.id === id);
  return (
    <div className="BlogPostDetails">
      <h3>Title: {post[0].title}</h3>
      <h5>Description: {post[0].description}</h5>
      <p>Body: {post[0].body}</p>
      <p>Id: {post[0].id}</p>
      <hr/>
    </div>
  )
}

export default BlogPostDetails;
