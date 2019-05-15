import React, { Component } from 'react';
import './App.css';
import gamesData from './gamesData'
import TeamList from './components/TeamList'
import PlayerDetails from './components/PlayerDetails'
import NavHeader from './components/Header'
import 'semantic-ui-css/semantic.min.css';


class App extends Component {
  state = {
    teams: gamesData.teams,
    selectedPlayer: null
  }

  handleSelectPlayer = (player) => {
    this.setState({
      selectedPlayer: player
    })
  }

  render() {
    return (
      <div className="App">
        <NavHeader />
        <TeamList teams={this.state.teams} selectPlayer={this.handleSelectPlayer}/>
        {!this.state.selectedPlayer ? <div> Click Player for Details </div> :
          <PlayerDetails selectedPlayer={this.state.selectedPlayer}/>}
      </div>
    );
  }
}

export default App;
