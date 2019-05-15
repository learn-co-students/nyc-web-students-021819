import gamesData from '../gamesData'
import { SELECT_PLAYER } from '../constants/ActionTypes'

const initialState = {
  teams: gamesData.teams,
  selectedPlayer: null
}

function teamsReducer(state = initialState, action) {
  switch (action.type){
    case SELECT_PLAYER:
      return {
        ...state,
        selectedPlayer: action.payload
      }
    default:
      return state
  }
}

export default teamsReducer
