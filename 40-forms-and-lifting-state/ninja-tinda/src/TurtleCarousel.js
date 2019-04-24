import React from 'react'
import ProfileCard from "./ProfileCard"

class TurtleCarousel extends React.Component {

  state = {
    index: 0
  }

  handleClick = (event) => {
    this.setState((prevState) => {
      return {
        index: prevState.index + 1
      }
    }) 
  }

  render(){
    const targetTurtle = this.props.turtles[this.state.index]

    return (
      <div className="carousel" >
        <button>Back to the pond!</button>
        <ProfileCard turtle={targetTurtle} />
        <button onMouseOver={this.handleClick}>Ninjify!</button>
      </div>
    )
  }
}

export default TurtleCarousel