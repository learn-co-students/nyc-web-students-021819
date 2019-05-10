const defaultState = {
  turtles: [],
}

function reducer(state = defaultState, action){
  console.log("3. IN THE REDUCER", action)
  switch(action.type){
    case "ADD_TURTLE":
      return {...state, turtles: [...state.turtles, action.payload]}
    case "SET_TURTLES":
      return {...state, turtles: action.payload}
    default:
      return state
  }
}

export default reducer