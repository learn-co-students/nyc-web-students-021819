import React from 'react'

class ProfileCard extends React.Component {

  render(){

    const style = {
      backgroundColor: this.props.turtle.terrestrial ? "#e29342" : "#6198b9"
    }
    return (
      <div id="profile-card" style={style}>
        <div className="img_wrapper" >
          <img alt={this.props.turtle.name} className="image" src={this.props.turtle.image_url} />
        </div>
        <div id="description">
          <h3>{this.props.turtle.name} - {this.props.turtle.age}</h3>
        </div>
      </div>
    )
  }
}

export default ProfileCard