import ricknMortyReducer from "./slices/ricknMortySlice.ts";
import dataReducer from "./slices/dataSlice.ts";
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
    reducer: {
        data: dataReducer,
        ricknMorty: ricknMortyReducer
    },
})

export type AppStateType = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;