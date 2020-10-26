import axios from "axios";
import { ADD_POST, REMOVE_POST, EDIT_POST, ADD_COMMENT, REMOVE_COMMENT, GET_POSTS } from "./actionTypes";

const POSTS_URL = "http://localhost:5000/api/posts"

export function getPosts() {
    return async function(dispatch) {
        const res = await axios.get(POSTS_URL);
        console.log("DATA", res);
        dispatch(retrievePosts(res.data));
    };
}

// COURSE EXAMPLE:
// export function getTodosFromAPI() {
//   return async function(dispatch) {
//     let res = await axios.get('/api/todos');
//     dispatch(gotTodos(res.data.todos));
//   };
// }


function retrievePosts(posts) {
    return {type:GET_POSTS, posts};
}


// COURSE EXAMPLE
// function gotTodos(todos) {
//   return { type: "LOAD_TODOS", todos };
// }