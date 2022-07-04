const INITIAL_STATE = {
    favorites: []
}

export default function counterReducer(
    state = INITIAL_STATE,
    action
) {
    switch (action.type) {
        case "ADD_TO_FAVORITES":
            return {
                ...state,
                favorites: [...state.favorites, action.payload]
            }
            // [
            //     ...state.favorites ,
            //    { favorites:action.payload}
            // ]
            break;
        case "REMOVE_TO_FAVORITES":
            state.favorites.splice(state.favorites.indexOf(action.payload), 1)
            return {
                ...state,
                favorites: [...state.favorites]
            }
            break;

        default:
            return state;
    }

}