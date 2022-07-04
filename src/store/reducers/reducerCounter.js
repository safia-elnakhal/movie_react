const INITIAL_STATE = {
    count: 0
}

export default function counterReducer(
    state = INITIAL_STATE,
    action
) {
    switch (action.type) {
        case "INCREASE_COUNTER":
            return {
                ...state,
                count: state.count + 1
            };
  
         case "DECREASE_COUNTER":
    return {
          ...state,
          count:state.count -1
    }
   
    default:
        return state
}
}