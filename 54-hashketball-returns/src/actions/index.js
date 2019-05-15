import { SELECT_PLAYER } from '../constants/ActionTypes'

export function selectPlayer(player) {
  return {
    type: SELECT_PLAYER,
    payload: player
  }
}
