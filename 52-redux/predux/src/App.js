import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  state = {
    quesadillas: [],
    tacos: []
  }

  controller = (type, data) => {

    // type, data, some bit of code that changes state, state

    const copyState = {...this.state}

    switch(type){
      case "ADD QUESADILLA":
        copyState.quesadillas = [...this.state.quesadillas, data]
        break;
      case "ADD TACO":
        copyState.tacos = [...this.state.tacos, data]
        break;
      case "REMOVE TACO":
        copyState.tacos = this.state.tacos.filter(taco => taco.name !== data.name)
        break;
    }

    this.setState(copyState)
  }

  handleAddTaco = () => {
    this.controller("ADD TACO", {name: "Zebra deluxe", filling: "the finest zebras",shell: "gluten-free"})
  }

  handleAddQuesadilla = () => {
    this.controller("ADD QUESADILLA", {name: "Cheesy boi", filling: "cheese"})
  }



  render (){
    // console.log(this.state)
    return (
      <div className="App">
        <header className="App-header">
          <button onClick={this.handleAddTaco} >Add taco</button>
          <button onClick={this.handleAddQuesadilla} >Add quesadilla</button>
        </header>
      </div>
    );
  }
}

export default App;
