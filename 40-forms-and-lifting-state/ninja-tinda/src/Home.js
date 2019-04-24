import React from 'react'

class Home extends React.Component {

  renderTurtles = () => {
    return this.props.turtles.map(turtle => {
      return (
        <div key={turtle.id} className="turtle-card">
          <div className="card-image-wrapper" >
            <img alt={turtle.name} className="image" src={turtle.image_url} />
          </div>
        </div>
      )
    })
  }

  
  render(){
    return (
      <div className="turtle-card-container">
        {this.renderTurtles()}
      </div>
    )
  }
}

export default Home