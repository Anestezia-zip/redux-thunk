import { PropertiesTypes } from './../storage';
import { dataActionTypes, dataActions } from "../actions/dataActions.ts"

export interface InitialState {
    posts: Post[] | [],
    todos: Todo[] | [],
    albums: Album[] | [],
    comments: Comment[] | [],
}
export interface Post {
    userId: number,
    id: number,
    title: string,
    body: string
}
export interface Todo {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}
export interface Album {
    userId: number,
    id: number,
    title: string,
}
export interface Comment {
    postId: number,
    id: number,
    name: string,
    email: string,
    body: string
}

const initialState: InitialState = {
    posts: [],
    todos: [],
    albums: [],
    comments: [],
}

export type DataActionsType = ReturnType<PropertiesTypes<typeof dataActions>>

const dataReducer = (state: InitialState = initialState, action: DataActionsType): InitialState => {
    switch(action.type){
        case dataActionTypes.SET_POSTS:
            return { ...state, posts: action.payload };
        case dataActionTypes.SET_TODOS:
            return { ...state, todos: action.payload };
        case dataActionTypes.SET_ALBUMS:
            return { ...state, albums: action.payload };
        case dataActionTypes.SET_COMMENTS:
            return { ...state, comments: action.payload };
        case dataActionTypes.DELETE_POST_BY_ID:
            return { 
                ...state,
                posts: state.posts.filter((post) => post.id !== action.payload)
            }
        default:
            return state
    }
}

export default dataReducer
