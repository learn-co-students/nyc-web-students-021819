import React from 'react'
import ProfileCard from "./ProfileCard"

class NinjaTurtles extends React.Component {

  renderProfileCards(){
    return this.props.ninjaTurtles.map(nt => {
      return (
        <div key={nt.id}>
         <ProfileCard turtle={nt} />
         <h3>Weapon of choice: {nt.weapon}</h3>
        </div>
      )
    })
  }

  render(){
    return <div>{this.renderProfileCards()}</div>
  }
}

export default NinjaTurtles