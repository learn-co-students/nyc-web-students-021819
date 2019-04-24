import React from 'react'

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
    
    this.props.addTurtle(this.state)

    this.setState({
      name: "",
      image_url: "",
      age: 0,
      terrestrial: false
    })
  }
  
  render(){
    // Monitor our inputs and coordinate each input with state
    // We will use the user input which is now stored in state to do whatever we need to do (DOM manipulation or send fetch request)


    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Name: </label>
          <input name="name" value={this.state.name} onChange={this.handleChange} /><br/>

          <label>Image: </label>
          <input name="image_url" value={this.state.image_url} onChange={this.handleChange}/><br/>

          <label>Age</label>
          <input name="age" value={this.state.age} onChange={this.handleChange} type="number"/><br/>

          <label>Terrestrial: </label>
          <input name="terrestrial" checked={this.state.terrestrial} type="checkbox" onChange={this.handleTerrestrialChange}/><br/>

          <input type="submit"/>
        </form>
      </div>
    )
  }
}

export default NewTurtle