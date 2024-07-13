import axios from "axios";
import { Dispatch } from "@reduxjs/toolkit";
import { Album, Post, Todo, Comment } from "../interfaces/interfaces";

const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',  
})

const ricknMortyInstance = axios.create({
    baseURL: 'https://rickandmortyapi.com/api',  
})

const getData = async (url: string, action: (data: any) => void, dispatch: Dispatch<any>) => {
    try {
        let res = await instance.get(url)
        dispatch(action(res.data));
    } catch {}
}

export const DataService = {
    getTodos: () => instance.get<Todo[]>('todos'),
    getPosts: () => instance.get<Post[]>('posts'),
    getAlbums: () => instance.get<Album[]>('albums'),
    getComments: () => instance.get<Comment[]>('comments'),
};

export const RicknMortyService = {
    getCharacters: () => {
        return ricknMortyInstance.get('character')
    },
    getNextCharacters: (url) => {
        return axios.get(url)
    },
}