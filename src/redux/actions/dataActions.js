import axios from "axios";

const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',  
})

export const dataActionTypes = {
    SET_POSTS: 'SET_POSTS',
    SET_TODOS: 'SET_TODOS',
    SET_ALBUMS: 'SET_ALBUMS',
    SET_COMMENTS: 'SET_COMMENTS',
    DELETE_POST_BY_ID: 'DELETE_POST_BY_ID'
}

export const dataActions = {
    setPosts: (posts) => ({type: dataActionTypes.SET_POSTS, payload: posts}),
    setTodos: (todos) => ({type: dataActionTypes.SET_TODOS, payload: todos}),
    setAlbums: (albums) => ({type: dataActionTypes.SET_ALBUMS, payload: albums}),
    setComments: (comments) => ({type: dataActionTypes.SET_COMMENTS, payload: comments}),
    deletePostById: (id) => ({type: dataActionTypes.DELETE_POST_BY_ID, payload: id})
}

export const getPosts = () => async (dispatch) => {
    try {
        let res = await instance.get('posts')
        dispatch(dataActions.setPosts(res.data))
    } catch {}
}

export const getAlbums = () => async (dispatch) => {
    try {
        let res = await instance.get('albums')
        dispatch(dataActions.setAlbums(res.data))
    } catch {}
}

export const getComments = () => async (dispatch) => {
    try {
        let res = await instance.get('comments')
        dispatch(dataActions.setComments(res.data))
    } catch {}
}

export const getTodos = () => async (dispatch) => {
    try {
        let res = await instance.get('todos')
        dispatch(dataActions.setTodos(res.data))
    } catch {}
}
