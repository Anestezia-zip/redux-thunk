import { DataInitialState } from '../interfaces/interfaces';
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { DataService } from "./apiServices.ts";

const initialState: DataInitialState = {
    posts: [],
    todos: [],
    albums: [],
    comments: [],
}

export const createThunk = (name: string, serviceMethod: () => Promise<any>) => {
    return createAsyncThunk(name, async () => {
        const response = await serviceMethod();
        return response.data;
    });
};

export const getTodos = createThunk('/api/getTodos', DataService.getTodos)
export const getPosts = createThunk('data/getPosts', DataService.getPosts);
export const getAlbums = createThunk('data/getAlbums', DataService.getAlbums);
export const getComments = createThunk('data/getComments', DataService.getComments);

export const DataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        const thunks = [
            { thunk: getTodos, stateKey: 'todos' },
            { thunk: getPosts, stateKey: 'posts' },
            { thunk: getAlbums, stateKey: 'albums' },
            { thunk: getComments, stateKey: 'comments' },
        ]

        thunks.forEach(({ thunk, stateKey }) => {
            builder
                .addCase(thunk.fulfilled, (state, action) => {
                    state[stateKey] = action.payload;
                })
                .addCase(thunk.rejected, (state, action) => {
                    console.log(`Error type: ${action.error.name}, message: ${action.error.message}`);
                })
        })
    }
})

export default DataSlice.reducer