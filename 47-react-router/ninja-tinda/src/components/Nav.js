import React from 'react'
import { Link } from 'react-router-dom'

const Nav = (props) => (
  <div className="navbar">
    <button>
      <Link to='/turtles'>
        Ninja Tinda
      </Link>
    </button>
    <button>
      <Link to='/carousel'>
        Find Turtles
      </Link>
    </button>
    <button>
      <Link to='/ninja-turtles'>
        Your Ninjas
      </Link>
    </button>
    <button>
      <Link to='/new'>
        Add a Turtle
      </Link>
    </button>
  </div>
)


export default Nav
