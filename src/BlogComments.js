import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addComment, removeComment} from "./actionCreators";
import BlogCommentDetails from "./BlogCommentDetails";
import './App.css';

function BlogComments({id}) {
  const [text, setComment] = useState("");
  const comments = useSelector(store => store.comments);
  const existingComments = comments.filter(c => c.post_id === +id);
  const dispatch = useDispatch();
  const remove = (id, commentId)  => {
    dispatch(removeComment(id, commentId));
  }
  let mappedComments; 
  if (existingComments) {
    mappedComments = existingComments.map(c => <BlogCommentDetails remove={() => remove(+id, c.id)} key={c.id} commentId={c.id} comment={c.text}/>)
  }
  const handleChange = (e) => {
        setComment(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addComment(+id, text));
        setComment("");
        
    }
  return (
      
    <div className="BlogComments">
    <h3>Comments</h3>
    {mappedComments}
    <form onSubmit={handleSubmit}>
        <input
            type="text"
            name="comment"
            placeholder="Comment"
            value={text}
            onChange={handleChange}
        />
        <button>Add</button>
    </form>
    </div>
  )
}

export default BlogComments;
