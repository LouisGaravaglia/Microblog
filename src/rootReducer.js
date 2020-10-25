import { ADD_POST, REMOVE_POST, EDIT_POST } from "./actionTypes";
const INITIAL_STATE = {posts: []};



function rootReducer(state=INITIAL_STATE, action) {
    switch(action.type) {
        case ADD_POST:
            console.log("ADDING A POST: ", state.posts);
            return {...state, posts: [...state.posts, action.post]};
        case REMOVE_POST:
            return {...state, posts: state.posts.filter(post => post.id !== action.id)}
        case EDIT_POST:
            console.log("ACTION ID: ", action.id);
            console.log("POSTS IN STATE: ", state.posts);
             const updatedPost = state.posts.filter(post => post.id === action.id)
            console.log("updatedPost: ", updatedPost);
            updatedPost[0]["title"] = action.newPost["title"];
            updatedPost[0]["description"] = action.newPost["description"];
            updatedPost[0]["body"] = action.newPost["body"];
            const restOfCart = state.posts.filter(post => post.id !== action.id)
            return {...state, posts: [...restOfCart, ...updatedPost]}
        default:
            return state;
    }
}

export default rootReducer;
