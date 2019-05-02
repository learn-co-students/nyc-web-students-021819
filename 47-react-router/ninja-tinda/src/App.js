import React from 'react'
import './assets/App.css'
import TurtleCarousel from "./containers/TurtleCarousel"
import Home from "./containers/Home"
import NewTurtle from "./containers/NewTurtle"
import Nav from "./components/Nav"
import NinjaTurtles from "./components/NinjaTurtles"
import Welcome from './components/Welcome'

class App extends React.Component {
  state = {
    page: "welcome",
    turtles: [],
    user: {}
  }

  componentDidMount(){
    fetch("http://localhost:3000/api/v1/turtles")
    .then(res => res.json())
    .then(data => {
      this.setState({
        turtles: data
      })
    })

    fetch("http://localhost:3000/api/v1/users/1")
    .then(res => res.json())
    .then(data => {
      this.setState({
        user: data
      })
    })
  }

  changePage = (newPage) => {
    this.setState({
      page: newPage
    })
  }

  ninjifyTurtle = (turtleID) => {
    // turtleData => turtle object
    // var weapon = weapons[Math.floor(Math.random()*weapons.length)]
    // const turtleData = this.state.turtles.find(turtle => turtle.id === turtleID)

    // let updateTurtleData = {...turtleData, name: "Ninja " + turtleData.name, weapon: weapon, id: this.state.ninjaTurtles.length+1}
    // this.setState({
    //   ninjaTurtles: [...this.state.ninjaTurtles, updateTurtleData]
    // })
  }

  backToPond = (turtleID) => {
    let turtles = this.state.turtles.filter(turtle => turtle.id !== turtleID)
    if (turtles.length){
       this.setState({
        turtles: turtles
      })
     } else {
      window.location.href = "https://www.farmersonly.com/"
     }
  }

  addTurtle = (turtleData) => {

    console.log(turtleData)
    fetch("http://localhost:3000/api/v1/turtles", {
      method: "POST",
      headers: {"Content-Type": "application/json", Accepts: "application/json"},
      body: JSON.stringify(turtleData)
    })
    .then(res => res.json())
    .then(response => {
      // Pessimistic - use the data as passed back from server and show on DOM
      this.setState({
        turtles: [...this.state.turtles, response]
      })
    })
  }

  renderPage = () => {
    switch(this.state.page){
      case "welcome":
        return <Welcome />
      case "home":
        return <Home turtles={this.state.turtles}/>
      case "find":
        return <TurtleCarousel backToPond={this.backToPond} ninjifyTurtle={this.ninjifyTurtle} turtles={this.state.turtles} />
      case "new":
        return <NewTurtle addTurtle={this.addTurtle} />
      case "ninjas":
        return <NinjaTurtles turtles={this.state.turtles} ninjaTurtles={this.state.user.ninja_turtles} />
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
