import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Character, Info } from '../interfaces/interfaces.ts';
import { RicknMortyService } from "./apiServices.ts";

export interface RicknMortyData {
    info: Info,
    results: Character[]
}
const initialState: RicknMortyData = {
    info: {} as Info,
    results: [],
}

// ми діспатчимо санку, яка описана тут, і вона повертає Promise внаслідок здійснення АРІ Call-у
export const getFirstPageThunk = createAsyncThunk( 
    '/api/character',
    async () => {
        return await RicknMortyService.getCharacters()
            .then(res => res.data)
    }
)
export const getNextPageThunk = createAsyncThunk(
    '/api/character?page=',
    async (url: string) => {
        try {
            return await RicknMortyService.getNextCharacters(url)
            .then(res => res.data)
        } catch (e) {}
    }
)

export const RicknMortySlice = createSlice({
    name: 'ricknMorty',
    initialState,
    reducers: {
        // getFirstPage: (state, action: PayloadAction<RicknMortyData>) => {
        //     console.log('Action payload:', action.payload);
        //     state.results = action.payload.results;
        //     state.info = action.payload.info;
        //     console.log('Updated state:', state);
        // },
        // getNextPage: (state, action: PayloadAction<RicknMortyData>) => {
        //     state.results = [...state.results, ...action.payload.results];
        //     state.info = action.payload.info;
        // },
    },
    extraReducers: (builder) => { // потім цей return з санки підхвачує extraReducer
        builder
            .addCase(getFirstPageThunk.fulfilled, (state, action) => {
                state.results = action.payload.results;
                state.info = action.payload.info;
            })
            .addCase(getFirstPageThunk.rejected, (state, action) => {
                console.log(`Error type: ${action.error.name}, message: ${action.error.message}`);
            })
            .addCase(getNextPageThunk.fulfilled, (state, action) => {
                state.results = [...state.results, ...action.payload.results];
                state.info = action.payload.info;
            })
            .addCase(getNextPageThunk.rejected, (state) => {
                console.log('Error');
            });
    }
})

// export const { getFirstPage, getNextPage } = RicknMortySlice.actions
export default RicknMortySlice.reducer