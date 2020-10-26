import React, {useContext, useState, useEffect} from "react";
import { v4 as uuid } from 'uuid';
import {useDispatch, useSelector} from "react-redux";
import {removeComment, addComment} from "./actions";
import BlogCommentDetails from "./BlogCommentDetails";
import './App.css';

function BlogComments({id}) {
  const [comment, setComment] = useState("");
  const posts = useSelector(store => store.posts)
  const post = posts.filter(post => post.id === id);
  const existingComments = post["comments"];
  const dispatch = useDispatch();
  console.log("post: ", post);
  console.log("EXISTING COMMENTS!: ", existingComments);
  let mappedComments; 
  if (existingComments) {
    mappedComments = existingComments.map(c => <BlogCommentDetails remove={() => remove(id, c.commentId)} key={c.commentId} commentId={c.commentId} comment={c.comment}/>)

  }
  const handleChange = (e) => {
        setComment(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const commentId = uuid();
        dispatch(addComment(id, {commentId, comment}));
        setComment("");
        
    }

  const remove = (id, commentId)  => {
    dispatch(removeComment(id, commentId));
  }

  return (
      
    <div className="BlogComments">
    <h3>Comments</h3>
    {mappedComments}
      {/* {existingComments.map(c => <BlogCommentDetails remove={() => remove(id, c.id)} key={c.id} commentId={c.id} comment={c.comment}/>)} */}
    <form onSubmit={handleSubmit}>
        <input
            type="text"
            name="comment"
            placeholder="Comment"
            value={comment}
            onChange={handleChange}
        />
        <button>Add</button>
    </form>
    </div>
  )
}

export default BlogComments;
