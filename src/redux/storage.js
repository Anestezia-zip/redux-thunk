import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import { thunk } from "redux-thunk";
import dataReducer from "./reducers/dataReducer";


const rootReducer = combineReducers({
    data: dataReducer,
})

const composeEnhancers = composeWithDevTools({
    trace: true,
    traceLimit: 25
})

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

export default store;