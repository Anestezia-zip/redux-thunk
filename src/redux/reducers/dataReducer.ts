// import { dataActionTypes, dataActions } from "../actions/dataActions.ts"


// const dataReducer = (state: InitialState = initialState, action): InitialState => {
//     switch(action.type){
//         case dataActionTypes.SET_POSTS:
//             return { ...state, posts: action.payload };
//         case dataActionTypes.SET_TODOS:
//             return { ...state, todos: action.payload };
//         case dataActionTypes.SET_ALBUMS:
//             return { ...state, albums: action.payload };
//         case dataActionTypes.SET_COMMENTS:
//             return { ...state, comments: action.payload };
//         case dataActionTypes.DELETE_POST_BY_ID:
//             return { 
//                 ...state,
//                 posts: state.posts.filter((post) => post.id !== action.payload)
//             }
//         default:
//             return state
//     }
// }

// export default dataReducer
