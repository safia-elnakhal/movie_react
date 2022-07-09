
const INITIAL_STATE = {
    movieList: [],
    movieDetails :{}
}


export default function movieReducer(
    state= INITIAL_STATE ,action ){
   switch(action.type){
   case"GET_MOVIES-LIST":
     return {...state,movieList:action.payload};
     case"GET_MOVIE_DETAILS":
     return {...state,movieDetails:action.payload};
     default:
           return state ;

   }



}