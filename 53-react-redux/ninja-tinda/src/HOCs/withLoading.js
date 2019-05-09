import React from 'react'

function withLoading(MyComponent){
  return class extends React.Component {

    render(){
      if (this.props.loading){
        return <h1>LOADING...</h1>
      } else {
        return ( 
          <MyComponent {...this.props}/>
        )
      }
      
    }
  }
}

export default withLoading

