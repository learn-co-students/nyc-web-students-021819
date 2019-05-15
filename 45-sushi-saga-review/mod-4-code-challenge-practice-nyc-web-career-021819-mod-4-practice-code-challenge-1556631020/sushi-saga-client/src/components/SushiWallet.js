import React from 'react'

class SushiWallet extends React.Component {
  state = {
    name: '',
    image: '',
    price: 0
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.handleAddSushi(this.state)
    // this.props.handleAddMoney(this.state.amount)
  }

  render() {
    return (
      <form onSubmit={ this.handleSubmit }>
        Name:
        <input onChange={ this.handleChange } name='name' type='text' value={this.state.name}/>
        Image:
        <input onChange={ this.handleChange } name='image' type='text' value={this.state.image}/>
        Price:
        <input onChange={ this.handleChange } name='price' type='number' value={this.state.price}/>

        <input type='submit' value='Add New Sushi' />
      </form>
    )
  }
}

export default SushiWallet
