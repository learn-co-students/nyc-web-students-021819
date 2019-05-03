import React from 'react'
import { Link, Switch, Route } from 'react-router-dom'
import NinjaTurtleCard from "./NinjaTurtleCard"

class NinjaTurtles extends React.Component {

  // renderProfileCards(){
  //   return this.props.ninjaTurtles.map(nt => {
  //     const foundTurtle = this.props.turtles.find(turtle => turtle.id === nt.turtle_id)
  //
  //     return (
  //       <div key={nt.id}>
  //         <NinjaTurtleCard turtle={foundTurtle} weapon={nt.weapon}/>
  //       </div>
  //     )
  //   })
  // }

  renderNames(){
    return this.props.ninjaTurtles.map(nt => {
      const foundTurtle = this.props.turtles.find(turtle => turtle.id === nt.turtle_id)

      return (
        <Link key={nt.id} to={`${this.props.match.url}/${foundTurtle.id}`}>
          <h3>
            { foundTurtle.name }
          </h3>
        </Link>
      )
    })
  }

  render(){
    console.log(this.props)
    if (this.props.ninjaTurtles) {
      return (
        <Switch>
          <Route
            path={`${this.props.match.path}/:id`}
            render={(props) =>
              <NinjaTurtleCard {...props} turtles={this.props.turtles} ninjaTurtles={this.props.ninjaTurtles} />
            }
          />
          <Route
            path={this.props.match.path}
            render={() =>
              <div className='turtle-card-container'>{this.renderNames()}</div>
            }
          />
        </Switch>
      )
    } else {
      return <div>Loading...</div>
    }

  }
}

export default NinjaTurtles
