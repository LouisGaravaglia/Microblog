import React, {useContext} from "react";
import BlogPost from "./BlogPost";
import BlogContext from "./BlogContext";
import './App.css';




function BlogList() {
    const {posts} = useContext(BlogContext);
  return (
    <div className="BlogList">
        {posts.map((p, idx) => <BlogPost key={idx} id={p.id} title={p.title} description={p.description} body={p.body}/>)}
    </div>
  )
}

export default BlogList;
