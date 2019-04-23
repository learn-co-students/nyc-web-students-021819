import React from 'react'

class Nav extends React.Component {

  
  render(){
    return (
      <div>
        <button onClick={() => this.props.changePage("home")} >Ninja Tinda</button>
        <button onClick={() => this.props.changePage("find")}>Find Turtles</button>
        <button onClick={() => this.props.changePage("new")}>Add a Turtle</button>
      </div>
    )
  }
}

export default Nav