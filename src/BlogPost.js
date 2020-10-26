import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import './App.css';




function BlogPost({title, description, body, id}) {

  return (
    <Link to={`/${id}`}>
    <div className="BlogPost">
    <h3>Title: {title}</h3>
    <h5>Description: {description}</h5>
    <hr/>
    </div>
    </Link>
  )
}

export default BlogPost;
