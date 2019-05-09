import { ADD_QUESADILLA, ADD_TACO, REMOVE_TACO } from './types'

const defaultState = {
  quesadillas: [],
  tacos: []
}

function reducer(prevState = defaultState, action){
  // WHATEVER is returned from this function becomes your new state
  switch(action.type){
    case ADD_QUESADILLA:
      return {...prevState, quesadillas: [...prevState.quesadillas, action.payload]}
      break;
    case ADD_TACO: 
      return {...prevState, tacos: [...prevState.tacos, action.payload]}
      break;
    case REMOVE_TACO:
      return {...prevState, tacos: prevState.tacos.filter(taco => taco.name !== action.payload)}
      break;
    default:
      return prevState
  }

}

export default reducer