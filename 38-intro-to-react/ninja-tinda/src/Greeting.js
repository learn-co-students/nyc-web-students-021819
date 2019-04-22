import React from 'react'

// Functional component
// function Greeting(props){
//   return <h1>Hello {props.phrase}! - {props.name}</h1>
// }

// Class component
class Greeting extends React.Component {
  render(){
    return <h1>Hello {this.props.phrase}! - {this.props.name ? this.props.name : "USER"}</h1>
  }
}

export default Greeting
