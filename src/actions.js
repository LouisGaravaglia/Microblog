import { ADD_POST, REMOVE_POST, EDIT_POST } from "./actionTypes";

 export const addPost = (post) => {
      return {type:ADD_POST, post};
  };
  
export const removePost = (id) => {
      return {type:REMOVE_POST, id}
  };

  export const editPost = (id, newPost) => {
      return {type:EDIT_POST, id, newPost}
  };