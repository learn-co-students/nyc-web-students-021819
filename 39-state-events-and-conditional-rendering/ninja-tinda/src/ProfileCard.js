import React from 'react'

class ProfileCard extends React.Component {

  render(){
    return (
      <div id="profile-card">
        <img src={this.props.turtle.image_url} />
        <div id="description">
          <h3>{this.props.turtle.name} - {this.props.turtle.age}</h3>
        </div>
      </div>
    )
  }
}

export default ProfileCard