import {configureStore} from "@reduxjs/toolkit";
import {combineReducers} from "@reduxjs/toolkit";
import rootReducer from "../reducer/rootReducer";

let store=configureStore(
    {
        reducer:combineReducers(rootReducer())
    }
)

export default store