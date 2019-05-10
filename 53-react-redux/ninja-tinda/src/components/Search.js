import React from 'react'
import { withRouter } from 'react-router-dom'

class Search extends React.Component {
  handleChange = (event) => {
    this.props.handleFilterChange(event.target.value)
  }


  render(){
    // console.log(this.props)
    return(
      <form  >
        <input name="input" value={this.props.filterValue} onChange={this.handleChange} />
        <input type="submit" />
      </form>
    )
  }
}

export default withRouter(Search)