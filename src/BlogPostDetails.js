import React, {useState} from "react";
import {useParams, useHistory} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {updatePost, removePost} from "./actionCreators";
import BlogComments from "./BlogComments";
import './App.css';

function BlogPostDetails() {
    const INITIAL_STATE = {title:"", description:"", body:""}
    const [formData, setFormData] = useState(INITIAL_STATE);
    const [isHidden, setIsHidden] = useState(true);
    const posts = useSelector(store => store.posts);
    const {id} = useParams();
    const history = useHistory();
    const dispatch = useDispatch();
    const post = posts.filter(p => p.id === +id);
    const handleChange = (e) => {
          const {name, value} = e.target;
          setFormData(data => ({
              ...data,
              [name]:value
          }))
    }
    const toggleEditPostForm = () => {
      setIsHidden(boolean => !boolean)
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch(updatePost(formData, id));
        setFormData(INITIAL_STATE);
    }
    const remove = async (postId)  => {
      dispatch(removePost(postId));
      history.push("/")
    }
    return (
        <div className="BlogPostDetails">
        
          <h3>Title: {post[0]["title"]}</h3>
          <h5>Description: {post[0]["description"]}</h5>
          <p>Body: {post[0]["body"]}</p>
          <br></br>
          <button onClick={() => remove(id)}>DELETE</button>
          <button onClick={toggleEditPostForm}>EDIT</button>
          <br></br>
        
          <div className={isHidden ? "EditBlogPost hidden" : "EditBlogPost"}>
          <hr/>
        <form onSubmit={handleSubmit}>
            <label htmlFor="title">Title:</label>
            <input
                type="text"
                id="title"
                name="title"
                placeholder="Title"
                value={formData.title}
                onChange={handleChange}
            />
            <label htmlFor="description">Description:</label>
            <input
                type="text"
                id="description"
                name="description"
                placeholder="Description"
                value={formData.description}
                onChange={handleChange}
            />
            <label htmlFor="body">Body:</label>
            <textarea 
                rows = "10" 
                cols = "46" 
                id="body"
                name="body"
                placeholder="Body"
                value={formData.body}
                onChange={handleChange}
            ></textarea>
            <button>SUBMIT</button>
        </form>
        </div>
        <BlogComments id={id}/>
        </div>
    )
}

export default BlogPostDetails;
