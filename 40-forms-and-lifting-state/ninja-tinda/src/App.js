import React from 'react';
import './App.css';
import data from "./data"
import TurtleCarousel from "./TurtleCarousel"
import Home from "./Home"
import NewTurtle from "./NewTurtle"
import Nav from "./Nav"

class App extends React.Component {
  state = {
    page: "find"
  }

  changePage = (newPage) => {
    this.setState({
      page: newPage
    })
  }

  renderPage = () => {
    switch(this.state.page){
      case "home":
        return <Home />
      case "find":
        return <TurtleCarousel turtles={data} />
      case "new":
        return <NewTurtle />
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
