import React from "react";
import './App.css';




function BlogForm() {
  return (
    <div className="BlogForm">
    <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input
            type="text"
            id="title"
            name="title"
            placeholder="Title"
            value={FormData.title}
            onChange={handleChange}
        />
        <label htmlFor="description">Description:</label>
        <input
            type="text"
            id="description"
            name="description"
            placeholder="Description"
            value={FormData.description}
            onChange={handleChange}
        />
        <label htmlFor="body">Body:</label>
        <input
            type="text"
            id="body"
            name="body"
            placeholder="Body"
            value={FormData.body}
            onChange={handleChange}
        />
    </form>
    </div>
  )
}

export default BlogForm;
