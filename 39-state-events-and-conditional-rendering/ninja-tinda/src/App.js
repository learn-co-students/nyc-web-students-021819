import React from 'react';
import './App.css';
import data from "./data"
import TurtleCarousel from "./TurtleCarousel"
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
        return "You're HOME"
      case "find":
        return <TurtleCarousel turtles={data} />
      case "new":
        return "You're on NEW"
      default:
        return null
    }
  }

  render(){
    console.log(this.state.page)
    return (
      <div className="App">
        <Nav changePage={this.changePage} />
        {this.renderPage()}
      </div>
    );
  }
  
}

export default App;
