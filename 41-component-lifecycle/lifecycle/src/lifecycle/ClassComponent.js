import React, { Component } from 'react';

class ClassComponent extends Component {

  constructor(props){
    super()
    // console.log("Constructor: ", props.name )
    this.state = {beef: true}
  }

  static getDerivedStateFromProps(props, state){
    console.log("GDSFP: ", props.name)
    // Return an object that will be used as state
    return null
  }

  handleClick = () => {
    this.setState(prevState => {
      return {
        beef: !prevState.beef
      }
    })
  }

  componentDidUpdate(prevProps){
    // You can setState, but....!
    // you must use a conditional to prevent an infinite loop
  }

  shouldComponentUpdate(nextProps, nextState){
    // Can compare the current props (this.props) and the current state (this.state)

    // to incoming prop and state values (nextProps, nextState)

    return true
  }


  render() {
    console.log("Render: ", this.props.name)

    return (
      <div style={{ 
        border: `1px solid ${this.props.color}`, 
        margin: 10, 
        textAlign: 'center' 
      }}>
        <p onClick={this.handleClick} style={{ color: this.props.color }}>{this.props.name}</p>
        {this.props.children}
      </div>
    );
  }

  // componentDidMount(){
  //   console.log("CDM: ", this.props.name)

  //   // Stuff that you want to happen, but only after there is stuff on the DOM

  //   // Fetch!

  //   // Adding custom event listeners

  //   // Initialize a interval
  // }

  componentWillUnmount(){
    // Clear intervals
    // Clear timeouts
    // Clear custom event listeners

    // Auto-save
  }
}

ClassComponent.defaultProps = {
  color: 'black'
}

export default ClassComponent;