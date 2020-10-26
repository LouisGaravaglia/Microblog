import { ADD_POST, REMOVE_POST, EDIT_POST, ADD_COMMENT, REMOVE_COMMENT } from "./actionTypes";
const INITIAL_STATE = {posts: []};



function rootReducer(state=INITIAL_STATE, action) {
    switch(action.type) {
        case ADD_POST:
            return {...state, posts: [...state.posts, action.post]};
        case REMOVE_POST:
            return {...state, posts: state.posts.filter(post => post.id !== action.id)};
        case EDIT_POST:
            const updatedPost = state.posts.filter(post => post.id === action.id);
            updatedPost[0]["title"] = action.newPost["title"];
            updatedPost[0]["description"] = action.newPost["description"];
            updatedPost[0]["body"] = action.newPost["body"];
            const restOf = state.posts.filter(post => post.id !== action.id);
            return {...state, posts: [...restOf, ...updatedPost]};
        case ADD_COMMENT:
            const postGettingComment = state.posts.filter(post => post.id === action.postId);
            console.log("postGettingComment", postGettingComment);
            console.log("action.postId", action.postId);
            console.log("action.comment", action.comment);
            if (postGettingComment[0]["comments"]) {
                postGettingComment[0]["comments"] = [...postGettingComment[0]["comments"], action.comment];
            } else {
                postGettingComment[0]["comments"] = [action.comment];
            }
            const remainingPosts = state.posts.filter(post => post.id !== action.postId);
            return {...state, posts: [...remainingPosts, ...postGettingComment]};
        case REMOVE_COMMENT:
            const postRemovingComment = state.posts.filter(post => post.id === action.postId);
            const postComments = postRemovingComment[0]["comments"];
            const removedComment = postComments.filter(c => c.commentId !== action.commentId);
            postRemovingComment[0]["comments"] = removedComment;
            const otherPosts = state.posts.filter(post => post.id !== action.postId)
            return {...state, posts: [...otherPosts, ...postRemovingComment]}
        default:
            return state;
    }
}

export default rootReducer;
