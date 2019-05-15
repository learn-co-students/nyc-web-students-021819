import teamsReducer from './teams'
import beefReducer from './beef'
import { combineReducers } from 'redux'

export default combineReducers({
  teams: teamsReducer,
  beef: beefReducer
})
