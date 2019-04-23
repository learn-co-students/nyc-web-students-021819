import React from 'react'
import ProfileCard from "./ProfileCard"

class TurtleCarousel extends React.Component {

  // constructor(props){
  //   super()
  //   this.state = {
  //     index: props.turtles.length - 1
  //   }

  //   this.handleClick = this.handleClick.bind(this)
  // }

  state = {
    index: this.props.turtles.length - 1
  }

  handleClick = (event) => {
    // Should update the index and then rerender the ProfileCard

    // Sure it'll work, but problems with edge cases
    // this.setState({
    //   index: this.state.index - 1
    // })   

    // Best practice to use a function for setState
    // when using previous state to set current state
    this.setState((prevState) => {
      return {
        index: prevState.index - 1
      }
    }) 
  }

  render(){
    const targetTurtle = this.props.turtles[this.state.index]

    return (
      <div>
        <button>Back to the pond!</button>
        <ProfileCard turtle={targetTurtle} />
        <button onClick={this.handleClick}>Ninjify!</button>
      </div>
    )
  }
}

export default TurtleCarousel