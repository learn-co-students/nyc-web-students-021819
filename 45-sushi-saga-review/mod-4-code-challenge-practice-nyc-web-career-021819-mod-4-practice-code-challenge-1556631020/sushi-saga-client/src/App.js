import React, { Component } from "react";
import SushiContainer from "./containers/SushiContainer";
import Table from "./containers/Table";

// Endpoint!
const API = "http://localhost:3000/sushis";

class App extends Component {
  state = {
    sushis: [],
    menuIndex: 0,
    budget: 100
  };

  componentDidMount() {
    fetch(API)
      .then(r => r.json())
      .then(rawSushis => {
        // before setting state, add a new eaten property to each sushi obj
        const updatedSushis = rawSushis.map(sushi => {
          return {
            ...sushi,
            eaten: false
          };
        });
        this.setState({
          sushis: updatedSushis
        });
      });
  }

  sushiToDisplay() {
    return this.state.sushis.slice(
      this.state.menuIndex,
      this.state.menuIndex + 4
    );
  }

  platesToDisplay() {
    return this.state.sushis.filter(sushi => sushi.eaten);
  }

  handleMoreButtonClick = () => {
    this.setState(prevState => {
      let newIndex = prevState.menuIndex + 4;
      if (newIndex >= prevState.sushis.length) {
        newIndex = 0;
      }
      return {
        menuIndex: newIndex
      };
    });
  };

  handleSushiClick = id => {
    const foundSushi = this.state.sushis.find(sushi => sushi.id === id);

    if (!foundSushi.eaten && this.state.budget >= foundSushi.price) {
      const updatedSushi = this.state.sushis.map(sushi => {
        // if the sushi is the one we clicked,
        // change to eaten
        // otherwise just return the original object
        if (sushi === foundSushi) {
          return { ...sushi, eaten: true };
        } else {
          return sushi;
        }
      });
      this.setState(prevState => ({
        budget: prevState.budget - foundSushi.price,
        sushis: updatedSushi
      }));
    }
  };

  render() {
    console.log("in App render, state is", this.state);
    return (
      <div className="app">
        <SushiContainer
          sushis={this.sushiToDisplay()}
          handleSushiClick={this.handleSushiClick}
          handleMoreButtonClick={this.handleMoreButtonClick}
        />
        <Table plates={this.platesToDisplay()} budget={this.state.budget} />
      </div>
    );
  }
}

export default App;
