import React from 'react'
import ProfileCard from "./ProfileCard"

class TurtleCarousel extends React.Component {

  state = {
    index: 0
  }

  handleHover = (event) => {
    // expects a turtle object => where are we getting it from?
    const targetTurtleID = this.props.turtles[this.state.index].id

    this.props.ninjifyTurtle(targetTurtleID)

    const newIndex = this.state.index + 1

    if (newIndex > this.props.turtles.length-1){
      this.setState((prevState) => {
        return {
          index: 0
        }
      }) 
    } else {
      this.setState((prevState) => {
        return {
          index: newIndex
        }
      }) 
    }
    
  }

  handleDelete = () => {
    const targetTurtleID = this.props.turtles[this.state.index].id
    this.props.backToPond(targetTurtleID)
  }

  render(){
    const targetTurtle = this.props.turtles[this.state.index]

    return (
      <div className="carousel" >
        <button onMouseOver={this.handleDelete} >Back to the pond!</button>
        <ProfileCard turtle={targetTurtle} />
        <button onMouseOver={this.handleHover}>Ninjify!</button>
      </div>
    )
  }
}

export default TurtleCarousel