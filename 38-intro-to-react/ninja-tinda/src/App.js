import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Greeting from "./Greeting"

let data = [
  {
    phrase: "beef",
    name: "Peter"
  },
  {
    phrase: "world",
    name: "Alex"
  },   
  {
    phrase: "squid",
    name: "Katarina"
  }
]

class App extends Component {

  renderGreetings(){
    return data.map(item => {
      return <Greeting phrase={item.phrase} name={item.name}/>
    })
  }

  render() {
    console.log("APP PROPS", this.props)
    return (
      <div>
        {this.renderGreetings()}
        {this.props.children}
      </div>
    );
  }
}

export default App;
