import React from 'react'

function withBasic(MyComponent){
  return class extends React.Component {

    state = {
      clicked: false
    }

    colorChange = () => {
      this.setState({
        clicked: !this.state.clicked
      })
    }

    render(){
      return ( 
        <div onClick={this.colorChange} style={{color: this.state.clicked ? "blue" : "red"}}>
          <MyComponent {...this.props}/>
        </div>
      )
    }
  }
}

export default withBasic

