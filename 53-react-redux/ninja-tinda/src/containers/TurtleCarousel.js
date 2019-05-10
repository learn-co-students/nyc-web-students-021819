import React from 'react'
import ProfileCard from "../components/ProfileCard"
import withAds from '../HOCs/withAds'
import { connect } from 'react-redux'

class TurtleCarousel extends React.Component {

  state = {
    index: 0,
    time: 0
  }

  componentDidMount(){
    this.startTimer()
  }

  componentDidUpdate(prevProps){
    if (this.state.time === 5){
      this.rotate()
    }
  }

  componentWillUnmount(){
    this.clearTimer()
  }

  startTimer = () => {
    this.timer = setInterval(()=> {
      this.setState(prevState => {
        return {time: prevState.time + 1}
      })
    }, 1000)
  }

  clearTimer = () => {
    clearInterval(this.timer)
  }

  handleHover = (event) => {
    const targetTurtleID = this.props.turtles[this.state.index].id
    this.props.ninjifyTurtle(targetTurtleID)
    
    this.rotate()
  }

  rotate = () => {
    const newIndex = this.state.index + 1

    if (newIndex > this.props.turtles.length-1){
      this.setState((prevState) => {
        return {
          index: 0,
          time: 0
        }
      }) 
    } else {
      this.setState((prevState) => {
        return {
          index: newIndex,
          time: 0
        }
      }) 
    }
  }

  handleDelete = () => {
    const targetTurtleID = this.props.turtles[this.state.index].id
    this.props.backToPond(targetTurtleID)
  }

  render(){
    const { turtles } = this.props
    const { index } = this.state

    if (turtles.length){
      const targetTurtle = turtles[index]
      return (
        <div className="carousel" >
          <button onMouseOver={this.handleDelete} >Back to the pond!</button>
          <ProfileCard turtle={targetTurtle} />
          <button onMouseOver={this.handleHover}>Ninjify!</button>
        </div>
      )
    } else {
      return <h1>LOADING</h1>
    }
    
  }
}

function mapStateToProps (state){
  return {
    turtles: state.turtles
  }
}

export default connect(mapStateToProps)(withAds(TurtleCarousel))