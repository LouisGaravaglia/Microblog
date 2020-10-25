import React, { useState } from "react";
import './App.css';




function BlogForm() {
    const INITIAL_STATE = {title:"", description:"", body:""}
    const [formData, setFormData] = useState(INITIAL_STATE)
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(data => ({
            ...data,
            [name]:value
        }))
    }
    const handleSubmit = (e) => {
        e.preventDefault();

        setFormData(INITIAL_STATE);
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
        >
         </textarea>
        {/* <input
            type="text"
            id="body"
            name="body"
            placeholder="Body"
            value={formData.body}
            onChange={handleChange}
        /> */}
        <button>SUBMIT</button>
    </form>
    </div>
  )
}

export default BlogForm;
