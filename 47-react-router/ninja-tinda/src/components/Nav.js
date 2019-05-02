import React from 'react'

const Nav = (props) => (
  <div className="navbar">
    <button onClick={() => props.changePage("home")} >Ninja Tinda</button>
    <button onClick={() => props.changePage("find")}>Find Turtles</button>
    <button onClick={() => props.changePage("ninjas")}>Your Ninjas</button>
    <button onClick={() => props.changePage("new")}>Add a Turtle</button>
  </div>
)


export default Nav