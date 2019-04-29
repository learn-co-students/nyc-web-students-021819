import React from 'react'

class Filter extends React.Component {
  state = {
    value: '',
    checked: false
  }

  handleChange = (e) => {
    this.setState({
      value: e.target.value
    }, () => {
      this.props.handleSort(this.state.value)
    })
  }

  handleChecked = (e) => {
    this.setState((prevState) => ({
      checked: !prevState.checked
    }), () => {
      this.props.handleFilter(this.state.checked)
    })
  }

  render() {
    return (
      <div>
        <select
          onChange={ this.handleChange }
          value={ this.state.value }
        >
          <option defaultValue value='' disabled>Sort by...</option>
          <option value="name">Name</option>
          <option value="weight">Weight</option>
        </select>

        <input
          onChange={ this.handleChecked }
          checked={ this.state.checked }
          type="checkbox"
          name="greased"
        />
        Filter by Greased
      </div>
    )
  }
}

export default Filter
