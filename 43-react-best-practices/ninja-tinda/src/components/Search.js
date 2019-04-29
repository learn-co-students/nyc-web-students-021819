import React from 'react'

class Search extends React.Component {
  handleChange = (event) => {
    this.props.handleFilterChange(event.target.value)
  }


  render(){
    return(
      <form  >
        <input name="input" value={this.props.filterValue} onChange={this.handleChange} />
        <input type="submit" />
      </form>
    )
  }
}

export default Search