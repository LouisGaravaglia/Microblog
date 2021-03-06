import { ADD_POST, REMOVE_POST, ADD_COMMENT, REMOVE_COMMENT, GET_POSTS, UPDATE_POST, GET_COMMENTS, ADD_VOTE } from "./actionTypes";
const INITIAL_STATE = {posts: [], comments: []};

function rootReducer(state=INITIAL_STATE, action) {
    switch(action.type) {
        case ADD_POST:
            return {...state, posts: [...state.posts, action.newPost]};
        case REMOVE_POST:
            return {...state, posts: state.posts.filter(post => post.id !== +action.postId)};
        case ADD_COMMENT:
            return {...state, comments: [...state.comments, {id : action.comment.id, text : action.comment.text, post_id : action.postId}]};
        case REMOVE_COMMENT:
            return {...state, comments: state.comments.filter(c => c.id !== +action.commentId)};
        case GET_POSTS:
            const posts = action.posts;
            posts.sort(function(a, b) {
                return b.votes - a.votes;
            });
            return {...state, posts: posts}
         case UPDATE_POST:
            const nonMatchingPosts = state.posts.filter(post => post.id !== +action.postId);
            return {...state, posts: [...nonMatchingPosts, action.updatedPost]}
         case GET_COMMENTS:
            return {...state, comments: action.comments}
         case ADD_VOTE:
            const nonMatching = state.posts.filter(post => post.id !== +action.postId);
            const updatedPost = state.posts.filter(post => post.id === +action.postId);
            updatedPost[0]["votes"] = action.votes["votes"];
            const postsSortedByVotes = [...nonMatching, ...updatedPost]
            postsSortedByVotes.sort(function(a, b) {
                return b.votes - a.votes;
            });
            return {...state, posts: postsSortedByVotes}
        default:
            return state;
    }
}

export default rootReducer;
