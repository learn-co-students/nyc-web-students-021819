import React, {Fragment} from 'react'
import Search from "../components/Search"

class Home extends React.Component {

  state = {
    filterValue: ""
  }

  renderTurtles = () => {
    return this.filterTurtles().map(turtle => {
      return (
        <div key={turtle.id} className="turtle-card">
          <div className="card-image-wrapper" >
            <img alt={turtle.name} className="image" src={turtle.image_url} />
          </div>
        </div>
      )
    })
  }

  handleFilterChange = (newFilterValue) => {
    this.setState({
      filterValue: newFilterValue
    })
  }

  filterTurtles = () => {
    return this.props.turtles.filter(turtle => turtle.name.toLowerCase().includes(this.state.filterValue))
  }

  
  render(){
    return (
      <Fragment>
        <Search filterValue={this.state.filterValue} handleFilterChange={this.handleFilterChange}/>
        <div className="turtle-card-container">
          {this.renderTurtles()}
        </div>
      </Fragment>
    )
  }
}

export default Home