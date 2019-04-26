import React from 'react'


const colors = [
  "#8920a9",
  "#E29342",
  "#B92121",
  "#373499"
]

class NinjaTurtleCard extends React.Component {


  render(){
    const style={backgroundColor: colors[Math.floor(Math.random()*colors.length)]}

    return (
      <div style={style} className="ninja-card">
        <div className="img_wrapper" >
          <img alt={this.props.turtle.name} className="image" src={this.props.turtle.image_url} />
        </div>
        <div id="description">
          <h3>Ninja {this.props.turtle.name} - {this.props.turtle.age}</h3>
          <h3>Weapon of choice: {this.props.weapon.name}</h3>
          <div className="img_wrapper" >
            <img alt={this.props.weapon.name} className="image weapon" src={this.props.weapon.image_url} />
          </div>
        </div>
      </div>
    )
  }
}

export default NinjaTurtleCard