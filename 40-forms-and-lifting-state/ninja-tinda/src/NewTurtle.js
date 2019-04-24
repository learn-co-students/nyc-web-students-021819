import React from 'react'

class NewTurtle extends React.Component {
  
  render(){
    return (
      <div>
        <form>
          <label>Name: </label>
          <input/><br/>

          <label>Image: </label>
          <input/><br/>

          <label>Age</label>
          <input type="number"/><br/>

          <label>Terrestrial: </label>
          <input type="checkbox"/><br/>

          <input type="submit"/>
        </form>
      </div>
    )
  }
}

export default NewTurtle