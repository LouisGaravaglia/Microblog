import axios from "axios";
import { ADD_POST, REMOVE_POST, ADD_COMMENT, REMOVE_COMMENT, GET_POSTS, UPDATE_POST, GET_COMMENTS, ADD_VOTE } from "./actionTypes";

const POSTS_URL = "http://localhost:5000/api/posts"

////////////////////////////////// GET ALL POSTS //////////////////////////////////
export function getPosts() {
    return async function(dispatch) {
        const res = await axios.get(POSTS_URL);
        dispatch(retrievePosts(res.data));
    };
}
function retrievePosts(posts) {
    return {type:GET_POSTS, posts};
}

////////////////////////////////// ADD A POST //////////////////////////////////
export function addPost(data) {
    return async function(dispatch) {
        const res = await axios.post(POSTS_URL, data);
        dispatch(insertPost(res.data));
    };
}
function insertPost(newPost) {
    return {type:ADD_POST, newPost};
}

////////////////////////////////// UPDATE A POST //////////////////////////////////
export function updatePost(data, id) {
    return async function(dispatch) {
        const res = await axios.put(POSTS_URL + `/${id}`, data);
        dispatch(editPost(id, res.data))
    };
}
function editPost(postId, updatedPost) {
    return {type:UPDATE_POST, postId, updatedPost};
}

////////////////////////////////// REMOVE A POST //////////////////////////////////
export function removePost(postId) {
    return async function(dispatch) {
        await axios.delete(POSTS_URL + `/${postId}`);
        dispatch(deletePost(postId));
    };
}
function deletePost(postId) {
    return {type:REMOVE_POST, postId};
}

////////////////////////////////// ADD A COMMENT //////////////////////////////////
export function addComment(id, text) {
    return async function(dispatch) {
        const res = await axios.post(POSTS_URL + `/${id}/comments`, {text});
        dispatch(insertComment(id, res.data))
    };
}
function insertComment(postId, comment) {
    return {type:ADD_COMMENT, postId, comment};
}

////////////////////////////////// GET COMMENTS //////////////////////////////////
export function getComments() {
    return async function(dispatch) {
        const res = await axios.get(POSTS_URL + `/0/comments`);
        dispatch(retrieveComments(res.data))
    };
}
function retrieveComments(comments) {
    return {type:GET_COMMENTS, comments};
}

////////////////////////////////// REMOVE A COMMENT //////////////////////////////////
export function removeComment(postId, commentId) {
    return async function(dispatch) {
        await axios.delete(POSTS_URL + `/${postId}/comments/${commentId}`);
        dispatch(deleteComment(postId, commentId));
    };
}
function deleteComment(postId, commentId) {
    return {type:REMOVE_COMMENT, postId, commentId};
}

////////////////////////////////// UPVOTE OR DOWNVOTE//////////////////////////////////
export function addVote(postId, direction) {
    return async function(dispatch) {
        const res = await axios.post(POSTS_URL + `/${postId}/vote/${direction}`);
        dispatch(updateVote(postId, res.data));
    };
}
function updateVote(postId, votes) {
    return {type:ADD_VOTE, postId, votes};
}
