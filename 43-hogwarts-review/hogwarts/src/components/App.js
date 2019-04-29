import React, { Component } from 'react'
import '../App.css'
import Nav from './Nav'
import hogs from '../porkers_data'
import HogDex from './HogDex'
import Filter from './Filter'

class App extends Component {
  state = {
      hogs: hogs,
  }

  sortByName = () => {
    const sortedHogs = [...this.state.hogs].sort((hog1, hog2) => {
      return hog1.name.localeCompare(hog2.name)
    })

    this.setState({
      hogs: sortedHogs
    })
  }

  sortByWeight = () => {
    const weight = 'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'

    const sortedHogs = [...this.state.hogs].sort((hog1, hog2) => {
      return hog1[weight] - hog2[weight]
    })

    this.setState({
      hogs: sortedHogs
    })
  }

  handleSort = (value) => {
    value === 'name' ? this.sortByName() : this.sortByWeight()
  }

  handleFilter = (checked) => {
    if (checked) {
      const filtered = this.state.hogs.filter(hog => hog.greased)

      this.setState({
        hogs: filtered
      })
    } else {
      this.setState({
        hogs: hogs
      })
    }
  }

  render() {
    return (
      <div className="App">
          <Nav />
          <Filter
            handleSort={ this.handleSort }
            handleFilter={ this.handleFilter }
          />
          <HogDex hogs={ this.state.hogs } />
      </div>
    )
  }
}

export default App
