import React from 'react'
import { connect } from 'react-redux'
import { selectPlayer } from '../actions'

const Player = ({ player, selectPlayer, destroyPlayer }) => {
  return (
    <div onClick={() => selectPlayer(player)}>
      <p>{player.name}</p>
    </div>
  )
}


function mapDispatchToProps(dispatch) {
  return {
    selectPlayer: function(player) {
      dispatch(selectPlayer(player))
    }
  }
}

export default connect(null, mapDispatchToProps)(Player)
