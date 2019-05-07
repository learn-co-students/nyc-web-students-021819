import React from 'react'

function withAds(MyComponent){
  return class extends React.Component {

    state = {
      clicks: 0,
      displayAd: false
    }

    addClick = () => {
      if (this.state.clicks === 3){
        this.setState({
          clicks: 0,
          displayAd: true
        })
      } else {
        this.setState({
          clicks: this.state.clicks + 1
        })
      }
      
    }

    render(){
      if (this.state.displayAd){
        return <iframe title="advertisement" height="250px" width="425px" src="https://www.youtube.com/embed/a8XC4H84rMU?autoplay=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
      } else {
        return ( 
          <div onClick={this.addClick} >
           <MyComponent {...this.props}/>
          </div>
        )
      }
      
    }
  }
}

export default withAds

