import { combineReducers } from "redux";
import counterReducer from "./reducerCounter";
import favoritesReducer from "./favorite";
import movieReducer from "./reducerMovies";
import languageReducer from "./languages";


export default combineReducers({
    count:counterReducer,
    favorites:favoritesReducer,
    movies:movieReducer, 
    lang:languageReducer,
})