import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import { thunk } from "redux-thunk";
import dataReducer from "./reducers/dataReducer.ts";
import ricknMortyReducer from "./reducers/ricknMortyReducer.ts";


const rootReducer = combineReducers({
    data: dataReducer,
    ricknMortyReducer: ricknMortyReducer,
})

const composeEnhancers = composeWithDevTools({
    trace: true,
    traceLimit: 25
})

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

export type PropertiesTypes<T> = T extends { [key: string]: infer U } ? U : never;
export type AppStateType = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch

export default store;