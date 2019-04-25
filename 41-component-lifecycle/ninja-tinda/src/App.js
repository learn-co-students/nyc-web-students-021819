import React from 'react';
import './App.css';
import data from "./data"
import TurtleCarousel from "./TurtleCarousel"
import Home from "./Home"
import NewTurtle from "./NewTurtle"
import Nav from "./Nav"
import NinjaTurtles from "./NinjaTurtles"

const weapons = [
  "nun-chucks",
  "ninja stars",
  "spoon",
  "sword",
  "taser",
  "crowbar",
  "pen and paper",
  "knowledge",
  "ak 47",
  "keyboards",
  "smaller turtles",
  "Evans"
]

class App extends React.Component {
  state = {
    page: "find",
    turtles: [],
    user: {},
    errors: ""
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
    turtleData.id = this.state.turtles[this.state.turtles.length-1].id + 1
    this.setState({
      turtles: [...this.state.turtles, turtleData]
    })
  }

  renderPage = () => {
    switch(this.state.page){
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
    // if (this.state.errors){
    //   return <h1 style={{color: 'red'}}>{this.state.errors}</h1>
    // }

    return (
      <div className="App">
        <Nav changePage={this.changePage} />
        {this.renderPage()}
      </div>
    );
  }

  componentDidCatch(){
    // this.setState({errors: "WHOA YOU DUN GOOFED"})
    window.location.href = "https://www.farmersonly.com/"
  }
}

export default App;
