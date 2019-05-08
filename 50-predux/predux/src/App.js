import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  state = {
    quesadillas: [],
    tacos: []
  }

  addQuesadillas = (data) => {
    // data => {name,filling}
    this.setState({
      quesadillas: [...this.state.quesadillas, data]
    })
  }

  addTacos = (data) => {
    // data => {name,filling,shell}
    this.setState({
      tacos: [...this.state.tacos, data]
    })
  }

  removeTaco = (data) => {
    // data -> {name}
    this.setState({
      tacos: this.state.tacos.filter(taco => taco.name !== data.name)
    })
  }


  controller = (type, data) => {
    switch(type){
      case "ADD QUESADILLA":
        this.addQuesadillas(data)
        break;
      case "ADD TACO":
        this.addTacos(data)
        break;
      case "REMOVE TACO":
        this.removeTaco(data)
        break;
    }
  }

  handleAddTaco = () => {
    this.controller("ADD TACO", {name: "Zebra deluxe", filling: "the finest zebras",shell: "gluten-free"})
  }

  handleAddQuesadilla = () => {
    this.controller("ADD QUESADILLA", {name: "Cheesy boi", filling: "cheese"})
  }



  render (){
    console.log(this.state)
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
