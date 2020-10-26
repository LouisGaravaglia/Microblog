import { ADD_POST, REMOVE_POST, EDIT_POST, ADD_COMMENT, REMOVE_COMMENT } from "./actionTypes";

 export const addPost = (post) => {
      return {type:ADD_POST, post};
  };
  
export const removePost = (id) => {
      return {type:REMOVE_POST, id}
  };

  export const editPost = (id, newPost) => {
      return {type:EDIT_POST, id, newPost}
  };

  export const addComment = (postId, comment) => {
      return {type:ADD_COMMENT, postId, comment}
  };

  export const removeComment = (postId, commentId) => {
      return {type:REMOVE_COMMENT, postId, commentId}
  };