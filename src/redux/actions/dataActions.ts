// import axios from "axios";
// import { Dispatch } from "@reduxjs/toolkit";

// const instance = axios.create({
//     baseURL: 'https://jsonplaceholder.typicode.com/',  
// })

// const ricknMortyInstance = axios.create({
//     baseURL: 'https://rickandmortyapi.com/api',  
// })

// export const dataActionTypes = {
//     SET_POSTS: 'SET_POSTS',
//     SET_TODOS: 'SET_TODOS',
//     SET_ALBUMS: 'SET_ALBUMS',
//     SET_COMMENTS: 'SET_COMMENTS',
//     DELETE_POST_BY_ID: 'DELETE_POST_BY_ID'
// } as const;


// export const dataActions = {
//     setPosts: (posts: Post[]) => ({type: dataActionTypes.SET_POSTS, payload: posts} as const),
//     setTodos: (todos: Todo[]) => ({type: dataActionTypes.SET_TODOS, payload: todos} as const),
//     setAlbums: (albums: Album[]) => ({type: dataActionTypes.SET_ALBUMS, payload: albums} as const),
//     setComments: (comments: Comment[]) => ({type: dataActionTypes.SET_COMMENTS, payload: comments} as const),
//     deletePostById: (id: number) => ({type: dataActionTypes.DELETE_POST_BY_ID, payload: id} as const)
// }

// const getData = async (url: string, action: (data: any) => void, dispatch: Dispatch<any>) => {
//     try {
//         let res = await instance.get(url)
//         dispatch(action(res.data));
//     } catch {}
// }

// export const DataService = {
//     getTodos: () => instance.get<Todo[]>('todos'),
//     getPosts: () => instance.get<Post[]>('posts'),
//     getAlbums: () => instance.get<Album[]>('albums'),
//     getComments: () => instance.get<Comment[]>('comments'),
// };


// export const RicknMortyService = {
//     getCharacters: () => {
//         return ricknMortyInstance.get('character')
//     },
//     getNextCharacters: (url) => {
//         return axios.get(url)
//     },
// }

// export const getPosts = () => async (dispatch) => {
//     try {
//         let res = await instance.get('posts')
//         dispatch(dataActions.setPosts(res.data))
//     } catch {}
// }
// export const getAlbums = () => async (dispatch) => {
//     try {
//         let res = await instance.get('albums')
//         dispatch(dataActions.setAlbums(res.data))
//     } catch {}
// }
// export const getComments = () => async (dispatch) => {
//     try {
//         let res = await instance.get('comments')
//         dispatch(dataActions.setComments(res.data))
//     } catch {}
// }
// export const getTodos = () => async (dispatch) => {
//     try {
//         let res = await instance.get('todos')
//         dispatch(dataActions.setTodos(res.data))
//     } catch {}
// }

// export const RicknMortyService = {
//     getCharacters: (dispatch) => {
//         ricknMortyInstance.get('character')
//             .then(res => dispatch(ricknMortyActions.getFirstPage(res.data)))
//     },
//     getNextCharacters: (dispatch, url) => {
//         axios.get(url)
//             .then(res => dispatch(ricknMortyActions.getNextPage(res.data)))
//     },
// }

// export type DataActionTypes = 
//     | ReturnType<typeof dataActions.setPosts>
//     | ReturnType<typeof dataActions.setTodos>
//     | ReturnType<typeof dataActions.setAlbums>
//     | ReturnType<typeof dataActions.setComments>
//     | ReturnType<typeof dataActions.deletePostById>;
