import React from 'react'
import NinjaTurtleCard from "./NinjaTurtleCard"

class NinjaTurtles extends React.Component {

  renderProfileCards(){
    return this.props.ninjaTurtles.map(nt => {
      const foundTurtle = this.props.turtles.find(turtle => turtle.id === nt.turtle_id)

      return (
        <div key={nt.id}>
          <NinjaTurtleCard turtle={foundTurtle} weapon={nt.weapon}/>
        </div>
      )
    })
  }

  render(){
    return <div>{this.renderProfileCards()}</div>
  }
}

export default NinjaTurtles
