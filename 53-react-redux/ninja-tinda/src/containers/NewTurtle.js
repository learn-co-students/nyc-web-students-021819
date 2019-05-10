import React from 'react'
import { connect } from 'react-redux'

// https://pbs.twimg.com/media/DOtjU33V4AIguev.jpg

class NewTurtle extends React.Component {

  state = {
    name: "",
    image_url: "",
    age: 0,
    terrestrial: false
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleTerrestrialChange = (event) => {
    this.setState({
      terrestrial: event.target.checked
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()

    fetch("http://localhost:3000/api/v1/turtles", {
      method: "POST",
      headers: {"Content-Type": "application/json", Accepts: "application/json"},
      body: JSON.stringify(this.state)
    })
    .then(res => res.json())
    .then(response => {
      this.props.reduxAddTurtle(response)

    })
    

    this.setState({
      name: "",
      image_url: "",
      age: 0,
      terrestrial: false
    })
  }
  
  render(){
    const { name, image_url, age, terrestrial } = this.state
    
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Name: </label>
          <input name="name" value={name} onChange={this.handleChange} /><br/>

          <label>Image: </label>
          <input name="image_url" value={image_url} onChange={this.handleChange}/><br/>

          <label>Age</label>
          <input name="age" value={age} onChange={this.handleChange} type="number"/><br/>

          <label>Terrestrial: </label>
          <input name="terrestrial" checked={terrestrial} type="checkbox" onChange={this.handleTerrestrialChange}/><br/>

          <input type="submit"/>
        </form>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch){
  return {
    reduxAddTurtle: (newTurtle) => {
      dispatch({type: "ADD_TURTLE", payload: newTurtle})
    }
  }
}

export default connect(null, mapDispatchToProps)(NewTurtle)