import React from "react";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {addVote} from "./actionCreators";
import './App.css';

function BlogPost({title, description, votes, id}) {
    const dispatch = useDispatch();
        const upVote = () => {
        dispatch(addVote(+id, "up"))
    }
    const downVote = () => {
        dispatch(addVote(+id, "down"))
    }
    return (
        
          <div className="BlogPost">
          <Link to={`/${id}`}>
            <h3>Title: {title}</h3>
            <h5>Description: {description}</h5>
            <p>Votes: {votes}</p>
            </Link>
            <button onClick={upVote}>UpVote</button>
            <button onClick={downVote}>DownVote</button>
            <hr/>
          </div>
        
    )
}

export default BlogPost;
