import React, { Component } from 'react'
import HogTile from './HogTile'
import v4 from 'uuid'

class HogDex extends Component {
  renderHogs = () => {
    return this.props.hogs.map( hog => {
      return <HogTile key={ v4() } { ...hog } />
    })
  }

  render() {
    return (
      <div>
        { this.renderHogs() }
      </div>
    )
  }
}

export default HogDex
