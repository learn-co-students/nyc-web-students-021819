import React from 'react';
import './App.css';
import data from "./data"
import TurtleCarousel from "./TurtleCarousel"
import Home from "./Home"
import NewTurtle from "./NewTurtle"
import Nav from "./Nav"

class App extends React.Component {
  state = {
    page: "new",
    turtles: data
  }

  changePage = (newPage) => {
    this.setState({
      page: newPage
    })
  }

  addTurtle = (turtleData) => {
    this.setState({
      turtles: [...this.state.turtles, turtleData]
    })
  }

  renderPage = () => {
    switch(this.state.page){
      case "home":
        return <Home turtles={this.state.turtles}/>
      case "find":
        return <TurtleCarousel turtles={this.state.turtles} />
      case "new":
        return <NewTurtle addTurtle={this.addTurtle} />
      default:
        return null
    }
  }

  render(){
    return (
      <div className="App">
        <Nav changePage={this.changePage} />
        {this.renderPage()}
      </div>
    );
  }
  
}

export default App;
