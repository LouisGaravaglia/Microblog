import { ADD_POST, REMOVE_POST, EDIT_POST, ADD_COMMENT, REMOVE_COMMENT, GET_POSTS, UPDATE_POST, GET_COMMENTS } from "./actionTypes";
const INITIAL_STATE = {posts: [], comments: []};



function rootReducer(state=INITIAL_STATE, action) {
    switch(action.type) {
        case ADD_POST:
            return {...state, posts: [...state.posts, action.newPost]};
        case REMOVE_POST:
            return {...state, posts: state.posts.filter(post => post.id !== +action.postId)};
        // case EDIT_POST:
        //     const updatedPost = state.posts.filter(post => post.id === action.id);
        //     updatedPost[0]["title"] = action.newPost["title"];
        //     updatedPost[0]["description"] = action.newPost["description"];
        //     updatedPost[0]["body"] = action.newPost["body"];
        //     const restOf = state.posts.filter(post => post.id !== action.id);
        //     return {...state, posts: [...restOf, ...updatedPost]};
        case ADD_COMMENT:
            return {...state, comments: [...state.comments, {id : action.comment.id, text : action.comment.text, post_id : action.postId}]};
        case REMOVE_COMMENT:
            const postRemovingComment = state.posts.filter(post => post.id === action.postId);
            const postComments = postRemovingComment[0]["comments"];
            const removedComment = postComments.filter(c => c.commentId !== action.commentId);
            postRemovingComment[0]["comments"] = removedComment;
            const otherPosts = state.posts.filter(post => post.id !== action.postId)
            return {...state, posts: [...otherPosts, ...postRemovingComment]}
        case GET_POSTS:
            return {...state, posts: [...action.posts]}
         case UPDATE_POST:
            const nonMatchingPosts = state.posts.filter(post => post.id !== +action.postId);
            return {...state, posts: [...nonMatchingPosts, action.updatedPost]}
        //  case GET_COMMENTS:
        //     const nonMatchingPosts = state.posts.filter(post => post.id !== +action.postId);
        //     return {...state, posts: [...nonMatchingPosts, action.updatedPost]}
        default:
            return state;
    }
}

export default rootReducer;
