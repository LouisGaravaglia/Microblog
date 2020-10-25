import React, { useState, useContext } from "react";
import {useHistory} from "react-router-dom";
import BlogContext from "./BlogContext";
import './App.css';




function BlogForm() {
    const INITIAL_STATE = {title:"", description:"", body:""}
    const {addPost} = useContext(BlogContext);
    const [formData, setFormData] = useState(INITIAL_STATE)
    const history = useHistory();
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(data => ({
            ...data,
            [name]:value
        }))
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        addPost(formData);
        setFormData(INITIAL_STATE);
        history.push("/")
    }
  return (
    <div className="BlogForm">
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
  )
}

export default BlogForm;
