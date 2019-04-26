import React from 'react'

class Search extends React.Component {

  // state = {
  //   input: ""
  // }

  // handleChange = (event) => {
  //   this.setState({
  //     [event.target.name]: event.target.value
  //   })
  // }

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