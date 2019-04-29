import React from 'react'
import HogDetail from './HogDetail'

const getImageName = (hogName) => {
    return hogName.toLowerCase().split(' ').join('_')
}

class HogTile extends React.Component {
  state = {
    clicked: false
  }

  handleClick = () => {
    this.setState((prevState) => {
      return {
        clicked: !prevState.clicked
      }
    }, () => {
      // guaranteed to run after state has been set
      // console.log('inside', this.state.clicked)
    })

    // not guaranteed to run after state has been set
    // console.log('outside', this.state.clicked)
  }

  render() {
    return (
      <div>
        <h2>{ this.props.name }</h2>
        
        <img src={ `${getImageName(this.props.name)}.jpg` } alt='hog-name' />
        <br />

        <button onClick={ this.handleClick }>
          click me for details!
        </button>

        { this.state.clicked && <HogDetail { ...this.props } /> }
      </div>
    )
  }
}

export default HogTile
