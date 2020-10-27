import axios from "axios";
import { ADD_POST, REMOVE_POST, EDIT_POST, ADD_COMMENT, REMOVE_COMMENT, GET_POSTS, UPDATE_POST } from "./actionTypes";

const POSTS_URL = "http://localhost:5000/api/posts"

// COURSE EXAMPLE:
// export function getTodosFromAPI() {
//   return async function(dispatch) {
//     let res = await axios.get('/api/todos');
//     dispatch(gotTodos(res.data.todos));
//   };
// }
// COURSE EXAMPLE
// function gotTodos(todos) {
//   return { type: "LOAD_TODOS", todos };
// }


////////////////////////////////// GET ALL POSTS //////////////////////////////////
export function getPosts() {
    return async function(dispatch) {
        const res = await axios.get(POSTS_URL);
        console.log("DATA", res);
        dispatch(retrievePosts(res.data));
    };
}

function retrievePosts(posts) {
    return {type:GET_POSTS, posts};
}

////////////////////////////////// ADD A POST //////////////////////////////////
export function addPost(data) {
    return async function(dispatch) {
        console.log("THIS IS WHAT IM ADDING TO DATA: ", data);
        const res = await axios.post(POSTS_URL, data);
        console.log("RES AFTER ADDING POST", res.data);
        const response = await axios.get(POSTS_URL);
        console.log("API CALL FOR ALL AFTER POST", response.data);

        // getPosts()
        dispatch(retrievePosts(response.data));
    };
}

////////////////////////////////// UPDATE A POST //////////////////////////////////
export function updatePost(data, id) {
    return async function(dispatch) {
        // console.log("THIS IS WHAT IM ADDING TO DATA: ", data);
        console.log("THIS IS DATA: ", data);
                console.log("THIS IS ID: ", id);

        const res = await axios.put(POSTS_URL + `/${id}`, data);
        console.log("RES AFTER PUT REQ: ", res);
        // dispatch(getPosts())
        dispatch(editPost(id, res.data))
    };
}

  function editPost(postId, updatedPost) {
    return {type:UPDATE_POST, postId, updatedPost};
}

//   function updatePost(id, newPost) {
//     return {type:GET_POSTS, id, newPost};
// }

// function addNewPost(posts) {
//     return {type:GET_POSTS, posts};
// }

// export function removePost(postId) {
//     return async function(dispatch) {
//         const res = await axios.delete(POSTS_URL + `/${postId}`);
//         console.log("DELETED", res);
//         dispatch(deletePost(postId));
//     };
// }

// function deletePost(postId) {
//     return {type:REMOVE_POST, postId};
// }


