import React, { Component } from 'react';
import './App.css';
import gamesData from './gamesData'
import TeamList from './components/TeamList'
import PlayerDetails from './components/PlayerDetails'
import NavHeader from './components/Header'
import 'semantic-ui-css/semantic.min.css';
import { connect } from 'react-redux'
import { selectPlayer } from './actions'


class App extends Component {
  // state = {
  //   teams: gamesData.teams,
  //   selectedPlayer: null
  // }

  // handleSelectPlayer = (player) => {
  //   this.setState({
  //     selectedPlayer: player
  //   })
  // }

  render() {
    console.log(this.props)
    return (
      <div className="App">
        <NavHeader />

        <TeamList />
        {
          !this.props.selectedPlayer ?
          <div> Click Player for Details </div>
          :
          <React.Fragment>
            <p onClick={ () => this.props.selectPlayer(null) }>Close Card</p>
            <PlayerDetails selectedPlayer={this.props.selectedPlayer}/>
          </React.Fragment>
      }


      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    selectedPlayer: state.teams.selectedPlayer,
    allState: state
  }
}

function mapDispatchToProps(dispatch) {
  return {
    selectPlayer: function(player) {
      dispatch(selectPlayer(player))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
