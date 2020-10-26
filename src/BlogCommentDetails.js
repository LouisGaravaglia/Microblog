import React from "react";
import './App.css';

function BlogCommentDetails({remove, commentId, comment }) {

  return (
    <div className="BlogCommentDetails">
    
    <p><span className="BlogCommentDelete" onClick={remove}>X</span>{comment}</p>
    </div>
  )
}

export default BlogCommentDetails;
