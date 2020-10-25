import React, {useState, useEffect} from "react";
import './App.css';




function BlogPost({title, description, body}) {

  return (
    <div className="BlogPost">
    <h3>Title: {title}</h3>
    <h5>Description: {description}</h5>
    <p>Body: {body}</p>
    </div>
  )
}

export default BlogPost;
