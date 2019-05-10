import React from 'react'
import { Route, Switch } from 'react-router-dom'
import './assets/App.css'
import TurtleCarousel from "./containers/TurtleCarousel"
import Home from "./containers/Home"
import NewTurtle from "./containers/NewTurtle"
import Nav from "./components/Nav"
import NinjaTurtles from "./components/NinjaTurtles"
import Welcome from './components/Welcome'
import Goof from './components/Goof'

// connects this component to redux store
// HOC
import { connect } from 'react-redux'

class App extends React.Component {
  state = {
    // page: "welcome",
    // turtles: [],
    user: {}
  }

  componentDidMount(){
    fetch("http://localhost:3000/api/v1/turtles")
    .then(res => res.json())
    .then(data => {
      console.log("1. FETCH IS DONE")
      this.props.setTurtles(data)
      // this.setState({
      //   turtles: data
      // })
    })

    fetch("http://localhost:3000/api/v1/users/1")
    .then(res => res.json())
    .then(data => {
      this.setState({
        user: data
      })
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

  // addTurtle = (turtleData) => {

  //   console.log(turtleData)
  //   fetch("http://localhost:3000/api/v1/turtles", {
  //     method: "POST",
  //     headers: {"Content-Type": "application/json", Accepts: "application/json"},
  //     body: JSON.stringify(turtleData)
  //   })
  //   .then(res => res.json())
  //   .then(response => {
  //     // Pessimistic - use the data as passed back from server and show on DOM
  //     this.setState({
  //       turtles: [...this.state.turtles, response]
  //     })
  //   })
  // }

  render(){
    console.log("APP PROPS", this.props)
    return (
      <div className="App">
        <Nav changePage={this.changePage} />

        <Switch>
          <Route path='/ninja-turtles' render={(props) => <NinjaTurtles {...props}ninjaTurtles={this.state.user.ninja_turtles} />} />
          <Route path='/new' render={() => <NewTurtle/>} />
          <Route path='/carousel' render={() => <TurtleCarousel backToPond={this.backToPond} ninjifyTurtle={this.ninjifyTurtle}/>} />
          <Route path='/turtles' render={() => <Home/> } />
          <Route exact path='/' component={ Welcome } />
          <Route component={ Goof } />
        </Switch>
        {/*this.renderPage()*/}
      </div>
    );
  }

}

// function mapStateToProps(state) {
//   console.log("MSTP", state)
//   return {
//     // reduxTurtles: state.turtles
//   }
// }

function mapDispatchToprops(dispatch) {
  // console.log(dispatch)

  return {
    setTurtles: (turtles) => {
      console.log("2. SET TURTLES IS CALLED WOOOO")
      // dispatch is our new setState and it takes an object with a type and a payload
      dispatch({type: "SET_TURTLES", payload: turtles})
    }
  }
}
export default connect(null, mapDispatchToprops)(App);
