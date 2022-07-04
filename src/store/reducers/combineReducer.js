import { combineReducers } from "redux";
import counterReducer from "./reducerCounter";
import favoritesReducer from "./favorite";


export default combineReducers({
    count:counterReducer,
    favorites:favoritesReducer,
})