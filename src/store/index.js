import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from "redux-thunk";
import {newsReducer} from "./reducers/newsReducer";
import {loaderReducer} from "./reducers/loaderReducer";

const rootReducer = combineReducers({
    newsReducer,
    loaderReducer
})
export const store = createStore(rootReducer, applyMiddleware(thunk))
