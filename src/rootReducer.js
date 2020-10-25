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
            return "";
        default:
            return state;
    }
}

export default rootReducer;
