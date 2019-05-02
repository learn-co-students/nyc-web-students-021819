import React from 'react';
import logo from './logo.svg';
import './App.css';

function Item (props) {
  return <h1>{props.item}</h1>
}


class App extends React.Component {

  state = {
    food: ["lettuce", "beef", "zebra", "ketchup"],
  }
  render(){
    return (
      <div onClick={this.handleClick} className="App">
        {this.state.food.map((item,index) => <Item key={index} item={item}/>)}
      </div>
    );  
  }
}

export default App;
